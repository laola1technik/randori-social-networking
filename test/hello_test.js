const chai = require('chai');
const should = chai.should();
// const expect = chai.expect;
// const assert = chai.assert;

function hello() {
    return "hello world";
}

describe('hello', function () {
    it('should say hello', function () {
        hello().should.equal('hello world');
    });
});