---
title: "Using with etcd"
date: 2022-01-30T13:56:55-05:00
anchor: "using-with-etcd"
weight: 7
draft: false
---

To use etcd as backend you need the CA certificate and the signed key pair.
See [here](https://coreos.com/etcd/docs/latest/op-guide/security.html)

```bash
chartmuseum --debug --port=8080 \
  --storage="etcd" \
  --storage-etcd-cafile="/path/to/ca.crt" \
  --storage-etcd-certfile="/path/to/server.crt" \
  --storage-etcd-keyfile="/path/to/server.key" \
  --storage-etcd-prefix="" \
  --storage-etcd-endpoint="http://localhost:2379"
```
