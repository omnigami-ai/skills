# Free release provenance

`archive.py` is the canonical packaging recipe used by both the source checkout’s `tools/skill-index.py` and CI. It flattens
`skills/<slug>/` plus the root license from Git, preserving the original archive bytes. No packaged code executes.
The known fixture passes on macOS and the pinned public Ubuntu/Python runner; every real archive also has to match
its approved digest. `provenance.yml` is the single workflow source, copied by the publisher into free repositories.
The checked-in `revision.json` pins its public recipe source in `omnigami-ai/skills/provenance/`.

The source checkout’s lifecycle is in `tools/signed-releases.mjs` and ship-skill steps 6–7. Run the mutating commands sequentially:

1. Publish/review any changed shared recipe/workflow in the public catalog and pin its commit in `revision.json`.
   The publisher bumps free plugin versions when that revision changes, even when skill archive bytes stay the same.
2. Publish skill files and commit/push their release commits, including the signing workflow. Refresh release facts
   and build the discovery index. Dry-run and upload only newly written archives before signing indexed packages.
3. `prepare <clones>` builds candidates, checks the discovery record, and writes public `releases/` metadata in the
   catalog. Review, commit and push those candidates separately from the still-deployed site index.
4. `tag <clones>` protects tags, pins each approval snapshot with `provenance/<slug>/v<version>` in the catalog,
   and creates the skill's `v<version>` at its exact release commit. Tags are never retargeted. Approval tags are
   resolved over Git, avoiding hosted runners' shared anonymous REST quota; source files are fetched by full SHA.
5. CI runs the fixture and independently rebuilds the tag. It requires agreement with the approval snapshot's
   `skill-index.json` and, for indexed packages, the existing R2 bytes. Only then does SHA-pinned `actions/attest`
   sign the archive and verify the exact repository/workflow/ref/source/signing commit on a public hosted runner.
6. `collect <clones> [slug...]` verifies CI evidence, saves the detached bundle durably on the skill's GitHub Release,
   and independently downloads and verifies both archive and bundle. For over-limit free skills, the archive itself
   is a separate Release asset; the discovery index continues to exclude it. Existing assets are not overwritten.
7. Commit the verified site record and run `npm run check:catalogue` / the site's `check:seo`. Every free skill must
   have a current record. Changed records are downloaded and checked with both GitHub and their saved bundles.
   `npm run check:signatures -- --all` rechecks every free archive. Site deployment requires its own authorization.

The index's RFC fields are unchanged. Attestation details live separately in `site/src/data/skill-attestations.json`;
free `install.md` pages generate the exact verification command from it. CLI/plugin installs do not automatically
perform this signature check. Pro remains unsigned and contributes no public archive candidates or digests.

Temporary CI artifacts contain only small evidence files and expire after seven days. Durable bundles live in
GitHub Releases; verification records and the rollout evidence live in source control. The signature establishes
publisher/workflow identity and exact bytes; it does not certify skill safety or make a SLSA Level 3 claim.

A failed verification stops collection/deploy. For a workflow defect after tags exist, publish a new signing-revision
patch release with unchanged skill bytes where possible; retain old tags and approval snapshots. Identify CDN
requests explicitly with the publisher user agent. Never repair a signature by overwriting an immutable archive,
retargeting a tag or broadening the verification identity.
