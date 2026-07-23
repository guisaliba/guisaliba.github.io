# AGENTS.md

## Stack

Static Jekyll blog with the [`minima`](https://github.com/jekyll/minima) theme, deployed via **GitHub Pages**. Ruby + Bundler for tooling; no Node, no Next.js anymore (`main`/`v1`/`v2` branches keep the old history).

This is the `v3` line — do not look at `src/`, `package.json`, or any Next.js config; those are gone in this branch.

## Commands

- `bundle install` — first-time setup; installs the `github-pages` gem (pins the whole toolchain — jekyll 3.10, liquid 4.0.4, minima 2.5.1 — to match production).
- `bundle exec jekyll serve` — local dev server. Site is served at `http://127.0.0.1:4000/portfolio/` **with the baseurl prefix** because `baseurl: "/portfolio"` in `_config.yml`. Forgetting the `/portfolio` prefix is the #1 reason "the page is blank locally."
- `bundle exec jekyll build` — full production build into `_site/`.
- There is no lint, no test, no typecheck. Verification = does `bundle exec jekyll build` succeed and do the local pages render.

## Ruby toolchain

- Ruby is pinned to **3.3.4** via `.mise.toml` to match the exact version GitHub Pages builds with (see <https://pages.github.com/versions/>). Run commands through `mise` (auto-activated in this dir) or `mise exec ruby@3.3.4 -- ...`.
- Do not bump the Ruby pin without checking `pages.github.com/versions` first — GH Pages' server Ruby is the source of truth.

## Architecture notes

- **`baseurl: "/portfolio"`** mirrors the GitHub Pages project URL (`guisaliba.github.io/portfolio`). If the repo is ever renamed to `guisaliba.github.io` (user/org site), set `baseurl: ""` and remove the `baseurl` prefix from any hand-written links. Almost every internal link should go through the `relative_url` Liquid filter (`{{ "/path/" | relative_url }}`) so it adapts automatically.
- **`url: "https://guisaliba.github.io"`** — update to a custom domain if one is added later.

### Content model

- Posts live in `_posts/YYYY-MM-DD-title.md`. The filename date prefix is **mandatory** — Jekyll silently ignores the file without it.
- Front matter that matters:
  - `title` (string)
  - `date` (YYYY-MM-DD)
  - `reading_time` (int, **minutes, set manually** — no auto-calculation)
  - `tags` (YAML list, e.g. `tags: [ruby, jekyll]`)
  - `description` (optional, used for SEO meta)
- Defaults: `_config.yml` sets `layout: post`, `reading_time: 1`, `tags: []` for everything under `_posts/`, so a post with no front matter still builds.
- Images: place files in `assets/images/` and reference with `{{ "/assets/images/NAME" | relative_url }}`. Raw binary files without front matter are copied straight through; **do not** add front matter to image files (it turns them into treated pages and breaks them).

### Layouts

- `_layouts/default.html` owns the visible shell (avatar nav, Home/Writings/Tags links, centered copyright footer). `_layouts/home.html` owns the home-only profile hero + writing list. `_layouts/post.html` owns article metadata/content + prev/next nav. Only `_layouts/page.html` is inherited from minima.
- Editable identity/social/song copy lives in `_data/profile.yml`; don't hardcode it into layouts. Social icons are inline SVG selected by `_includes/social-icon.html` — no icon-library dependency.
- Styles are fully custom in `assets/main.scss`; minima is still the theme dependency but its SCSS is not imported. This file compiles to `/assets/main.css`. **Do not** move it to `assets/css/main.scss` because `_layouts/default.html` links `/assets/main.css`.
- Iosevka 400/700 are vendored at `assets/fonts/` and loaded with `font-display: swap`. The avatar/favicon is `assets/images/avatar.png`.

### Tags page (the only "dynamic" part)

- `tags/index.html` is a hand-authored page (layout `page`) at permalink `/tags/`.
- Liquid gathers every tag across `site.posts`, dedupes them, and renders filter chips + a full list of post `<li>`s carrying `data-tags="tag1,tag2"`.
- An inline `<script>` reads `?tag=` from the URL and shows/hides `<li>`s + highlights the active chip. This is the static-site-friendly substitute for per-tag route pages: GitHub Pages does **not** whitelist `jekyll-archives`, and custom Ruby plugins are forbidden on GH Pages, so generate-then-filter is the correct pattern here.
- If you add per-tag pages, do it client-side too — never rely on a non-whitelisted plugin.

## Conventions

- Permalinks: `permalink: /:year/:month/:day/:title/` (post URLs are `/portfolio/2026/07/22/my-post/`). Don't switch to pretty/slug-only without also handling redirects.
- `_config.yml` excludes `Gemfile`, `Gemfile.lock`, `README.md`, `AGENTS.md`, `vendor` from the build output. Keep these excluded.
- `Gemfile.lock` is gitignored (GitHub Pages builds with its own pinned `github-pages` version regardless; the lock only matters for local dev and tends to diverge across Ruby versions). Do not commit it.
- Use the `github-pages` gem, not bare `jekyll` — it pins the exact versions GH Pages uses, so "works locally" means "works on deploy."

## GitHub Pages deploy

- Settings → Pages → Build from branch → `v3` (or `main` once merged) at `(root)`. No Action needed; the classic Jekyll build runs server-side.
- The first build after switching architecture was the `v3` rebuild; expect a few minutes for the GitHub Pages cache to refresh after the first push.

## Gotchas

- **Future-dated posts don't render by default.** If a post's front matter `date` is later than the build date, it's skipped unless `future: true` is set in `_config.yml`. Sample posts here are dated around the build time intentionally.
- **`baseurl` everywhere.** Linking to `/tags/` directly will 404 on a project-page site; always use `relative_url`.
- Wiping `main`/`v1`/`v2` to "clean up" would destroy the user's nostalgia history — leave those branches alone.
