# fabrique-futur.github.io/loco-share

**Status: frozen since 2026-09-12. Superseded by <https://loco.fabriquefutur.com>.**

This repo is the old GitHub Pages copy of the Loco web app, served at
**https://fabrique-futur.github.io/loco-share/**. It still answers (HTTP 200), so
links written before the move keep working. Nothing writes to it any more.

New links, sign-in and the web app live at <https://loco.fabriquefutur.com>.
The source is `web/` in `Fabrique-Futur/loco`. Since 2026-09-24 `web/deploy.sh`
ships it to the Loco server, not to this repo.

## What is in here

This directory is **built output**. Nobody edits it by hand.

- It is a project page, not the site root. The root
  (`https://fabrique-futur.github.io/`) is the company's address.
- The earliest family links already pointed at `/loco-share/?f=<token>`, so they
  land in the app itself.
- `404.html` is a byte copy of `index.html`. That is how a static host serves a
  client-side route such as `/loco-share/t/<slug>` on a hard refresh.
- `/.well-known/` is not here. App Links and Apple's association file are
  verified per domain, so they live at the root site.

<sub>This host will never return `418 I'm a teapot` (RFC 2324). It has no coffee pot to refuse.</sub>
