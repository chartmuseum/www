---
title: "Using with Tencent Cloud COS Storage"
date: 2022-01-30T13:56:55-05:00
anchor: "using-with-tencent-cloud-cos-storage"
weight: 7
draft: false
---

Make sure your environment is properly setup to access `my-cos-bucket`.

To do so, you must set the following env vars:

- `TENCENT_CLOUD_COS_SECRET_ID`
- `TENCENT_CLOUD_COS_SECRET_KEY`

```bash
chartmuseum --debug --port=8080 \
  --storage="tencent" \
  --storage-tencent-bucket="my-cos-bucket" \
  --storage-tencent-prefix="" \
  --storage-tencent-endpoint="cos.ap-beijing.myqcloud.com"
```
