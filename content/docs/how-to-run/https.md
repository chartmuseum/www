---
title: "HTTPS"
date: 2018-08-06T16:45:01+01:00
anchor: "https"
weight: 10
draft: false
---

If both of the following options are provided, the server will listen and serve HTTPS:

- `--tls-cert=<crt>` - path to tls certificate chain file
- `--tls-key=<key>` - path to tls key file

### HTTPS with Client Certificate Authentication

If the above HTTPS values are provided in addition to below, the server will listen and serve HTTPS and authenticate client requests against the CA certificate:

- `--tls-ca-cert=<cacert>` - path to tls certificate file
