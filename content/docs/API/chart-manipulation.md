---
title: "Chart Manipulation"
date: 2018-08-06T14:49:16+01:00
anchor: "chart-manipulation"
weight: 2
draft: false
---

- `POST /api/charts` - upload a new chart version
- `POST /api/prov` - upload a new provenance file
- `DELETE /api/charts/<name>/<version>` - delete a chart version (and corresponding provenance file)
- `GET /api/charts` - list all charts
- `GET /api/charts/<name>` - list all versions of a chart
- `GET /api/charts/<name>/<version>` - describe a chart version