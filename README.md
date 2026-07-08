# Fabmaster Maintenance Program — Demo Site

Single-page concept site for a preventive-maintenance subscription program for
grain, feed & fertilizer operations, plus an interactive customer-portal demo.
A business concept for [Fabmaster Welding](https://fabmaster.ca) (Ridgetown, Ontario).

## Structure

```
index.html      — the pitch page (static, no JavaScript)
css/styles.css  — pitch-page styling
images/         — local copies of photography from fabmaster.ca
favicon.svg     — inspection-tag favicon
portal/         — interactive customer-portal demo (vanilla JS, sample data)
```

## Customer portal demo

`portal/index.html` is a mock sign-in (any credentials work) that opens a sample
account for "Maple Creek Grain Ltd." with five sections:

- **My Assets** — 12 tagged assets with status filters and expandable detail
- **Inspection Reports** — PMI report history
- **Upcoming PMIs** — schedule and overdue work
- **Recommendations** — open quotes and monitoring items
- **Documents** — reports, certificates, quotes and compliance files

Everything is client-side; the dataset lives in `portal/data.js`. Downloads and
approvals are stubbed with a "concept only" notice.

## Preview locally

Any static file server that serves `.html` files as-is works, e.g.:

```
npx http-server .
```

then open the printed localhost URL. (Avoid `npx serve` — its default
"clean URLs" mode strips `.html` and breaks the portal's relative links.)

## Notes

- Photography is © Fabmaster Welding, copied from fabmaster.ca so the demo is
  self-contained.
- The Open Graph tags in `index.html` point at the GitHub Pages URL
  (`https://brendangiffordbg-eng.github.io/fabmaster-demo/`) — they become live
  once GitHub Pages is enabled for this repo (Settings → Pages → deploy from
  `main`).
- Fonts (Barlow, Barlow Condensed, IBM Plex Mono) load from Google Fonts, so a
  network connection is needed for full typography.
