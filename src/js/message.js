/*jshint esversion: 6 */
class Message {

    constructor(text) {
        this._text = text;
        this._timestamp = new Date(); // TODO: refactor out dependency to time, hard to test
    }

    ofUser(userName) {
        this._userName = userName;
    }

    format(showName) {
        const seconds = this._calculateTimeDifference();
        const unit = 'second' + (seconds > 1 ? 's' : '');
        const messageWithTimestamp = `${this._text} (${seconds} ${unit} ago)`;
        if (showName) {
            return `${this._userName} - ${messageWithTimestamp}`;
        }
        return messageWithTimestamp;
    }

    _calculateTimeDifference() {
        const now = new Date();
        return Math.floor((now.getTime() - this._timestamp.getTime()) / 1000) + 1;
    }

    compareTimeDifference(other) {
        return this._timestamp.getTime() - other._timestamp.getTime();
    }
}

module.exports = Message;