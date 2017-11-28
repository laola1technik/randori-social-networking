/* global describe, it */
const should = require('chai').should();
const SocialNetworking = require('socialNetworking.js');

describe('Social Networking', function () {

    describe('Publishing Messages', function () {
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

        it('should publish two messages of different users', function () {
            const socialNetworking = new SocialNetworking();

            socialNetworking.submit('Alice -> I love the weather today');
            socialNetworking.submit('Bob -> I hate the weather tomorrow');

            const timeLine = socialNetworking.submit('Alice');
            timeLine.should.equal('I love the weather today (1 second ago)');
        });

        it('should show timeline of any user', function () {
            const socialNetworking = new SocialNetworking();

            socialNetworking.submit('Alice -> I love the weather today');
            socialNetworking.submit('Bob -> I hate the weather tomorrow');

            const timeLine = socialNetworking.submit('Non_existing_user');
            timeLine.should.equal('');
        });

        it('should not publish empty message', function () {
            const socialNetworking = new SocialNetworking();

            socialNetworking.submit('Alice -> ');
            socialNetworking.submit('Alice ->  ');

            const timeLine = socialNetworking.submit('Alice');
            timeLine.should.equal('');
        });

    });

    it('should report invalid input', function () {
        const socialNetworking = new SocialNetworking();

        const error = socialNetworking.submit('Alice blabla');

        error.should.equal('Invalid command: Alice blabla');
    });

    describe('Following other Users', function () {
        it('should display empty wall', function () {
            const socialNetworking = new SocialNetworking();

            const wall = socialNetworking.submit('Alice wall');
            wall.should.equal('');
        });

        //it('should display message of followed user', function () {
        //    const socialNetworking = new SocialNetworking();
        //
        //    socialNetworking.submit('Alice follows Bob');
        //    socialNetworking.submit('Bob -> The weather is nice today!');
        //
        //    const wall = socialNetworking.submit('Alice wall');
        //    wall.should.equal('Bob - The weather is nice today! (1 second ago)');
        //});
    });
});
//TODO: Only see messages after follows command in wall
//TODO: typical problematic inputs like quote, single char, large input, etc...
