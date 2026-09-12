# loco.fabriquefutur.com

The Loco web app, served by GitHub Pages at **https://loco.fabriquefutur.com/**.

This directory is **built output**. Nothing here is edited by hand: the source
is `web/` in `Fabrique-Futur/loco`, and `web/deploy.sh` rsyncs `web/dist/` over
everything except `.git`, this file and `CNAME`.

`CNAME` is what makes the domain this site's address. Because a custom domain
is served at its **root**, the app's base path is `/` — it used to be
`/loco-share/`, and GitHub 301s that old address onto this one, so every link
already sent keeps working. Cloudflare holds the DNS: `CNAME loco →
fabrique-futur.github.io` in the `fabriquefutur.com` zone.

`404.html` is a byte copy of `index.html`: that is how a static host serves a
client-side route like `/t/<slug>` on a hard refresh.

`/.well-known/` **is** here now. App Links and Apple's association file are
verified per domain, and this repo is the domain. `assetlinks.json` carries the
Android upload-certificate fingerprint and verifies as served;
`apple-app-site-association` needs a Cloudflare Transform Rule to be sent as
`application/json` — see `docs/DOMAIN.md` in `Fabrique-Futur/loco`.
