---
title: "Configuration"
date: 2018-08-06T16:26:30+01:00
anchor: "configuration"
weight: 2
draft: false
---

Show all CLI options with `chartmuseum --help`. Common configurations can be seen below.

All command-line options can be specified as environment variables, which are defined by the command-line option, capitalized, with all `-`'s replaced with `_`'s.

For example, the env var `STORAGE_AMAZON_BUCKET` can be used in place of `--storage-amazon-bucket`.

### Using a configuration file
Use `chartmuseum --config config.yaml` to read configuration from a file.

When using file-based configuration, the corresponding option name can be looked up in [`pkg/config/vars.go`]( https://github.com/helm/chartmuseum/blob/main/pkg/config/vars.go). It would be the key of `configVars` entry corresponding to the command line option / environment variable. For example, `--storage` corresponds to `storage.backend` in the configuration file.

Here's a complete example of a `config.yaml`:

```yaml
debug: true
port: 8080
storage.backend: local
storage.local.rootdir: <storage_path>
bearerauth: 1
authrealm: <authorization server url>
authservice: <authorization server service name>
authcertpath: <path to authorization server public pem file>
authactionssearchpath: <optional: JMESPath to find allowed actions in a jwt token>
depth: 2
```
