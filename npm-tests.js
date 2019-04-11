/* eslint-env mocha */
import { assert } from 'meteor/practicalmeteor:chai'
import { NpmLoader } from 'meteor/jkuester:npm'

describe('jkuester:npm-load', function () {

  it('is defined', function () {
    assert.isDefined(NpmLoader)
  })

  it('loads a package at runtime', function (done) {
    NpmLoader.load('lodash@latest', (err, data) => {
      if (err) {
        done (err)
      } else if (!data) {
        done(new Error('unexpected no data'))
      } else {
        done()
      }
    })
  })

  it ('contains the installed package', function (done) {
    setTimeout(() => {
      const target = require('lodash')
      assert.isDefined(target)
      done()
    }, 300)
  })
})
