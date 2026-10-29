# greenwichsec.io

Marketing site for Greenwich Security Labs. Plain static HTML, no build step.

```
.
├── index.html        # the homepage
├── css/site.css      # fonts, one class per element style (s1, s2, ...), page rules
├── js/boot.js        # flags that JS runs, before first paint
├── js/main.js        # GMT clock, scroll effects, counters, terminal, contact mailto
├── js/i18n.js        # EN/ES switch: Spanish strings keyed by the English text
├── assets/img/       # clock mark (WebP), fox mark (SVG), favicon, social preview image
├── assets/fonts/     # self-hosted WOFF2 fonts (latin subset) and their SIL OFL licences
├── .well-known/      # security.txt (renew Expires yearly)
├── .nojekyll         # lets GitHub Pages serve .well-known/
└── CNAME             # custom domain for GitHub Pages
```

## Translations

The page is written in English. `js/i18n.js` swaps each text node for its Spanish entry, keyed by the English text with whitespace collapsed. When you change English copy in `index.html`, update the matching key in `js/i18n.js`, or that string stays in English in the Spanish view.

## Content Security Policy

The page loads nothing from other origins (the only outside call is the contact form posting to Web3Forms) and has no inline styles or scripts, so it runs under a strict CSP:

```
default-src 'none'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; connect-src https://api.web3forms.com; form-action 'self'; base-uri 'none'; frame-ancestors 'none'
```

Keep it that way: no `style=""` attributes, `<style>` or `<script>` blocks, `on*=` handlers or third-party URLs. Put new styles in `css/site.css` and new code in `js/`. The `<meta>` copy in `index.html` covers GitHub Pages on its own; the full set of headers (including `frame-ancestors`, HSTS and the rest) is added by Cloudflare in front of Pages.

## Contact form

The form posts to [Web3Forms](https://web3forms.com), which emails each enquiry to the address the access key in `js/main.js` was created with (reply-to is the sender). The key is public by design. To send enquiries somewhere else, create a new key for that address and replace `WEB3FORMS_KEY`. If the request fails, the form falls back to opening a pre-filled email to info@.

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
- Add credentials (certifications, CVEs, talks) and a PGP key if you want them on the page.
- Give the generated `s*` classes in `css/site.css` meaningful names, with CSS variables for the palette.
- Add a responsible disclosure page.
