'use strict'

var should = require('chai').should() // eslint-disable-line no-unused-vars
var src = require('../src/index')

describe('30 sec TDD', function() {
  describe('dummy test:', function() {
    it('true should be true', function() {
      true.should.be.true
    })
  })
  describe('equals', function() {
    it('should only be true if both values are deeply identical', function() {
      src.equals({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] }).should.be.true
      src.equals({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] }).should.be.false
      src.equals({ a: [1, { b: 2 }] }, { a: [1] }).should.be.false
      src.equals(
        new Date(2019, 9, 11, 10, 30, 59, 999),
        new Date(2019, 9, 11, 10, 30, 59, 999)
      ).should.be.true
      src.equals(
        new Date(2019, 9, 11, 10, 30, 59, 999),
        new Date(2019, 9, 11, 10, 30, 59, 998)
      ).should.be.false
      src.equals(1, 1).should.be.true
      src.equals('a', 'a').should.be.true
      src.equals(1, '1').should.be.false
      src.equals(null, null).should.be.true
      src.equals(undefined, null).should.be.false
    })
  })
  describe('Arrays:', function() {
    describe('all(array, condition)', function() {
      it('should return true if all elements match condition', function() {
        src.all([2, 3, 4], x => x > 1).should.be.true
      })
    })
    describe('any(array, condition)', function() {
      it('shoud return true if any element matches condition', function() {
        src.any([0, 1, 2], x => x > 1).should.be.true
      })
    })
    describe('removeFalsy', function() {
      it('shoud remove falsy elements from array', function() {
        src
          .removeFalsy([null, NaN, '', undefined, {}, 0, 1, 'a'])
          .should.be.eql([{}, 1, 'a'])
      })
    })
  })
  describe('Objects:', function() {
    describe('isEmptyObject', function() {
      it('should only be true if it has no properties ', function() {
        src.isEmptyObject({}).should.be.true
        src.isEmptyObject({ a: 1 }).should.be.false
      })
    })
    describe('', function() {
      it('', function() {})
    })
  })
})
