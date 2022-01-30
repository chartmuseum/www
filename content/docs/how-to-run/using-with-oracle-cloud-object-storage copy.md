---
title: "Using With Oracle Cloud Infratructure Object Storage"
date: 2022-01-30T13:56:55-05:00
anchor: "using-with-oracle-cloud-object-storage"
weight: 7
draft: false
---

Make sure your environment is properly setup to access `my-ocs-bucket`.

More info on Oracle Cloud Infrastructure authentication can be found [here](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/apisigningkey.htm).

```bash
chartmuseum --debug --port=8080 \
  --storage="oracle" \
  --storage-oracle-bucket="my-ocs-bucket" \
  --storage-oracle-prefix="" \
  --storage-oracle-compartmentid="ocid1.compartment.oc1..1234"
```
