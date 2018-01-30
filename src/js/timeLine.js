class TimeLine {
    constructor(messages) {
        this._messages = messages;
    }

    format(showName = false) {
        return this._messages
            .reverse()
            .map(message => message.format(showName))
            .join('\n');
    }
}

module.exports = TimeLine;