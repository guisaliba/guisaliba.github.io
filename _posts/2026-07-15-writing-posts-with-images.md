---
title: "Writing posts with images"
date: 2026-07-15
reading_time: 1
tags: [meta, writing]
description: "How images and code blocks look in a Jekyll post."
---

A quick demo of common Markdown bits.

## An image

![Example diagram]({{ "/assets/images/example.svg" | relative_url }})

Images are just files in `assets/images/`. Reference them with
`{{ "/assets/..." | relative_url }}` so the `baseurl` is always correct.

## Code

A fenced block renders with minima's default styling:

```ruby
puts "hello from jekyll"
GEMFILE_SOURCE = "https://rubygems.org"
```

That's all there is to it — Markdown in, static HTML out.