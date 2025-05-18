---
title: "Docker Image"
date: 2018-08-06T16:46:50+01:00
anchor: "docker-image"
weight: 12
draft: false
---

Available via [GitHub Package Registry](https://github.com/helm/chartmuseum/pkgs/container/chartmuseum).

Example usage (local storage):
```bash
docker run --rm -it \
  -p 8080:8080 \
  -e DEBUG=1 \
  -e STORAGE=local \
  -e STORAGE_LOCAL_ROOTDIR=/charts \
  -v $(pwd)/charts:/charts \
  ghcr.io/helm/chartmuseum:v0.16.3
```

Example usage (S3):
```bash
docker run --rm -it \
  -p 8080:8080 \
  -e PORT=8080 \
  -e DEBUG=1 \
  -e STORAGE="amazon" \
  -e STORAGE_AMAZON_BUCKET="my-s3-bucket" \
  -e STORAGE_AMAZON_PREFIX="" \
  -e STORAGE_AMAZON_REGION="us-east-1" \
  -v ~/.aws:/root/.aws:ro \
  ghcr.io/helm/chartmuseum:v0.16.3
```
