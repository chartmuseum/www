---
title: "Helm Chart Repository"
date: 2018-08-06T14:48:59+01:00
anchor: "helm-chart-repository"
weight: 1
draft: false
---

- `GET /index.yaml` - retrieved when you run `helm repo add chartmuseum http://localhost:8080/`
- `GET /charts/mychart-0.1.0.tgz` - retrieved when you run `helm install chartmuseum/mychart`
- `GET /charts/mychart-0.1.0.tgz.prov` - retrieved when you run `helm install` with the `--verify` flag