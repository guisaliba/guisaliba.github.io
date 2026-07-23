# guisaliba.github.io

Static personal blog built with [Jekyll](https://jekyllrb.com) + the
[`minima`](https://github.com/jekyll/minima) theme, published via [GitHub
Pages](https://pages.github.com). This is the `v3` line of the repository; the
`main`, `v1`, and `v2` branches are kept as history.

## Preview locally

### First-time setup

Run these commands from the repository root:

```bash
mise install
mise exec -- bundle install
```

`mise install` installs Ruby 3.3.4, the exact version GitHub Pages builds
with. `bundle install` then installs Jekyll, minima, and the other gems pinned
by the `github-pages` gem.

### Start the website

```bash
mise exec -- bundle exec jekyll serve
```

Open **<http://127.0.0.1:4000/>** in your browser. Keep the command
running while you work: Jekyll watches the source files and rebuilds the site
when they change. Refresh the browser to see the latest build. Press `Ctrl+C`
in the terminal to stop the server.

The repository is named `guisaliba.github.io`, so GitHub Pages treats it as a
user site and serves it from the domain root. `_config.yml` therefore uses an
empty `baseurl`.

### Build without starting a server

```bash
mise exec -- bundle exec jekyll build
```

This generates the production-ready static files in `_site/`, but does not
start a website you can visit. Use `jekyll serve` when you want to visualize
the site locally.

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

Posts are generated below `/blog/YYYY/MM/DD/title/`. The complete archive is
at `/blog/`; the homepage shows the three latest posts.

## Tags

Every tag becomes a clickable pill that links to `/tags/?tag=<name>`. The
`/tags/` page reads the `?tag=` query param with a small inline script and
filters the post list client-side. (Per-tag route pages would require a
plugin that GitHub Pages doesn't whitelist, so we filter with a query
param + JS instead.)

## Personal details and styles

- Edit the name, traits, writing subjects, introduction, current song, and
  social links in `_data/profile.yml`.
- The avatar used in the navigation and as the favicon is
  `assets/images/avatar.png`.
- The custom off-white/Geist design lives in `assets/main.scss`; local font
  files are under `assets/fonts/`.

## Deploy

Push `v3` (or `main`, once merged) to `guisaliba/guisaliba.github.io` and enable Pages in the repo
settings: **Settings → Pages → Build from branch → v3 / `(root)`**. GitHub
runs `jekyll build` server-side using its own pinned `github-pages` toolchain
(same versions our `Gemfile` + `.mise.toml` pin locally), so a passing local
build is a reliable signal for a passing deploy.

See [`AGENTS.md`](./AGENTS.md) for the agent-facing cheat sheet.
