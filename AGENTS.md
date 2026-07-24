# AGENTS.md

## Stack

Static bilingual Jekyll blog with the [`minima`](https://github.com/jekyll/minima) theme, deployed from `main` via **GitHub Pages**. Ruby + Bundler only; old Next.js history remains on `v1`/`v2`.

## Commands

- `bundle install` — first-time setup; installs the `github-pages` gem (pins the whole toolchain — jekyll 3.10, liquid 4.0.4, minima 2.5.1 — to match production).
- `bundle exec jekyll serve` — local dev server at `http://127.0.0.1:4000/` (no path prefix; this is a GitHub Pages user site).
- `bundle exec jekyll build` — full production build into `_site/`.
- There is no lint, no test, no typecheck. Verification = does `bundle exec jekyll build` succeed and do the local pages render.

## Ruby toolchain

- Ruby is pinned to **3.3.4** via `.mise.toml` to match the exact version GitHub Pages builds with (see <https://pages.github.com/versions/>). Run commands through `mise` (auto-activated in this dir) or `mise exec ruby@3.3.4 -- ...`.
- Do not bump the Ruby pin without checking `pages.github.com/versions` first — GH Pages' server Ruby is the source of truth.

## Architecture notes

- **`baseurl: ""`** is required because the repository is `guisaliba/guisaliba.github.io`, a GitHub Pages user site served from the domain root. Keep internal links behind the `relative_url` Liquid filter so a future custom domain works unchanged.
- **`url: "https://guisaliba.github.io"`** — update to a custom domain if one is added later.

### Content model

- Posts live in `_posts/YYYY-MM-DD-title.md`. The filename date prefix is **mandatory** — Jekyll silently ignores the file without it.
- Front matter that matters:
  - `title` (string)
  - `date` (YYYY-MM-DD)
  - `lang` (`en` or `pt-BR`; English is the config default)
  - `translation_key` (stable identifier shared by the EN/PT-BR pair)
  - `reading_time` (int, **minutes, set manually** — no auto-calculation)
  - `tags` (YAML list, e.g. `tags: [ruby, jekyll]`)
  - `description` (optional, used for SEO meta)
  - `cover_image` (**required**, root-relative asset path; every writing list renders it as a square crop)
- Defaults: `_config.yml` sets `layout: post`, `lang: en`, `reading_time: 1`, `tags: []` for `_posts/`. Still set `lang` and `translation_key` explicitly on published posts so the language toggle can pair them.
- Publish translations as two `_posts/` files with the same date and `translation_key`. English keeps `/blog/...`; PT-BR must set a natural translated permalink under `/pt-br/blog/...`. Tags are canonical and **must remain identical across translations**.
- Images: place files in `assets/images/` and reference with `{{ "/assets/images/NAME" | relative_url }}`. Raw binary files without front matter are copied straight through; **do not** add front matter to image files (it turns them into treated pages and breaks them).

### Layouts

- `_layouts/default.html` owns the bilingual shell and centered `EN / PT-BR` switch. `_layouts/home.html` owns the profile + recent writings; `_layouts/page.html` is local (not inherited from minima); `_layouts/post.html` filters prev/next navigation by language.
- Shared identity/social/song data and localized profile copy live in `_data/profile.yml`. Shell/UI translations live in `_data/i18n/en.yml` and `_data/i18n/pt-BR.yml`; don't hardcode translated UI strings into layouts. Social icons are inline SVG selected by `_includes/social-icon.html`.
- Styles are fully custom in `assets/main.scss`; minima is still the theme dependency but its SCSS is not imported. This file compiles to `/assets/main.css`. **Do not** move it to `assets/css/main.scss` because `_layouts/default.html` links `/assets/main.css`.
- Geist, Lora, Geist Mono, and Dancing Script are vendored at `assets/fonts/`. The CSS nav mark uses Dancing Script; its matching favicon is `assets/images/favicon.svg`.
- Post covers live in `assets/images/covers/`. Writing lists render `post.cover_image` at the right as a fixed square with `object-fit: cover`; do not manually create thumbnail variants.

### Tags page (the only "dynamic" part)

- `tags/index.html` and `pt-br/tags/index.html` include `_includes/tags-index.html`; it filters `site.posts` by `page.lang` before gathering tags and rendering results.
- An inline `<script>` reads `?tag=` from the URL and shows/hides `<li>`s + highlights the active chip. This is the static-site-friendly substitute for per-tag route pages: GitHub Pages does **not** whitelist `jekyll-archives`, and custom Ruby plugins are forbidden on GH Pages, so generate-then-filter is the correct pattern here.
- If you add per-tag pages, do it client-side too — never rely on a non-whitelisted plugin.

## Conventions

- English permalinks use `/blog/:year/:month/:day/:title/`; Portuguese translations use explicit translated slugs under `/pt-br/blog/...`. Do not change a published permalink without a redirect.
- English pages stay at root routes; PT-BR counterparts live under `/pt-br/`. Every translatable page needs matching `lang` and `translation_key` front matter so the toggle and `hreflang` links resolve the equivalent page.
- Lists, tags, feeds, and post navigation must filter `site.posts` by language. `/feed.xml` is English-only and `/pt-br/feed.xml` is PT-BR-only; both are hand-authored Liquid Atom feeds.
- `_config.yml` excludes `Gemfile`, `Gemfile.lock`, `README.md`, `AGENTS.md`, `vendor`, `node_modules` from the build output, and `include`s `.htaccess`. Keep these as-is.
- `Gemfile.lock` is gitignored (GitHub Pages builds with its own pinned `github-pages` version regardless; the lock only matters for local dev and tends to diverge across Ruby versions). Do not commit it.
- Use the `github-pages` gem, not bare `jekyll` — it pins the exact versions GH Pages uses, so "works locally" means "works on deploy."

## GitHub Pages deploy

- Settings → Pages → Build from branch → `main` at `(root)`. No Action needed; the classic Jekyll build runs server-side.

## Gotchas

- **Future-dated posts don't render by default.** If a post's front matter `date` is later than the build date, it's skipped unless `future: true` is set in `_config.yml`. Sample posts here are dated around the build time intentionally.
- Even with an empty `baseurl`, keep using `relative_url` for internal links so custom-domain and future hosting changes remain safe.
- Wiping `v1`/`v2` to "clean up" would destroy the user's nostalgia history — leave those branches alone.
