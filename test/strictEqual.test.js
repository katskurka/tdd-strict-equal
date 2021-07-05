const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual.js')

describe('equality', () => {
  describe('result', () => {
    it('when strings are strictly equal to one another, true is returned', () => {
      let result = strictEqual ('boo', 'boo')
      expect(result).to.equal(true)
    })

    it('when integers are strictly equal, true is returned', () =>{
      let result = strictEqual (7,7)
      expect(result).to.equal(true)
    })
  })
})

