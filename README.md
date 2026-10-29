# greenwichsec.io

Marketing site for Greenwich Security Labs. Plain static HTML, no build step.

```
.
├── index.html        # the homepage
├── js/main.js        # GMT clock, scroll effects, counters, terminal, contact mailto
├── js/i18n.js        # EN/ES switch: Spanish strings keyed by the English text
├── assets/img/       # clock + panther marks (WebP), favicon, social preview image
├── .well-known/      # security.txt (renew Expires yearly)
├── .nojekyll         # lets GitHub Pages serve .well-known/
└── CNAME             # custom domain for GitHub Pages
```

## Translations

The page is written in English. `js/i18n.js` swaps each text node for its Spanish entry, keyed by the English text with whitespace collapsed. When you change English copy in `index.html`, update the matching key in `js/i18n.js`, or that string stays in English in the Spanish view.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

```bash
git init && git add . && git commit -m "Initial site"
gh repo create greenwichsec.io --public --source=. --push
gh api repos/{owner}/greenwichsec.io/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

DNS for `greenwichsec.io` (at your registrar):

- `A` records on the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `<your-github-user>.github.io`

Then in the repo: Settings > Pages > Custom domain `greenwichsec.io`, and tick "Enforce HTTPS".

## Still to do

- Replace the research focus areas with real posts once they are published.
- Optional: send the contact form to a backend (Formspree, a Cloudflare Worker) instead of opening a pre-filled email.
- Add credentials (certifications, CVEs, talks) and a PGP key if you want them on the page.
- Move inline styles into a stylesheet with CSS variables.
- Add a responsible disclosure page.
