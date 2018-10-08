'use strict'
var expect = require('chai').expect
var tiny = require('../dist/index.js').default

describe('tiny function test', () => {
    it('should return single-spaced string', () => {
        expect(tiny('Too    much    spaces!')).to.equal('Too much spaces!')
    })
    it('should throws type error for non-string value', () => {
        expect(tiny.bind(1234)).to.throw()        
    });
})