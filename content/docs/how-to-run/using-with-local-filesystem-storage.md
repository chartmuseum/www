---
title: "Using With Local Filesystem Storage"
date: 2018-08-06T16:44:27+01:00
anchor: "using-with-local-filesystem-storage"
weight: 8
draft: false
---

Make sure you have read-write access to `./chartstorage` (will create if doesn't exist on first upload)

```bash
chartmuseum --debug --port=8080 \
  --storage="local" \
  --storage-local-rootdir="./chartstorage"
```
