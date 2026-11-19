#!/usr/bin/env python3
"""Canonical discovery archive recipe. Imported by the index and signed-release builder.

Only Git-tracked regular files under skills/<slug> plus LICENSE.md; flattened,
sorted USTAR, original modes, zero owners/timestamps, gzip level 9 with no name/time.
Never execute packaged code. Changing this recipe changes published archive bytes.
"""
import gzip
import hashlib
import io
import subprocess
import tarfile


def package(clone, slug, commit):
    source = subprocess.check_output(['git', 'archive', '--format=tar', commit, f'skills/{slug}', 'LICENSE.md'], cwd=clone)
    files = {}
    with tarfile.open(fileobj=io.BytesIO(source)) as archive:
        for member in archive:
            if member.isdir():
                continue
            if not member.isfile():
                raise SystemExit(f'{slug}: unexpected link or special file {member.name}')
            name = member.name.removeprefix(f'skills/{slug}/')
            if name != 'LICENSE.md' and name == member.name:
                raise SystemExit(f'{slug}: unexpected path {name}')
            files[name] = (archive.extractfile(member).read(), member.mode)
    raw = io.BytesIO()
    with tarfile.open(fileobj=raw, mode='w', format=tarfile.USTAR_FORMAT) as archive:
        for name, (data, mode) in sorted(files.items()):
            member = tarfile.TarInfo(name)
            member.size = len(data)
            member.mode = mode
            archive.addfile(member, io.BytesIO(data))
    packed = io.BytesIO()
    with gzip.GzipFile(fileobj=packed, mode='wb', filename='', mtime=0, compresslevel=9) as archive:
        archive.write(raw.getvalue())
    data = packed.getvalue()
    return data, files


def describe(data, files):
    return {'digest': 'sha256:' + hashlib.sha256(data).hexdigest(),
            'archiveBytes': len(data), 'unpackedBytes': sum(len(d) for d, _ in files.values()),
            'files': len(files)}
