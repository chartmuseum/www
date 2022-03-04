---
title: "Prometheus Metrics"
date: 2018-08-06T16:48:44+01:00
anchor: "prometheus-metrics"
weight: 7
draft: false
---

ChartMuseum exposes its [Prometheus metrics](https://prometheus.io/docs/concepts/metric_types/) at the `/metrics` route on the main port. This can be enabled with the `--enable-metrics` command-line flag or the `ENABLE_METRICS` environment variable.

> Note that the metric is disabled by default and on the Kubernetes chart (`ENABLE_METRICS=false` is set in the chart). The `--disable-metrics` command-line flag has be deprecated and will only be available in `v0.14.0` and prior.

Below are the current application metrics exposed. Note that there is a per tenant (repo) label. The repo label corresponds to the depth parameter, so a depth=2 as the example above would
have repo labels named `org1/repoa` and `org2/repob`.

| Metric                                   | Type           | Labels     | Description                              |
| ---------------------------------------- | -------------- | ---------- | ---------------------------------------- |
| chartmuseum_charts_served_total          | Gauge          | {repo="*"} | Total number of charts                   |
| chartmuseum_charts_versions_served_total | Gauge          | {repo="*"} | Total number of chart versions available |

*: see above for repo label

There are other general global metrics harvested (per process, hence for all tenants). You can get the complete list by using the `/metrics` route.

| Metric                                       | Type    | Labels                                                | Description                               |
| -------------------------------------------- | ------- | ----------------------------------------------------- | ----------------------------------------- |
| chartmuseum_request_duration_seconds         | Summary | {quantile="0.5"}, {quantile="0.9"}, {quantile="0.99"} | The HTTP request latencies in seconds     |
| chartmuseum_request_duration_seconds_sum     |         |                                                       |                                           |
| chartmuseum_request_duration_seconds_count   |         |                                                       |                                           |
| chartmuseum_request_size_bytes               | Summary | {quantile="0.5"}, {quantile="0.9"}, {quantile="0.99"} | The HTTP request sizes in bytes           |
| chartmuseum_request_size_bytes_sum           |         |                                                       |                                           |
| chartmuseum_request_size_bytes_count         |         |                                                       |                                           |
| chartmuseum_response_size_bytes              | Summary | {quantile="0.5"}, {quantile="0.9"}, {quantile="0.99"} | The HTTP response sizes in bytes          |
| chartmuseum_response_size_bytes_sum          |         |                                                       |                                           |
| chartmuseum_response_size_bytes_count        |         |                                                       |                                           |
| go_goroutines                                | Gauge   |                                                       | Number of goroutines that currently exist |
