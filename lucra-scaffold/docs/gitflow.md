# Gitflow Branching Strategy

Lucra uses [Gitflow](https://nvie.com/posts/a-successful-git-branching-model/) for all development.

## Branch Types

### `main`
- Always reflects production-ready code.
- Never commit directly to `main`.
- Only `release/*` and `hotfix/*` branches merge into `main`.
- Every merge into `main` is tagged with a version (e.g., `v1.2.0`).

### `develop`
- The integration branch. All completed features land here first.
- Must always be in a buildable, tested state.
- Branches off: `main` (at project start only).
- Merges into: `release/*`.

### `feature/*`
- One branch per feature or user story.
- Naming: `feature/<short-description>` (e.g., `feature/pdf-parser`, `feature/cashback-optimizer`).
- Branches off: `develop`.
- Merges into: `develop` via pull request.

### `release/*`
- Stabilization and version bump work before a release.
- Naming: `release/<version>` (e.g., `release/1.2.0`).
- Branches off: `develop`.
- Merges into: `main` **and** back into `develop`.
- Only bug fixes and release prep commits go here — no new features.

### `hotfix/*`
- Urgent fixes for production bugs.
- Naming: `hotfix/<short-description>` (e.g., `hotfix/crash-on-import`).
- Branches off: `main`.
- Merges into: `main` **and** `develop`.
- Tagged on `main` after merge (e.g., `v1.1.1`).

## Quick Reference

```bash
# Start a feature
git checkout develop
git checkout -b feature/my-feature

# Finish a feature (via PR to develop)
git push -u origin feature/my-feature
# → open PR targeting develop

# Start a release
git checkout develop
git checkout -b release/1.2.0

# Finish a release
# → PR to main, tag, then PR back to develop

# Start a hotfix
git checkout main
git checkout -b hotfix/critical-bug

# Finish a hotfix
# → PR to main, tag, then PR to develop
```

## Labels

All PRs and issues use the labels defined in [`.github/labels.yml`](../.github/labels.yml).
Use the appropriate `type:` and `scope:` labels on every issue and PR.
