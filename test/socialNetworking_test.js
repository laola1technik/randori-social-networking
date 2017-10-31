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
    it('should publish two messages', function () {
        const socialNetworking = new SocialNetworking();

        socialNetworking.submit('Alice -> I love the weather today');
        socialNetworking.submit('Alice -> I hate the weather tomorrow');

        const timeLine = socialNetworking.submit('Alice');
        timeLine.should.equal(
            'I hate the weather tomorrow (1 second ago)\n' +
            'I love the weather today (1 second ago)');
    });
    //different user
    //time passed
});