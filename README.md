# vue-webpack-typescript-boilerplate

> A full-featured Webpack + Typescript setup with hot-reload, linting, unit testing & css extraction.

> This template is Vue 2.0 compatible.

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init simardo/vuejs-typescript-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

## ! Following documentation to be updated !

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `awesome-typescript-loader` (TODO: html + css loader)
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2). TODO: validate
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier). TODO: validate
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano). TODO: validate
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets. ???
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Jasmine](https://jasmine.github.io/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports typescript in test files.
  - Supports all webpack loaders.
  - Easy mock injection.
  - Coverage TODO
    - TODO: `.vue` file coverage exporting

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

- `npm run tslint`: Lint Typescript code with [TSLint](https://palantir.github.io/tslint/).
  - Linting also works automatically when used with the TSLint Visual Studio Code plugin.