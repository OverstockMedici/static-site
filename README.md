# Medici Static Website

Static version of the [Mediciventures.com](https://www.mediciventures.com) website.

## Architecture

This project is built on [React](https://reactjs.org/) and [React-Static](https://github.com/react-static/react-static) with [Styled Components](https://www.styled-components.com/). Hosted on a [Google Cloud Bucket](https://cloud.google.com/storage/docs/json_api/v1/buckets). Fronted by [Cloudflare](https://www.cloudflare.com/cdn/) CDN.

## Build Scripts

~~`npm`~~ scripts are run with the [yarn](https://yarnpkg.com/en/) command

### Available Commands

 * `yarn` - install all dependencies
 * `yarn start` - runs client only version of app for development
 * `yarn stage` - builds stage version of app including html files and assets
 * `yarn build` - builds production version of app including html files and assets (same as stage but with `process.env.NODE_ENV=production`)
* `analyze` - runs FoamTree analysis of bundled files and dependency weight
* `serve` - serve built files on port 3000

## Publishing to Stage
_Details coming_...

## Publishing to Production
_Details coming_...

## Sibling Applications

* [Medici Contact Form Service](https://bitbucket.org/mediciventures/medici-contact-form-service/src/master/)
* [Medici Jobs Updater](https://bitbucket.org/mediciventures/medici-jobs-updater/src/master/)
* [Medici Site CMS](https://gitlab.com/mediciventures/medici-site-cms)