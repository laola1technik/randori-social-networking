class TimeLine { // TODO: Maybe rename to Messages
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
        messages.sort((a, b) => a.compareTimeDifference(b));
        return new TimeLine(messages);
    }
}

module.exports = TimeLine;