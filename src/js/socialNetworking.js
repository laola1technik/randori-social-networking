class SocialNetworking {
    constructor() {
        this.messages = [];
    }

    submit(command) {
        const seperator = ' -> ';
        if (command.includes(seperator)) {
            this.messages.push(command.split(seperator)[1]);
        } else {
            return this.messages.reverse()
                .map(this._addTimestamp)
                .join('\n');
        }
    }

    _addTimestamp(message) {
        return `${message} (1 second ago)`;
    }
}

module.exports = SocialNetworking;