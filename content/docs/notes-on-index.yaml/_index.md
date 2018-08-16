---
title: "Notes on index.yaml"
date: 2018-08-06T16:49:07+01:00
anchor: "notes-on-index.yaml"
weight: 8
draft: false
---

The repository index (index.yaml) is dynamically generated based on packages found in storage. If you store your own version of index.yaml, it will be completely ignored.

`GET /index.yaml` occurs when you run `helm repo add chartmuseum http://localhost:8080` or `helm repo update`.

If you manually add/remove a .tgz package from storage, it will be immediately reflected in `GET /index.yaml`.

You are no longer required to maintain your own version of index.yaml using `helm repo index --merge`.

The `--gen-index` CLI option (described above) can be used to generate and print index.yaml to stdout.

Upon index regeneration, *ChartMuseum* will, however, save a statefile in storage called `index-cache.yaml` used for cache optimization. This file is only meant for internal use, but may be able to be used for migration to simple storage.