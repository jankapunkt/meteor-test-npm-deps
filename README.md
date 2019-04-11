# Meteor NPM Package Test Dependencies

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Load npm dependencies in your package-tests.

Just add this package to your `Package.onTest` list of packages and load the NPM packages your Meteor package requires.
Now you don't need to wrap your packages into a Meteor project for integration testing anymore :-)

## Usage

1. Add this package to your tests:

```javascript
Package.onTest(function (api) {
  // ...
  api.use('jkuester:npm')
  // ...
})
```

2. Load the npm packages that your package requires in your tests:

*package-tests.js*

```javascript
import { NpmLoader } from 'meteor/jkuester:npm'

NpmLoader.load(['lodash@latest'], (err /*, data */) => {
  if (err) {
    throw err
  }
})
```

## LICENSE

MIT 