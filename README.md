# Fabmaster Maintenance Program — Demo Site

Single-page concept site pitching a preventive-maintenance subscription program for
grain, feed & fertilizer operations. Prepared for Ryan at
[Fabmaster Welding](https://fabmaster.ca) (Ridgetown, Ontario).

## Structure

```
index.html      — the page (static, no JavaScript)
css/styles.css  — all styling
images/         — local copies of photography from fabmaster.ca
favicon.svg     — inspection-tag favicon
```

## Preview locally

Any static file server works, e.g.:

```
npx serve .
```

then open the printed localhost URL.

## Notes

- Photography is © Fabmaster Welding, copied from fabmaster.ca so the demo is
  self-contained.
- The Open Graph tags in `index.html` point at the GitHub Pages URL
  (`https://brendangiffordbg-eng.github.io/fabmaster-demo/`) — they become live
  once GitHub Pages is enabled for this repo (Settings → Pages → deploy from
  `main`).
- Fonts (Barlow, Barlow Condensed, IBM Plex Mono) load from Google Fonts, so a
  network connection is needed for full typography.
