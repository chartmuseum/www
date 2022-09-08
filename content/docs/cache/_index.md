---
title: "Cache"
date: 2018-08-06T16:47:51+01:00
anchor: "cache"
weight: 6
draft: false
---

By default, the contents of `index.yaml` (per-tenant) will be stored in memory. This means that memory usage will continue to grow indefinitely as more charts are added to storage.

You may wish to offload this to an external cache store, especially for large, multitenant installations.

### Cache Interval

When dealing with thousands of charts, you may experience latency with the default settings.

If you are ok with `index.yaml` being out-of-date for a fixed period of time, you can improve performance by using the `--cache-interval=<interval>` option.

When this setting is enabled, the charts available for each tenant are refreshed on a timer.

For example, to only check storage every 5 minutes, you can use `--cache-interval=5m`.

For valid values to use for this setting, please see [here](https://godoc.org/time#ParseDuration).

### Using Redis

Example of using Redis as an external cache store:
```bash
chartmuseum --debug --port=8080 \
  --storage="local" \
  --storage-local-rootdir="./chartstorage" \
  --cache="redis" \
  --cache-redis-addr="localhost:6379" \
  --cache-redis-password="" \
  --cache-redis-db=0
```
