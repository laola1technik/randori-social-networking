class Message {
    constructor(text) {
        this.text = text;
        this.timestamp = new Date();
    }
}

class SocialNetworking {
    constructor() {
        this._messages = [];
    }

    submit(command) {
        const seperator = ' -> ';
        if (command.includes(seperator)) {
            this._messages.push(new Message(command.split(seperator)[1]));
        } else {
            return this._messages.reverse()
                .map(this._addTimestamp)
                .join('\n');
        }
    }

    _addTimestamp(message) {
        const now = new Date();
        const seconds = Math.floor((now.getTime() - message.timestamp.getTime()) / 1000) + 1;

        return `${message.text} (${seconds} second${seconds > 1 ? 's' : ''} ago)`;
    }
}

module.exports = SocialNetworking;