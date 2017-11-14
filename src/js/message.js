module.exports = class Message {
    constructor(text) {
        this.text = text;
        this.timestamp = new Date();
    }

    format() {
        const seconds = this._calculateTimeDifference();
        const unit = 'second' + (seconds > 1 ? 's' : '');
        return `${this.text} (${seconds} ${unit} ago)`;
    }

    _calculateTimeDifference() {
        const now = new Date();
        return Math.floor((now.getTime() - this.timestamp.getTime()) / 1000) + 1;
    }
};
