---
title: "Installing Charts into Kubernetes"
date: 2018-08-06T16:22:37+01:00
anchor: "installing-chartsinto-kubernetes"
weight: 3
draft: false
---

Add the URL to your *ChartMuseum* installation to the local repository list:
```bash
helm repo add chartmuseum http://localhost:8080
```

Search for charts:
```bash
helm search repo chartmuseum/
```

Install chart:
```bash
helm install chartmuseum/mychart --generate-name
```
