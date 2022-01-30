---
title: "Multitenancy"
date: 2018-08-06T16:47:41+01:00
anchor: "multitenancy"
weight: 5
draft: false
---

Multitenancy is supported with the `--depth` flag.

To begin, start with a directory structure such as
```
charts
├── org1
│   ├── repoa
│   │   └── nginx-ingress-0.9.3.tgz
├── org2
│   ├── repob
│   │   └── chartmuseum-0.4.0.tgz
```

This represents a storage layout appropriate for `--depth=2`. The organization level can be eliminated by using `--depth=1`. The default depth is 0 (singletenant server).

Start the server with `--depth=2`, pointing to the `charts/` directory:
```
chartmuseum --debug --depth=2 --storage="local" --storage-local-rootdir=./charts
```

This example will provide two separate Helm Chart Repositories at the following locations:
- `http://localhost:8080/org1/repoa`
- `http://localhost:8080/org2/repob`

This should work with all supported storage backends.

To use the chart manipulation routes, simply place the name of the repo directly after "/api" in the route:

```bash
curl -F "chart=@mychart-0.1.0.tgz" http://localhost:8080/api/org1/repoa/charts
```

You may also experiment with the `--depth-dynamic` flag, which should allow for dynamic depth levels (i.e. all of `/api/charts`, `/api/myrepo/charts`, `/api/org1/repoa/charts`).
