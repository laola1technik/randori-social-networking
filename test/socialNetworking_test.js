/* global describe, it */
const should = require('chai').should();

describe('Social Networking', function () {
    it('should publish message', function () {
        const socialNetworking = new SocialNetworking();
        socialNetworking.submit('Alice -> I love the weather today');
        const timeline = socialNetworking.submit('Alice');

        timeline.should.equal('I love the weather today (1 second ago)');
    });
});