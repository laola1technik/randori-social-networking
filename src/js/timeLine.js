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

    merge(timeLine) {
        const messages = this._messages.concat(timeLine._messages);
        const sortedMessages = messages.sort((a, b) => {
            return b._timestamp.getTime() - a._timestamp.getTime();
        });
        return new TimeLine(sortedMessages);
    }

}

module.exports = TimeLine;