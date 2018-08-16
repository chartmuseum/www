---
title: "Mirroring the Official Kubernetes Repositories"
date: 2018-08-06T16:50:12+01:00
anchor: "mirroring-the-official-kubernetes-repositories"
weight: 9
draft: false
---

Please see `scripts/mirror_k8s_repos.sh` for an example of how to download all .tgz packages from the official Kubernetes repositories (both stable and incubator).

You can then use *ChartMuseum* to serve up an internal mirror:
```
scripts/mirror_k8s_repos.sh
chartmuseum --debug --port=8080 --storage="local" --storage-local-rootdir="./mirror"
 ```