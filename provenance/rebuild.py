#!/usr/bin/env python3
"""Rebuild the tag and compare its bytes to the independently approved candidate/index."""
import json
import os
from pathlib import Path
import re
import subprocess
import urllib.request
from archive import package, describe


def require(condition, message):
    if not condition:
        raise ValueError(message)


def validate(record, index, repository, commit, ref):
    slug = repository.removeprefix('omnigami-ai/')
    require(repository == 'omnigami-ai/' + slug and re.fullmatch(r'[a-z0-9-]+', slug), 'unexpected repository')
    require(record['repository'] == repository and record['slug'] == slug, 'candidate repository mismatch')
    require(re.fullmatch(r'\d+\.\d+\.\d+', record['version']), 'invalid version')
    require(record['commit'] == commit, 'candidate commit mismatch')
    require(ref == 'refs/tags/v' + record['version'], 'candidate tag mismatch')
    require(re.fullmatch(r'sha256:[0-9a-f]{64}', record['digest']), 'invalid digest')
    row = index['skills'].get(slug)
    if record['indexed']:
        require(row is not None, 'candidate missing from approved skill-index.json')
        for key in ('version', 'commit', 'digest', 'archiveBytes', 'unpackedBytes', 'files'):
            require(record[key] == row[key], 'approved index mismatch: ' + key)
        require(record['url'] == 'https://media.omnigami.ai/m/' + row['media'], 'approved URL mismatch')
    else:
        require(row is None and slug in index['skipped'], 'unindexed candidate is not recorded as skipped')
        for key in ('version', 'unpackedBytes', 'files'):
            require(record[key] == index['skipped'][slug][key], 'skipped index mismatch: ' + key)
    return slug


def main():
    record = json.loads(Path('candidate.json').read_text())
    index = json.loads(Path('skill-index.json').read_text())
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD'], text=True).strip()
    require(commit == os.environ['GITHUB_SHA'], 'checkout is not event commit')
    slug = validate(record, index, os.environ['GITHUB_REPOSITORY'], commit, os.environ['GITHUB_REF'])
    plugin = json.loads(Path('.claude-plugin/plugin.json').read_text())
    require(plugin['version'] == record['version'], 'plugin version mismatch')
    data, files = package(Path('.'), slug, commit)
    facts = describe(data, files)
    for key, value in facts.items():
        require(record[key] == value, 'rebuilt archive mismatch: ' + key)
    # Existing indexed objects must still be those exact bytes. Oversized archives
    # are first published as GitHub Release assets after this job has succeeded.
    if record['indexed']:
        with urllib.request.urlopen(record['url'], timeout=120) as response:
            require(response.read() == data, 'published R2 archive mismatch')
    out = Path('out/provenance')
    out.mkdir(parents=True, exist_ok=True)
    (out / record['filename']).write_bytes(data)
    (out / 'rebuild.json').write_text(json.dumps({**record, 'rebuilt': facts}, indent=2) + '\n')
    print(json.dumps({'slug': slug, **facts}))


if __name__ == '__main__':
    main()
