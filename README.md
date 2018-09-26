# ChartMuseum

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/kubernetes-helm/codefresh-io%2Fchartmuseum-www%2Fchartmuseum-www?branch=master&type=cf-1)]( https://g.codefresh.io/repositories/codefresh-io/chartmuseum-www/builds?filter=trigger:build;branch:master;service:5babd0feb35f256491df1fb1~chartmuseum-www)

Built with [Hugo](https://gohugo.io/).

## Usage

Clone this repository and run:

```bash
npm install
```

### Development

While developing, use:

```bash
hugo server
```

or for developing with `hugo server --buildDrafts --buildFuture`, use:

```bash
hugo server -D
```

Then visit http://localhost:1313/chartmuseum-www to preview. Hugo will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website inside the `/docs` folder, run:

```bash
hugo
```

To get a preview of the content not yet published, run:

```bash
hugo -D
```

### Deploying

The site is automatically deployed when commits land in `/docs` folder in the `master` branch, hosted by GitHub pages.
