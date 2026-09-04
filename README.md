# loco-share

The public viewer for [Loco](https://github.com/Fabrique-Futur/loco) share
links. A single static page: it reads the token from the URL, fetches the
rendered plan from Loco's backend and shows it. It holds no data and no
secrets; the plan lives behind the unguessable token in the link.

- `?t=<token>` — the full plan for co-travellers
- `?f=<token>` — the follow view for family and friends
- `privacy.html`, `terms.html`, `support.html` — legal pages
