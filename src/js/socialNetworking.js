class Message {
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
                .map((message)=> {
                    return message.format();
                })
                .join('\n');
        }
    }
}

module.exports = SocialNetworking;