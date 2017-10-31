/* global describe, it */
const should = require('chai').should();
const SocialNetworking = require('socialNetworking.js');

describe('Social Networking', function () {
    it('should publish message', function () {
        const socialNetworking = new SocialNetworking();

        socialNetworking.submit('Alice -> I love the weather today');

        const timeLine = socialNetworking.submit('Alice');
        timeLine.should.equal('I love the weather today (1 second ago)');
    });
});