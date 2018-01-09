class User {
    constructor(name) {
        this._name = name;
        this._messages = [];
    }

    addMessage(message) {
        this._messages.push(message);
    }

    timeLine() {
        return this._messages
            .reverse()
            .map(message => message.format())
            .join('\n');
    }
}

module.exports = User;