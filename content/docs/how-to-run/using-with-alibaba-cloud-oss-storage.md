---
title: "Using With Alibaba Cloud Oss Storage"
date: 2018-08-06T16:30:10+01:00
anchor: "using-with-alibaba-cloud-oss-storage"
weight: 6
draft: false
---

Make sure your environment is properly setup to access `my-oss-bucket`.

To do so, you must set the following env vars:

- `ALIBABA_CLOUD_ACCESS_KEY_ID`
- `ALIBABA_CLOUD_ACCESS_KEY_SECRET`

```bash
chartmuseum --debug --port=8080 \
  --storage="alibaba" \
  --storage-alibaba-bucket="my-oss-bucket" \
  --storage-alibaba-prefix="" \
  --storage-alibaba-endpoint="oss-cn-beijing.aliyuncs.com"
```
