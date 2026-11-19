import hashlib
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parent))
from archive import package
from rebuild import validate


class ProvenanceTest(unittest.TestCase):
    def test_recipe_fixture(self):
        # Original discovery recipe fixture: mode, empty file, Unicode and order.
        with tempfile.TemporaryDirectory() as work:
            root = Path(work)
            subprocess.run(['git', 'init', '-q', work], check=True)
            skill = root / 'skills/sample'
            skill.mkdir(parents=True)
            (root / 'LICENSE.md').write_bytes(b'fixture license\n')
            (skill / 'SKILL.md').write_bytes(b'---\nname: sample\ndescription: Fixture\n---\n')
            (skill / 'z.txt').write_bytes(b'')
            (skill / 'a.sh').write_bytes('echo caf\u00e9\n'.encode())
            (skill / 'a.sh').chmod(0o755)
            subprocess.run(['git', '-C', work, 'add', '.'], check=True)
            subprocess.run(['git', '-C', work, '-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.com', 'commit', '-qm', 'fixture'], check=True)
            data, files = package(root, 'sample', 'HEAD')
            self.assertEqual(hashlib.sha256(data).hexdigest(), 'ae27acb82118c5abd972abfcb5ade0779e3d8ad11c1a8611b793eb49e40618c7')
            self.assertEqual(files['a.sh'][1], 0o775)  # git archive applies its default umask
            (skill / 'a.sh').unlink()
            self.assertEqual(package(root, 'sample', 'HEAD')[0], data)

    def test_candidate_ref_commit_index_and_repository_fail_closed(self):
        commit = 'a' * 40
        row = dict(version='1.0.0', commit=commit, digest='sha256:' + 'b' * 64, archiveBytes=20, unpackedBytes=30, files=2, media='skills/sample-bbbbbbbbbbbbbbbb.tar.gz')
        record = dict(row, slug='sample', repository='omnigami-ai/sample', indexed=True, url='https://media.omnigami.ai/m/' + row['media'])
        index = {'skills': {'sample': row}, 'skipped': {}}
        validate(record, index, 'omnigami-ai/sample', commit, 'refs/tags/v1.0.0')
        for repository, sha, ref in [('other/sample', commit, 'refs/tags/v1.0.0'), ('omnigami-ai/sample', 'c'*40, 'refs/tags/v1.0.0'), ('omnigami-ai/sample', commit, 'refs/heads/main')]:
            with self.assertRaises(ValueError):
                validate(record, index, repository, sha, ref)
        for key in ('digest', 'commit', 'version', 'files'):
            bad = json.loads(json.dumps(index))
            bad['skills']['sample'][key] = 'altered'
            with self.assertRaises(ValueError):
                validate(record, bad, 'omnigami-ai/sample', commit, 'refs/tags/v1.0.0')
        with self.assertRaises(ValueError):
            validate(dict(record, indexed=False), index, 'omnigami-ai/sample', commit, 'refs/tags/v1.0.0')


if __name__ == '__main__':
    unittest.main()
