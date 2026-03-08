# Lucra

A local-first personal finance app for tracking spending habits, parsing financial documents, and optimizing credit card cash back rewards.

## Core Principles

- **Privacy first** — all financial data stays on your machine. Nothing is uploaded.
- **Anonymized AI insights** — generate a scrubbed report you can share with any AI assistant for budgeting advice.
- **Smart spend routing** — tell Lucra your cards and their cash back rates; it tells you which card to use.
- **Mobile companion** — a paired mobile app surfaces anonymized insights and cash back recommendations without ever receiving raw financial data.

## Architecture Overview

```
lucra/
├── desktop/         # Electron/Tauri desktop app (all private data lives here)
│   ├── src/
│   │   ├── parser/      # Parses uploaded financial documents (PDF, CSV, OFX, QFX)
│   │   ├── storage/     # Local SQLite database
│   │   ├── anonymizer/  # Strips PII and produces anonymized spending reports
│   │   └── ui/          # Desktop UI
├── mobile/          # React Native mobile companion app
│   ├── src/
│   │   ├── cashback/    # Credit card cash back rate management & optimizer
│   │   ├── insights/    # Displays anonymized spending summaries from desktop sync
│   │   └── ui/
├── shared/          # Shared type definitions and schemas (no private data)
│   └── types/
└── docs/            # Architecture, privacy model, and developer docs
```

## Privacy Model

The desktop app is the **single source of truth** for all financial data. The mobile app never receives raw transactions, account numbers, or document contents. Data flows are:

```
Financial Docs → Desktop Parser → Local SQLite
                                        │
                               Anonymizer Engine
                                    /       \
                          AI Report          Mobile Sync Payload
                        (user exports      (category totals only,
                         manually)          no identifiers)
```

## Getting Started

> See [docs/setup.md](docs/setup.md) for full installation and development setup.

## Branching Strategy

This project follows [Gitflow](docs/gitflow.md).

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready releases only |
| `develop` | Integration branch for completed features |
| `feature/*` | New features branched from `develop` |
| `release/*` | Release preparation, branched from `develop` |
| `hotfix/*` | Urgent fixes branched from `main` |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
