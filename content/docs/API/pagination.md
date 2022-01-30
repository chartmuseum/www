---
title: "Pagination"
date: 2018-08-06T14:49:38+01:00
anchor: "pagination"
weight: 3
draft: false
---

For large chart repositories, you may wish to paginate the results from the `GET /api/charts` route.

To do so, add the `offset` and `limit` query params to the request. For example, to retrieve a list of 5 charts total, skipping the first 5 charts, you could use the following:

```bash
GET /api/charts?offset=5&limit=5
```
