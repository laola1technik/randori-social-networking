/* global describe, it */
const should = require('chai').should();

function hello() {
    return "hello world";
}

describe('hello', function () {
    it('should say hello', function () {
        hello().should.equal('hello world');
    });
});