class Message {
    constructor(text) {
        this._text = text;
        this._timestamp = new Date();
    }

    ofUser(userName){
        this._userName = userName;
    }

    format() {
        const seconds = this._calculateTimeDifference();
        const unit = 'second' + (seconds > 1 ? 's' : '');
        return `${this._text} (${seconds} ${unit} ago)`;
    }

    _calculateTimeDifference() {
        const now = new Date();
        return Math.floor((now.getTime() - this._timestamp.getTime()) / 1000) + 1;
    }

    //ToDo: format of "message with username" within message
}

module.exports = Message;