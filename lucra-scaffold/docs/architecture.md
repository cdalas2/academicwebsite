# Architecture

## Desktop App

The desktop application is the core of Lucra. It runs entirely locally and is the only component that ever touches raw financial data.

### Responsibilities

- **Document ingestion** — accepts PDF bank statements, CSV exports, OFX/QFX files from financial institutions.
- **Parsing** — extracts transactions, amounts, dates, merchants, and categories from ingested documents.
- **Local storage** — persists all data in an encrypted SQLite database on the user's machine.
- **Anonymization** — produces an anonymized spending report (category totals, date ranges, no merchant names, no account numbers) that the user can export and share with an AI assistant.
- **Mobile sync payload** — generates a minimal, non-identifiable data packet (category-level summaries, cash back optimization data) for the mobile companion app. No raw transactions are ever included.

### Key Boundaries

| Allowed to leave desktop | Never leaves desktop |
|--------------------------|----------------------|
| Category-level spending totals | Raw transactions |
| Anonymized AI report (user action) | Account numbers |
| Card cash back rates (user-entered) | Document files |
| Aggregate date ranges | Merchant names |

## Mobile Companion App

The mobile app is a read-light companion — it displays information derived from the desktop but contains no financial records of its own.

### Responsibilities

- **Cash back optimizer** — the user registers their credit cards and cash back rates per spending category. The app recommends which card to use for a given purchase category.
- **Spending insights** — displays anonymized category-level summaries synced from the desktop (e.g., "You spent 23% more on groceries this month").
- **No raw data storage** — the mobile app database stores only card metadata (name, issuer, rates) and aggregated category totals. It is explicitly prohibited from storing transaction-level data.

### Sync Protocol

Desktop → Mobile sync is one-directional and payload-restricted:

1. User initiates sync from the desktop app.
2. Desktop generates a minimal JSON payload (category totals, no PII).
3. Payload is transferred via local network (same Wi-Fi) or QR code — never through a cloud server.
4. Mobile app ingests and displays the payload; it cannot request additional detail.

## Data Privacy Model

```
User uploads document
        │
        ▼
  Desktop Parser
        │  (raw data never leaves this layer)
        ▼
  Local SQLite DB (encrypted)
        │
   ┌────┴────────────────┐
   │                     │
   ▼                     ▼
Anonymizer           Mobile Sync
   │                 (category totals only)
   ▼                     │
AI Report Export         ▼
(user-controlled)   Mobile App DB
                    (no PII, no raw txns)
```
