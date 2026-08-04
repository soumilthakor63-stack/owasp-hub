# How this hub works

`index.html` doesn't hard-code any menus. It reads `data.js` and builds the
whole page from that list. This is the important part: **you never edit
`index.html` or `styles.css` to add a new page.** You only ever touch two
things — `data.js`, and the `pages/` folder.

## 1. Folder layout

```
owasp-hub/
├── index.html
├── styles.css
├── data.js
└── pages/
    ├── a01-broken-access-control/
    │   ├── access-control.html
    │   ├── ssrf.html
    │   ├── path-traversal.html
    │   └── file-upload.html
    ├── a02-security-misconfiguration/
    │   ├── cors.html
    │   ├── host-header.html
    │   └── info-disclosure.html
    ├── a03-supply-chain/
    ├── a04-cryptographic-failures/
    ├── a05-injection/
    ├── a06-insecure-design/
    ├── a07-authentication-failures/
    ├── a08-data-integrity-failures/
    ├── a09-logging-failures/
    └── a10-exceptional-conditions/
```

Create these `pages/aXX-.../` folders and drop your **existing** quiz/payload
HTML files straight into them, unchanged. Nothing inside those files needs to
be edited — no shared header, no shared nav bar required. They can look
completely different from each other and from the hub; that's fine.

## 2. Point `data.js` at your real filenames

Open `data.js`. Every sub-vulnerability is one object like this:

```js
{ name: "SSRF", count: 5, file: "pages/a01-broken-access-control/ssrf.html", done: true }
```

- `file` — set this to wherever your actual file lives. If your file is
  literally named something else (e.g. `SSRF_quiz.html`), just change the
  path to match. The dashboard doesn't care what the file is named, only
  that the path is correct.
- `count` — cosmetic badge only (how many sub-vulns that one page covers).
- `done` — leave `true` once the file actually exists. If you want a
  category to show as "not built yet," set `done: false` and it'll still
  appear, just visually distinguished, and you can wire the link up later.

You do **not** need to touch `index.html` at all for this step.

## 3. Adding the ~10 files you'll build later

When you finish, say, the "Business Logic" page for A06:

1. Drop the finished `business-logic.html` into `pages/a06-insecure-design/`.
2. In `data.js`, find the A06 block and make sure the `subs` array has an
   entry pointing at that file (there already is one in the starter config —
   just confirm the path matches your real filename).
3. Refresh `index.html`. Done — no other file changes.

If you invent a brand-new sub-vulnerability that isn't in the starter list,
copy one existing object inside the right category's `subs` array, change
`name`, `count`, and `file`, save. It shows up automatically.

## 4. Opening it

Because this uses plain `fetch`-free static links (not iframes), you can
just open `index.html` directly in a browser — no local server required.
If you eventually host it (GitHub Pages, Netlify, a plain web server), the
same structure works unchanged; just upload the whole `owasp-hub/` folder
keeping the relative paths intact.

## 5. Why sub-pages open in a new tab

Each of your quiz/payload/checklist pages is likely a full self-contained
page (own layout, own state for the quiz). Opening them in a new tab means:

- the dashboard stays open behind them so you can jump to the next one
  quickly, and
- you don't have to add any "back to home" link inside your existing pages.

If you'd rather they open in the *same* tab, remove
`target="_blank" rel="noopener"` from the `sub-row` link in `index.html`
(one line, inside the `renderSubRow` function).

## 6. Optional: embedding instead of linking

Right now this uses direct navigation (click → full page loads), which is
the simplest and most robust option since your pages are already fully
built. If later you want the sub-vulnerability content to load *inside* the
dashboard without leaving it (like a single-page app), that's also possible
using an `<iframe src="...">` or a `fetch()` + inject-into-`<div>` pattern —
but that only makes sense if your existing pages don't rely on being the
top-level document (e.g. they don't do `window.location` tricks or expect a
full-page layout). Given you already built ~10 working standalone pages,
direct linking is the lower-risk choice — nothing about your existing code
needs to change.
