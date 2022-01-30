---
title: "Bearer/Token Auth"
date: 2018-08-06T16:44:49+01:00
anchor: "bearer-token-auth"
weight: 9
draft: false
---

If all of the following options are provided, bearer auth will protect all routes:
- `--bearer-auth` - enables bearer auth
- `--auth-realm=<realm>` - authorization server url
- `--auth-service=<service>` - authorization server service name
- `--auth-cert-path=<path>` - path to authorization server public pem file
- `--auth-actions-search-path=<JMESPath>` - (optional) JMESPath to find allowed actions in a jwt token

Using options above, *ChartMuseum* is configured with a public key, and will accept RS256 JWT tokens signed by the associated private key, passed in the `Authorization` header. You can use the [chartmuseum/auth](https://github.com/chartmuseum/auth) Go library to generate valid JWT tokens.

### JWT Token without a custom JMESPath to find actions

In order to gain access to a specific resource, the JWT token must contain an `access` section in the claims. This section indicates which resources the user is able to access. Here is an example token payload:

```json
{
  "exp": 1543995770,
  "iat": 1543995470,
  "access": [
    {
      "type": "artifact-repository",
      "name": "org1/repo1",
      "actions": [
        "pull"
      ]
    }
  ]
}
```

The `type` is always "artifact-repository", the `name` is the namespace/tenant (just use the string "repo" if using single-tenant server), and `actions` is an array of actions the user can perform ("pull" and/or "push).

If your JWT token structure is different, you can configure a [JMESPath string](https://jmespath.org/). So you can define the way to find the allowed actions yourself.

For the `type` and the the `name` you can use following placeholder

* name: `$NAMESPACE`
* type: `$ACCESS_ENTRY_TYPE`

E.g.: If you want to represent the default configuration, the JMESPath looks like: `access[?name=='$NAMESPACE' && type=='$ACCESS_ENTRY_TYPE'].actions[]`.

For more information about how this works, please see [chartmuseum/auth-server-example](https://github.com/chartmuseum/auth-server-example).
