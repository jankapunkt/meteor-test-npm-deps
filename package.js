/* eslint-env meteor */

Npm.depends({
  'npm': '6.9.0'
})

Package.describe({
  name: 'jkuester:npm',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Install NPM packages on the run to test packages with NPM dependencies.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-test-npm-deps.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  // this package is meant to aid runtime loading NPM packages for package-tests,
  // omitting the need to wrap packages with flexible NPM dependencies to a meteor project
  testOnly: true
})

Package.onUse(function (api) {
  api.versionsFrom('1.8.1')
  api.use('ecmascript')
  api.use('meteor')
  api.mainModule('npm.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('meteortesting:mocha')
  api.use('practicalmeteor:chai')
  api.use('jkuester:npm')
  api.mainModule('npm-tests.js')
})
