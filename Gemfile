source "https://rubygems.org"

# Use the same toolchain GitHub Pages builds with, so local previews match
# production. The `github-pages` gem pins jekyll, liquid, minima, and every
# whitelisted plugin to the exact versions GH Pages' server uses (see
# https://pages.github.com/versions/).
#
# Ruby: pin 3.3.4 via `.mise.toml` to match GH Pages exactly.
gem "github-pages", group: :jekyll_plugins

# Windows / JRuby compatibility gems (no-op on Linux, but kept for portability).
gem "tzinfo", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", platforms: [:mingw, :mswin, :x64_mingw]