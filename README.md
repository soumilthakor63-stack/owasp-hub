# 🛡️ OWASP Top 10 — Case Files

A self-built, interactive training ground for the OWASP Top 10 — one dashboard, ten categories, dozens of hands-on sub-vulnerability pages, each with its own quiz, payload library, and checklist.

🔗 **Live site:** https://soumilthakor63-stack.github.io/owasp-hub/

---

## 💡 What this is

Most OWASP Top 10 study material is either a dry cheat sheet or a wall of theory. This project turns it into something you actually click through and test yourself against: a dashboard of the ten official categories, each expanding into its real-world sub-vulnerabilities (Broken Access Control alone covers BAC, SSRF, Path Traversal, and File Upload flaws — 20 sub-vulnerabilities in that category alone), and every sub-vulnerability opens into a dedicated page built for active practice, not passive reading.

## 🧭 Dashboard features

- 🔄 **Data-driven navigation** — the entire menu structure lives in one config file (`data.js`). Adding a new sub-vulnerability page is a one-line edit, not a rebuild.
- 📂 **Accordion category cards** — click a category (A01–A10) to expand it; only one stays open at a time.
- 📊 **Live progress tally** — header shows how many sub-vulnerability pages are linked and built.
- ✅ **Status indicators** — done vs. conceptual-only sub-vulnerabilities are visually distinguished.
- 🎨 Clean, editorial visual design — serif headline, warm paper background, deep pine-ink accents, no dark hacker-terminal cliché.

## 🧪 Sub-vulnerability pages

Each sub-vulnerability (SSRF, JWT, SQLi, XSS, business logic flaws, etc.) is its own self-contained page. The **SSRF page** is the current flagship example of the format:

**Three views, one page, zero reloads** (JS-toggled tabs):

1. 🧠 **Quiz** — 20 multiple-choice questions spanning basic SSRF, blacklist/whitelist bypass techniques, blind SSRF, cloud metadata exploitation, and DNS rebinding. Answers are shuffled per attempt, with a live score tracker, a progress bar, and a per-question explanation once answered.
2. 📖 **Concept & Theory** — a written explainer covering what SSRF is, how it works under the hood, and its main sub-types.
3. 🎯 **Bug Bounty Recon Kit** — a checklist that persists across browser sessions (`localStorage`), paired with 9 copy-paste-ready SSRF payload examples for hands-on testing.

**Interactive details:**

- ✅❌ Correct/incorrect answer styling with inline explanations
- 🔁 "Retake Quiz" flow that reshuffles and resets state
- 💾 Checklist progress saved locally, so it survives page refreshes and return visits
- 🎉 A tiered finish sequence for high scores — confetti, sparkle effects, an animated starfield, and an animated score count-up, with distinct "Perfect" vs. "Great" visual treatments
- 🕵️ **Anti-cheat / proctoring simulation** — detects tab-switching or window-blur via the `visibilitychange` API and surfaces a warning modal plus a persistent on-screen banner
- ♿ Respects `prefers-reduced-motion` so the celebration animations don't run for users who've asked their OS to minimize motion
- 🔤 Custom type pairing (Baloo 2 for display, Manrope for body) via Google Fonts, driven by CSS custom properties for easy re-theming

This structure — quiz, theory, and a recon/payload kit, wrapped in the same interaction patterns — is the template for every future sub-vulnerability page in the project.

## 🗂️ Project structure

```
owasp-hub/
├── index.html          → the dashboard
├── styles.css           → dashboard styling
├── data.js              → single source of truth for all categories/sub-vulns
└── pages/
    ├── a01-broken-access-control/
    │   ├── access-control.html
    │   ├── ssrf.html            ← quiz / theory / recon kit, as above
    │   ├── path-traversal.html
    │   └── file-upload.html
    ├── a02-security-misconfiguration/
    │   ├── cors.html
    │   ├── host-header.html
    │   └── info-disclosure.html
    ├── a03-supply-chain/
    │   └── supply-chain.html
    ├── a04-cryptographic-failures/
    │   └── jwt.html
    ├── a05-injection/
    │   ├── sql-injection.html
    │   ├── xss.html
    │   ├── os-command-injection.html
    │   ├── ssti.html
    │   └── nosql-injection.html
    ├── a06-insecure-design/
    │   └── business-logic.html
    ├── a07-authentication-failures/
    │   ├── authentication.html
    │   └── oauth.html
    ├── a08-data-integrity-failures/
    │   ├── deserialization.html
    │   └── prototype-pollution.html
    ├── a09-logging-failures/
    │   └── logging-alerting.html
    └── a10-.../
        └── exception-handling.html
```

## 📋 Coverage

| Category | Sub-vulnerabilities | Status |
|---|---|---|
| 🔐 A01 – Broken Access Control (incl. SSRF) | BAC (7), SSRF (5), Path Traversal (3), File Upload (5) | ✅ 20/20 |
| ⚙️ A02 – Security Misconfiguration | CORS (3), Host Header Attacks (5), Info Disclosure (5) | ✅ 13/13 |
| 📦 A03 – Software Supply Chain Failures | Conceptual (SCA, dependency confusion, typosquatting, SBOM) | ✅ Done |
| 🔑 A04 – Cryptographic Failures | JWT (7) | ✅ 7/7 |
| 💉 A05 – Injection | SQLi (6), XSS (6), OS Command Injection (2), SSTI (3), NoSQLi (3) | ✅ 20/20 |
| 🧠 A06 – Insecure Design | Business Logic Vulnerabilities (11) | ✅ 11/11 |
| 🔓 A07 – Authentication Failures | Authentication (8), OAuth (5) | ✅ 13/13 |
| 🧬 A08 – Software & Data Integrity Failures | Insecure Deserialization (6), Prototype Pollution (4) | ✅ 10/10 |
| 📡 A09 – Logging & Alerting Failures | Conceptual (SIEM, alert fatigue, log tampering, detection theory) | ✅ Done |
| ⚠️ A10 – Mishandling of Exceptional Conditions | Verbose error handling / exception leakage | ✅ Done |

## ➕ Adding a new page

1. 📥 Drop the finished HTML file into the right `pages/aXX-.../` folder.
2. ✏️ Open `data.js`, find that category's `subs` array, add or update an object:
   ```js
   { name: "New Sub-Vuln", count: 5, file: "pages/aXX-.../new-sub-vuln.html", done: true }
   ```
3. 🚀 Commit and push. GitHub Pages redeploys automatically — no other file needs to change.

## 🛠️ Tech

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no server. Hosted free on GitHub Pages.

---

✍️ Made by **SB**
