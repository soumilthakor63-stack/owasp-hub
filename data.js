/**
 * OWASP_DATA drives the entire dashboard.
 * To add a new sub-vulnerability page later: add ONE object to the
 * matching category's `subs` array. To add a whole new category,
 * copy a category block and change the fields. Nothing else in the
 * site needs to change — index.html reads this file and builds itself.
 *
 * Fields per sub-vulnerability:
 *   name  -> label shown on the card
 *   count -> number of sub-vulnerabilities covered inside that page
 *            (just for the badge, not a strict requirement)
 *   file  -> path to YOUR existing html file, relative to index.html
 *   done  -> true/false, controls the ✅ / 🚧 badge
 */

const OWASP_DATA = [
  {
    id: "a01",
    code: "A01",
    title: "Broken Access Control",
    note: "includes SSRF now",
    subs: [
      { name: "Access Control (BAC)", count: 7, file: "pages/a01-broken-access-control/access-control.html", done: true },
      { name: "SSRF", count: 5, file: "pages/a01-broken-access-control/ssrf.html", done: true },
      { name: "Path Traversal", count: 3, file: "pages/a01-broken-access-control/path-traversal.html", done: true },
      { name: "File Upload Vulnerabilities", count: 5, file: "pages/a01-broken-access-control/file-upload.html", done: true },
    ],
  },
  {
    id: "a02",
    code: "A02",
    title: "Security Misconfiguration",
    subs: [
      { name: "CORS", count: 3, file: "pages/a02-security-misconfiguration/cors.html", done: true },
      { name: "HTTP Host Header Attacks", count: 5, file: "pages/a02-security-misconfiguration/host-header.html", done: true },
      { name: "Information Disclosure", count: 5, file: "pages/a02-security-misconfiguration/info-disclosure.html", done: true },
    ],
  },
  {
    id: "a03",
    code: "A03",
    title: "Software Supply Chain Failures",
    subs: [
      { name: "Supply Chain Concepts", count: null, note: "SCA tools, dependency confusion, typosquatting, malicious packages, SBOM basics", file: "pages/a03-supply-chain/supply-chain.html", done: true, conceptual: true },
    ],
  },
  {
    id: "a04",
    code: "A04",
    title: "Cryptographic Failures",
    subs: [
      { name: "JWT", count: 7, file: "pages/a04-cryptographic-failures/jwt.html", done: true },
    ],
  },
  {
    id: "a05",
    code: "A05",
    title: "Injection",
    subs: [
      { name: "SQL Injection", count: 6, file: "pages/a05-injection/sql-injection.html", done: true },
      { name: "XSS", count: 6, file: "pages/a05-injection/xss.html", done: true },
      { name: "OS Command Injection", count: 2, file: "pages/a05-injection/os-command-injection.html", done: true },
      { name: "SSTI", count: 3, file: "pages/a05-injection/ssti.html", done: true },
      { name: "NoSQL Injection", count: 3, file: "pages/a05-injection/nosql-injection.html", done: true },
    ],
  },
  {
    id: "a06",
    code: "A06",
    title: "Insecure Design",
    subs: [
      { name: "Business Logic Vulnerabilities", count: 11, file: "pages/a06-insecure-design/business-logic.html", done: true },
    ],
  },
  {
    id: "a07",
    code: "A07",
    title: "Authentication Failures",
    subs: [
      { name: "Authentication", count: 8, file: "pages/a07-authentication-failures/authentication.html", done: true },
      { name: "OAuth Authentication", count: 5, file: "pages/a07-authentication-failures/oauth.html", done: true },
    ],
  },
  {
    id: "a08",
    code: "A08",
    title: "Software and Data Integrity Failures",
    subs: [
      { name: "Insecure Deserialization", count: 6, file: "pages/a08-data-integrity-failures/deserialization.html", done: true },
      { name: "Prototype Pollution", count: 4, file: "pages/a08-data-integrity-failures/prototype-pollution.html", done: true },
    ],
  },
  {
    id: "a09",
    code: "A09",
    title: "Logging & Alerting Failures",
    subs: [
      { name: "Logging & Alerting Concepts", count: null, note: "SIEM basics, alert fatigue, log tampering, detection theory", file: "pages/a09-logging-failures/logging-alerting.html", done: true, conceptual: true },
    ],
  },
  {
    id: "a10",
    code: "A10",
    title: "Mishandling of Exceptional Conditions",
    subs: [
      { name: "Information Disclosure (via Exceptions)", count: null, note: "Verbose error handling, exception leakage", file: "pages/a10-Exception handling and information disclosure/Exception handling and information disclosure.html", done: true },
    ],
  },
];