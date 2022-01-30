---
title: "Helm Chart"
date: 2018-08-06T16:47:03+01:00
anchor: "helm-chart"
weight: 13
draft: false
---

There is a [Helm chart for *ChartMuseum*](https://github.com/chartmuseum/charts/tree/main/src/chartmuseum) itself which can be found in the ChartMuseum repository.

You can also view it on [Artifact Hub](https://artifacthub.io/packages/helm/chartmuseum/chartmuseum).

To install:
```bash
helm repo add chartmuseum https://chartmuseum.github.io/charts
helm install chartmuseum/chartmuseum
```

If interested in making changes, please submit a PR to [chartmuseum/charts](https://github.com/chartmuseum/charts). Before doing any work, please check for any [currently open pull requests](https://github.com/chartmuseum/charts/pulls). Thanks!
