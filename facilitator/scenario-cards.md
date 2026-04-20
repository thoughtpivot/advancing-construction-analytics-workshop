# Scenario cards (facilitator copy)

Print one set per room (or one per table). Timings assume **35–40 minutes** of small-group design work total; adjust debrief to fit your agenda.

---

## Group 1 — The “silent” submittal auditor

### Problem (read aloud)

Reviewers miss **alternates**, **deletions vs. baselines**, and **scope drift** buried in long vendor PDFs—especially when the clock is loud and the spec book is not open side-by-side.

### Design prompt

Build an **agentic flow** that flags mismatches against the **master spec** and the **contract baseline**—with a UX that is **not chat-first**.

### Deliverables on the canvas

- **Source of truth:** which spec revision / section tree is authoritative? Where does it live (CMiC, Procore, SharePoint, BIM 360 docs)?
- **Inputs:** submittal PDF, metadata (spec section, package ID), optional RFI link.
- **Outputs:** structured diff (pass / flag / block) plus **evidence spans** (page + snippet) a reviewer can trust.
- **Router / worker / judge:** what does each step do? What is small-model safe vs. what needs a frontier “risk read”?

### MCP angle — vendor vs. custom

- **Vendor path:** document repository MCP (if available)—fast integration, watch for **rate limits**, shallow metadata, and **permission boundaries** (subcontractor visibility).
- **Custom path:** MCP over your **spec index** (chunked + cached embeddings + lexical fallback) and **submittal OCR pipeline** you control—more engineering, **predictable** cost and latency.

### 10-minute “pressure test” questions

1. Who is liable if the agent misses a clause—how does your UX keep humans in the loop?
2. What is your **golden set** of 5–10 labeled examples before anyone says “fine-tune”?

---

## Group 2 — The “bid leveling” logic engine

### Problem (read aloud)

You receive **many trade bids** with different exclusions, allowances, alternates, and scope language. Apples-to-apples comparison is slow—and the model context is often the **only** place where intent gets normalized.

### Design prompt

Use **MCP** to pull **APS** (or equivalent model / property) data and **level** bids into a standard **WBS** view for comparison—without asking estimators to write prompts all day.

### Deliverables on the canvas

- **WBS template:** what is the canonical breakdown (CSI-driven, company standard, project-specific)?
- **APS / model signals:** quantities, locations, types—what actually resolves ambiguity in exclusions?
- **Bid ingestion:** PDF tables, Excel, portal exports—where does structure appear?

### MCP angle — vendor vs. custom

- **Vendor path:** “stock” construction cloud MCP—great for **demos**, often **metered** or **opinionated** about which queries are allowed.
- **Custom MCP:** wrap APS Data Management / Model Derivative + your own caches; you choose **pagination**, **caching**, and **tenant isolation**.

### 10-minute “pressure test” questions

1. What happens when the model is **wrong revision**—how do you detect and block?
2. What is the **smallest model** that can normalize line items vs. the model you need for **risk language** in exclusions?

---

## Group 3 — The “historical knowledge” estimator

### Problem (read aloud)

Junior estimators do not inherit the **story** of why the last hospital (or data center, or campus) **lost margin**—only fragments in email and static reports.

### Design prompt

Build a tool that pulls **historical actuals** from the **ERP** via MCP to **sanity-check** a new estimate (ranges, ratios, anomalies)—again, not chat-first if possible.

### Deliverables on the canvas

- **ERP facts:** which tables / views are allowed (actuals, commitments, change orders, closeout)?
- **Privacy / segmentation:** what must never leave a business unit or joint venture?
- **UX:** variance table, “why this number” drill-down, narrative memo—pick one primary surface.

### MCP angle — vendor vs. custom

- **Vendor path:** packaged analytics MCP—fast, but often **generic schemas** and **black-box** transformations.
- **Custom MCP:** read-only SQL views you govern, with row-level security mirrored in the tool layer—**higher trust** with IT, more work up front.

### 10-minute “pressure test” questions

1. What is a **wrong answer** that still looks plausible—how do you catch it?
2. What is the **30-day pilot** metric (hours saved, error rate, adoption)?

---

## Alternate — Invoice vs. contract analysis

Use when finance + operations want a **controls** story, or when the room has many controllers / PMs with pay-app pain.

### Problem (read aloud)

Draws, pay apps, and vendor invoices drift from **contract / SOV** language—exceptions surface in email, not in a system reviewers trust.

### Design prompt

Build an agentic **line-item reconciliation** flow (invoice ↔ contract baseline ↔ change orders) with an **exceptions queue**, **citations**, and a surface that is **not chat-first** (table + drill-down).

### Deliverables on the canvas

- **Sources of truth:** where do SOV, executed changes, and AP extracts live (ERP, Procore, CMiC)?
- **Matching rules:** fuzzy vendor names, unit conversions, retention lines—what is automated vs. human?
- **Risk:** payment holds, lien exposure—who signs off on auto-posted matches?

### 10-minute “pressure test” questions

1. What is the **minimum evidence** required before finance releases a payment?
2. How do you prove the model did not **hallucinate** a tie between unrelated line items?

---

## Alternate — Data cleanup using AI synthesis

Use when the audience is **data / analytics** heavy or when “we cannot AI until we fix the warehouse” keeps coming up.

### Problem (read aloud)

Exports are noisy: duplicate vendors, legacy codes, inconsistent units—**downstream BI** inherits garbage faster than stewards can clean it.

### Design prompt

Design an **AI-assisted normalization** pipeline: suggest mappings and clusters, route low-confidence rows to **human approval gates**, and emit **clean dimensions** the warehouse can trust.

### Deliverables on the canvas

- **Input channels:** CSV drops, API pulls, manual uploads—what is allowed?
- **Golden rules:** which fields are authoritative (cost code, vendor master, UOM)?
- **Metrics:** % auto-approved, time-to-clean batch, regression tests on known dirty files.

### 10-minute “pressure test” questions

1. What happens when the model **over-collapses** two vendors that look alike but are legally distinct?
2. What is your **rollback** story if a bad mapping ships to production?

---

## Alternate — Synthesize AEC news for strategy documents

Use for **BD / strategy / leadership** cohorts, or when you want a **competitive intelligence** arc aligned with Part 1.

### Problem (read aloud)

BD and leadership drown in feeds; **strategy memos** go stale before anyone reads them—and citations are rarely reusable.

### Design prompt

**Synthesize AEC news** (plus filings, press, selected trade sources) into a **strategy document template**—markets, competitors, risks—with **citations**, scheduled refresh, and optional “human editor” workflow.

### Deliverables on the canvas

- **Source list:** which feeds are in-bounds (licensing, robots.txt, paid APIs)?
- **Output shape:** one-pager vs. deep dive—what is the canonical outline?
- **Governance:** disclaimer, “not investment advice,” and who owns factual accuracy before it goes to execs.

### 10-minute “pressure test” questions

1. How do you detect **stale or contradictory** claims across two reputable sources?
2. What is the **single metric** that proves the brief saved time (prep hours, meeting quality)?
