---
title: "Using with Baidu Cloud BOS Storage"
date: 2022-01-30T13:56:55-05:00
anchor: "using-with-baidu-cloud-bos-storage"
weight: 7
draft: false
---

Make sure your environment is properly setup to access `my-bos-bucket`.

To do so, you must set the following env vars:

- `BAIDU_CLOUD_ACCESS_KEY_ID`
- `BAIDU_CLOUD_ACCESS_KEY_SECRET`

```bash
chartmuseum --debug --port=8080 \
  --storage="baidu" \
  --storage-baidu-bucket="my-bos-bucket" \
  --storage-baidu-prefix="" \
  --storage-baidu-endpoint="bj.bcebos.com"
```
