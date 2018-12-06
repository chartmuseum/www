---
title: "Docker Image"
date: 2018-08-06T16:46:50+01:00
anchor: "docker-image"
weight: 12
draft: false
---

Available via [Docker Hub](https://hub.docker.com/r/chartmuseum/chartmuseum/).

Example usage (local storage):
```bash
docker run --rm -it \
  -p 8080:8080 \
  -e DEBUG=1 \
  -e STORAGE=local \
  -e STORAGE_LOCAL_ROOTDIR=/charts \
  -v $(pwd)/charts:/charts \
  chartmuseum/chartmuseum:latest
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
  chartmuseum/chartmuseum:latest
```
