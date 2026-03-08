/**
 * Lucra Desktop → Mobile Sync Payload
 *
 * This is the ONLY schema that may be transmitted from the desktop to the
 * mobile app. It contains no PII, no transaction-level data, and no
 * account identifiers.
 *
 * Do not add fields here without a privacy review.
 */

export interface MobileSyncPayload {
  /** ISO 8601 timestamp of when this payload was generated */
  generatedAt: string;

  /** The calendar month this payload covers (YYYY-MM) */
  period: string;

  /** Spending totals by category — no merchant names, no account info */
  categoryTotals: CategoryTotal[];

  /** User-registered card cash back rates (entered by user, not derived from transactions) */
  cards: CardProfile[];
}

export interface CategoryTotal {
  /** Spending category (e.g., "Groceries", "Gas", "Dining") */
  category: string;

  /** Total amount spent in this category for the period */
  totalAmount: number;

  /** Currency code (e.g., "USD") */
  currency: string;

  /**
   * Percentage change vs prior period.
   * Null if no prior period data is available.
   */
  changeVsPriorPeriod: number | null;
}

export interface CardProfile {
  /** User-assigned nickname for this card (e.g., "Chase Sapphire") */
  nickname: string;

  /** Card network — used only for display purposes */
  network: "Visa" | "Mastercard" | "Amex" | "Discover" | "Other";

  /** Cash back rates per spending category, in percentage points (e.g., 3.0 = 3%) */
  cashBackRates: Record<string, number>;

  /** Default cash back rate for categories not explicitly listed */
  defaultRate: number;
}
