---
title: "Using With Microsoft Azure Blob Storage"
date: 2018-08-06T16:28:34+01:00
anchor: "using-with-microsoft-azure-blob-storage"
weight: 5
draft: false
---

Make sure your environment is properly setup to access `mycontainer`.

To do so, you must set the following env vars:
- `AZURE_STORAGE_ACCOUNT`
- `AZURE_STORAGE_ACCESS_KEY`

```bash
chartmuseum --debug --port=8080 \
  --storage="microsoft" \
  --storage-microsoft-container="mycontainer" \
  --storage-microsoft-prefix=""
```