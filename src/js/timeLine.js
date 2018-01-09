class TimeLine {
    constructor(messages) {
        this._messages = messages;
    }

    format() {
        return this._messages
            .reverse()
            .map(message => message.format())
            .join('\n');
    }
}

module.exports = TimeLine;