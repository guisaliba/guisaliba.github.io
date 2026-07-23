# portfolio

Static personal blog built with [Jekyll](https://jekyllrb.com) + the
[`minima`](https://github.com/jekyll/minima) theme, published via [GitHub
Pages](https://pages.github.com). This is the `v3` line of the repository; the
`main`, `v1`, and `v2` branches are kept as history.

## Run locally

```bash
mise install           # installs Ruby 3.3.4 (matches GitHub Pages' build Ruby)
bundle install          # first time only
bundle exec jekyll serve
# open http://127.0.0.1:4000/portfolio/
```

Ruby is pinned via [mise](https://mise.jdx.dev) in `.mise.toml` to **3.3.4**,
the exact version GitHub Pages builds with (see
<https://pages.github.com/versions/>). The dev server runs from the repo
root; the site is served at `/portfolio/` because `baseurl: "/portfolio"`
mirrors the GitHub Pages project URL (`https://guisaliba.github.io/portfolio/`).

## Write a post

1. Create `_posts/YYYY-MM-DD-title.md`.
2. Front matter:

   ```yaml
   ---
   title: "My post"
   date: 2026-07-22
   reading_time: 5      # minutes, set manually
   tags: [ruby, jekyll]
   description: "Optional SEO description."
   ---
   ```

3. Body is Markdown. Drop images in `assets/images/` and reference them with
   `{{ "/assets/images/x.png" | relative_url }}`.

## Tags

Every tag becomes a clickable pill that links to `/tags/?tag=<name>`. The
`/tags/` page reads the `?tag=` query param with a small inline script and
filters the post list client-side. (Per-tag route pages would require a
plugin that GitHub Pages doesn't whitelist, so we filter with a query
param + JS instead.)

## Deploy

Push `v3` (or `main`, once merged) to GitHub and enable Pages in the repo
settings: **Settings → Pages → Build from branch → v3 / `(root)`**. GitHub
runs `jekyll build` server-side using its own pinned `github-pages` toolchain
(same versions our `Gemfile` + `.mise.toml` pin locally), so a passing local
build is a reliable signal for a passing deploy.

See [`AGENTS.md`](./AGENTS.md) for the agent-facing cheat sheet.