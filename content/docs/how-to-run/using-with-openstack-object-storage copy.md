---
title: "Using With Openstack Object Storage"
date: 2018-08-06T16:43:57+01:00
anchor: "using-with-openstack-object-storage"
weight: 7
draft: false
---

Make sure your environment is properly setup to access `mycontainer`.

To do so, you must set the following env vars (depending on your openstack version):

- `OS_AUTH_URL`
- either `OS_PROJECT_NAME` or `OS_TENANT_NAME` or `OS_PROJECT_ID` or `OS_TENANT_ID`
- either `OS_DOMAIN_NAME` or `OS_DOMAIN_ID`
- either `OS_USERNAME` or `OS_USERID`
- `OS_PASSWORD`

```bash
chartmuseum --debug --port=8080 \
  --storage="openstack" \
  --storage-openstack-container="mycontainer" \
  --storage-openstack-prefix="" \
  --storage-openstack-region="myregion"
```

For Swift V1 Auth you must set the following env vars:

- `ST_AUTH`
- `ST_USER`
- `ST_KEY`

```bash
chartmuseum --debug --port=8080 \
  --storage="openstack" \
  --storage-openstack-auth="v1" \
  --storage-openstack-container="mycontainer" \
  --storage-openstack-prefix=""
```
