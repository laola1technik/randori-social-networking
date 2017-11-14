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

    it('should record time of message', function (done) {
        const socialNetworking = new SocialNetworking();

        socialNetworking.submit('Alice -> I love the weather today');
        setTimeout(function () {

            socialNetworking.submit('Alice -> I hate the weather tomorrow');

            const timeLine = socialNetworking.submit('Alice');
            timeLine.should.equal(
                'I hate the weather tomorrow (1 second ago)\n' +
                'I love the weather today (2 seconds ago)');
            done();
        }, 1000);

    });

    it('should publish two messages of different users', function() {
        const socialNetworking = new SocialNetworking();

        socialNetworking.submit('Alice -> I love the weather today');
        socialNetworking.submit('Bob -> I hate the weather tomorrow');

        const timeLine = socialNetworking.submit('Alice');
        timeLine.should.equal('I love the weather today (1 second ago)');
    });

    it('should show timeline of any user', function() {
        const socialNetworking = new SocialNetworking();

        socialNetworking.submit('Alice -> I love the weather today');
        socialNetworking.submit('Bob -> I hate the weather tomorrow');

        const timeLine = socialNetworking.submit('Non existing user');
        timeLine.should.equal('');
    });
});
