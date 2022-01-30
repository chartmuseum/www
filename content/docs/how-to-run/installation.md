---
title: "Installation"
date: 2018-08-06T16:25:43+01:00
anchor: "installation"
weight: 1
draft: false
---

### CLI
Install binary using [GoFish](https://gofi.sh/):
```bash
gofish install chartmuseum
==> Installing chartmuseum...
🐠  chartmuseum 0.14.0: installed in 95.431145ms
```

or you can use the installer script:
```
curl https://raw.githubusercontent.com/helm/chartmuseum/main/scripts/get-chartmuseum | bash
```

or download manually from the [releases page](https://github.com/helm/chartmuseum/releases),
which also contains all package checksums and signatures.

Determine your version with `chartmuseum --version`.
