# fabrique-futur.github.io/loco-share

The Loco web app, served by GitHub Pages at
**https://fabrique-futur.github.io/loco-share/**.

This directory is **built output**. Nothing here is edited by hand: the source
is `web/` in `Fabrique-Futur/loco`, and `web/deploy.sh` rsyncs `web/dist/` over
everything except `.git` and this file.

It is a *project* page rather than the site root because the root
(`https://fabrique-futur.github.io/`) is the company's address, not one
product's. The path is also where the earliest family links already pointed —
`/loco-share/?f=<token>` — so those now land in the app itself.

`404.html` is a byte copy of `index.html`: that is how a static host serves a
client-side route like `/loco-share/t/<slug>` on a hard refresh.

`/.well-known/` is deliberately **not** here. App Links and Apple's association
file are verified per domain, so they live at the root site.
