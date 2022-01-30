---
title: "Using with Amazon S3 or Compatible services like MinIO or DigitalOcean"
date: 2018-08-06T16:27:08+01:00
anchor: "using-amazon-s3"
weight: 3
draft: false
---

Make sure your environment is properly setup to access `my-s3-bucket`

For Amazon S3, `endpoint` is automatically inferred.

```bash
chartmuseum --debug --port=8080 \
  --storage="amazon" \
  --storage-amazon-bucket="my-s3-bucket" \
  --storage-amazon-prefix="" \
  --storage-amazon-region="us-east-1"
```

You need at least the following permissions inside your IAM Policy

```yaml
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowListObjects",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::my-s3-bucket"
    },
    {
      "Sid": "AllowObjectsCRUD",
      "Effect": "Allow",
      "Action": [
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-s3-bucket/*"
    }
  ]
}
```

In order to work with AWS service accounts you may need to set `AWS_SDK_LOAD_CONFIG=1` in your environment.
For more context, please see [here](https://github.com/helm/chartmuseum/issues/280#issuecomment-592292527).

> **Note**: With certain S3-based storage backends, the `LastModified` field on objects
is truncated to the nearest second. For more info, please see issue [#152](https://github.com/helm/chartmuseum/issues/152).
In order to mitigate this, you may use use the `--storage-timestamp-tolerance` option.
For example, to round to the nearest second, you could use `--storage-timestamp-tolerance=1s`.
For acceptable values to use for this field, please see [here](https://golang.org/pkg/time/#ParseDuration).

### MinIO

For S3 compatible services like Minio, set the credentials using environment variables and pass the `endpoint`.

```bash
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
chartmuseum --debug --port=8080 \
  --storage="amazon" \
  --storage-amazon-bucket="my-s3-bucket" \
  --storage-amazon-prefix="" \
  --storage-amazon-region="us-east-1" \
  --storage-amazon-endpoint="my-s3-compatible-service-endpoint"
```

### DigitalOcean

For DigitalOcean, set the credentials using environment variable and pass the `endpoint`.
Note below, that the region `us-east-1` needs to be set, since that is how the DigitalOcean cli implementation functions. The actual region of your spaces location is defined by the endpoint. Below we are using Frankfurt as an example.

```bash
export AWS_ACCESS_KEY_ID="spaces_access_key"
export AWS_SECRET_ACCESS_KEY="spaces_secret_key"
  chartmuseum --debug --port=8080 \
  --storage="amazon" \
  --storage-amazon-bucket="my_spaces_name" \
  --storage-amazon-prefix="my_spaces_name_subfolder" \
  --storage-amazon-region="us-east-1" \
  --storage-amazon-endpoint="https://fra1.digitaloceanspaces.com"
```

The `access_key` and `secret_key` can be generated from the DigitalOcean console, under the section API/Spaces_access_keys.
