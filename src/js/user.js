const TimeLine = require('timeLine.js');

class User {
    constructor(name) {
        this._name = name;
        this._messages = [];
        this._subscriptions = [];
    }

    addMessage(message) {
        message.ofUser(this._name);
        this._messages.push(message);
    }

    subscribeTo(user) {
        if (!this._subscriptions.includes(user)) {
            this._subscriptions.push(user);
        }
    }

    get subscriptions() {
        return this._subscriptions;
    }

    timeLine() {
        return new TimeLine(this._messages);
    }
}

module.exports = User;