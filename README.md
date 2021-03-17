# ChartMuseum

[![Netlify Status](https://api.netlify.com/api/v1/badges/d126af9a-b300-4730-87b2-381fdeea6853/deploy-status)](https://app.netlify.com/sites/gracious-euclid-64e975/deploys)

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
