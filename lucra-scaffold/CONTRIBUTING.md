# Contributing to Lucra

## Branching

Lucra uses Gitflow. See [docs/gitflow.md](docs/gitflow.md) for the full guide.

**Quick rules:**
- Branch from `develop` for new features → `feature/<name>`
- Branch from `develop` for releases → `release/<version>`
- Branch from `main` for hotfixes → `hotfix/<name>`
- Never push directly to `main` or `develop`

## Pull Requests

- Use the PR template — fill out every section.
- Every PR needs at least one approving review.
- All CI checks must pass before merge.
- Squash merge into `develop`; merge commit into `main` for releases and hotfixes.

## Labels

Apply the appropriate `type:`, `scope:`, and `priority:` labels to every issue and PR.
The full label set is in [`.github/labels.yml`](.github/labels.yml).

## Privacy Rules

These are non-negotiable:

1. **Raw transactions stay in desktop storage.** No feature may read transaction-level data outside of `desktop/src/storage/`.
2. **The anonymizer is the only export gate.** Any data leaving the app (AI report, mobile sync) must pass through `desktop/src/anonymizer/`.
3. **Mobile receives no PII.** The mobile sync payload schema is enforced in `shared/types/sync.ts` — do not extend it with identifiable fields without a full privacy review.

## Commit Messages

Use the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <short description>

[optional body]
```

Examples:
```
feat(parser): add OFX file format support
fix(cashback): correct rounding in reward calculation
docs(gitflow): clarify hotfix merge procedure
```
