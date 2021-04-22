---
title: "Helm Chart"
date: 2018-08-06T16:47:03+01:00
anchor: "helm-chart"
weight: 13
draft: false
---

There is a [Helm chart for *ChartMuseum*](https://github.com/kubernetes/charts/tree/master/stable/chartmuseum) itself which can be found in the official Kubernetes Charts repository.

You can also view it on [Kubeapps Hub](https://hub.kubeapps.com/charts/stable/chartmuseum).

To install:
```bash
helm repo add chartmuseum https://chartmuseum.github.io/charts
helm install chartmuseum/chartmuseum
```

If interested in making changes, please submit a PR to kubernetes/charts. Before doing any work, please check for any [currently open pull requests](https://github.com/kubernetes/charts/pulls?q=is%3Apr+is%3Aopen+chartmuseum). Thanks!
