---
title: "Other Cli Options"
date: 2018-08-06T16:45:13+01:00
anchor: "other-cli-options"
weight: 11
draft: false
---

- `--log-json` - output structured logs as json
- `--disable-api` - disable all routes prefixed with /api
- `--disable-statefiles` - disable use of index-cache.yaml
- `--allow-overwrite` - allow chart versions to be re-uploaded without ?force querystring
- `--disable-force-overwrite` - do not allow chart versions to be re-uploaded, even with ?force querystring
- `--chart-url=<url>` - absolute url for .tgzs in index.yaml
- `--storage-amazon-endpoint=<endpoint>` - alternative s3 endpoint
- `--storage-amazon-sse=<algorithm>` - s3 server side encryption algorithm
- `--storage-openstack-cacert=<path>` - path to a custom ca certificates bundle for openstack
- `--chart-post-form-field-name=<field>` - form field which will be queried for the chart file content
- `--prov-post-form-field-name=<field>` - form field which will be queried for the provenance file content
- `--index-limit=<number>` - limit the number of parallel indexers
- `--context-path=<path>` - base context path (new root for application routes)
- `--depth=<number>` - levels of nested repos for multitenancy