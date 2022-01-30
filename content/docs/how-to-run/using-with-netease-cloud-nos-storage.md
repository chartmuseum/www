---
title: "Using with Netease Cloud NOS Storage"
date: 2022-01-30T13:56:55-05:00
anchor: "using-with-netease-cloud-nos-storage"
weight: 7
draft: false
---

Make sure your environment is properly setup to access `my-nos-bucket`.

To do so, you must set the following env vars:

- `NETEASE_CLOUD_ACCESS_KEY_ID`
- `NETEASE_CLOUD_ACCESS_KEY_SECRET`

```bash
chartmuseum --debug --port=8080 \
  --storage="netease" \
  --storage-netease-bucket="my-nos-bucket" \
  --storage-netease-prefix="" \
  --storage-netease-endpoint="nos-eastchina1.126.net"
```
