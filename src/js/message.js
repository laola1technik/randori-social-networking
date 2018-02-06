class Message {
    constructor(text) {
        this._text = text;
        this._timestamp = new Date();
    }

    ofUser(userName) {
        this._userName = userName;
    }

    format(showName) {
        const seconds = this._calculateTimeDifference();
        const unit = 'second' + (seconds > 1 ? 's' : '');
        if (showName) {
            return `${this._userName} - ${this._text} (${seconds} ${unit} ago)`;
        }
        return `${this._text} (${seconds} ${unit} ago)`;
    }

    _calculateTimeDifference() {
        const now = new Date();
        return Math.floor((now.getTime() - this._timestamp.getTime()) / 1000) + 1;
    }

    compareTimeDifference(other) {
        return other._timestamp.getTime() - this._timestamp.getTime();
    }
}

module.exports = Message;