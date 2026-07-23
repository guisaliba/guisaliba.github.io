---
title: "Welcome to the new site"
date: 2026-07-22
reading_time: 2
tags: [meta, jekyll]
description: "A short note on how this blog is set up with Jekyll and GitHub Pages."
cover_image: /assets/images/covers/welcome-to-the-new-site.svg
---

This is the first post on the rebuilt static site. It's a Jekyll blog hosted on
GitHub Pages — no Next.js, no client-side fetch, no external "brain" repo.

Everything you need to know to add a post lives in this file:

- The filename **must** be `_posts/YYYY-MM-DD-title.md`.
- The front matter sets `title`, `date`, `reading_time` (minutes, manual), and
  `tags` (a YAML list).
- The body is plain Markdown. Images go in `assets/images/` and are referenced
  with a site-relative path, like the one below.

![A placeholder SVG image]({{ "/assets/images/example.svg" | relative_url }})

Tags become clickable links to `/tags/?tag=...`, which filters the tag index
client-side. See the [tags page]({{ "/tags/" | relative_url }}) for a live
demo.

That's it for now. The next post walks through adding images and code blocks.
