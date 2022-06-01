# webpack-fugly-loader

A webpack loader for the Fugly templating language.

## About

This webpack loader allows you to use the fugly templating language inside of webpack, and it will compile the template into a JavaScript module. This makes it possible to import `.fugly` files inside your project.

## Usage

### Requirements

- NodeJS
- Webpack

### How to install?

Clone this repository and add this loader to your webpack configuration.

```js
// webpack.config.js

const path = require('path')

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.fugly$/,
        use: [
          {
            loader: path.join(
              __dirname,
              'webpack-fugly-loader',
              'src',
              'loader.js'
            ),
          },
        ],
      },
    ],
  },
}
```

This will make it possible to import fugly files as follows:

```js
import MyTemplate from './templates/my-template.fugly'

const html = MyTemplate({
  // ...
})
```
