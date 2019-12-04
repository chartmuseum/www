---
title: "Installation"
date: 2018-08-06T16:25:43+01:00
anchor: "installation"
weight: 1
draft: false
---

### CLI
Install binary using [GoFish](https://gofi.sh/):
```
gofish install chartmuseum
==> Installing chartmuseum...
🐠  chartmuseum 0.10.0: installed in 95.431145ms
```

or manually:
```bash
# on Linux
curl -LO https://s3.amazonaws.com/chartmuseum/release/latest/bin/linux/amd64/chartmuseum

# on macOS
curl -LO https://s3.amazonaws.com/chartmuseum/release/latest/bin/darwin/amd64/chartmuseum

# on Windows
curl -LO https://s3.amazonaws.com/chartmuseum/release/latest/bin/windows/amd64/chartmuseum

chmod +x ./chartmuseum
mv ./chartmuseum /usr/local/bin
```
Using `latest` in URLs above will get the latest binary (built from master branch).

Replace `latest` with `$(curl -s https://s3.amazonaws.com/chartmuseum/release/stable.txt)` to automatically determine the latest stable release (e.g. `v0.10.0`).

Determine your version with `chartmuseum --version`.
