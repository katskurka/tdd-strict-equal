const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual.js')

describe('strictEqual', () => {
  describe('result', () => {
    it('when strings are strictly equal to one another, true is returned', () => {
      let result = strictEqual ('boo', 'boo')
      expect(result).to.equal(true)
    })
  })
})