const TimeLine = require('timeLine.js');

class User {
    constructor(name) {
        this._name = name;
        this._messages = [];
        this._follows = [];
    }

    addMessage(message) {
        message.ofUser(this._name);
        this._messages.push(message);
    }

    follows(user) {
        this._follows.push(user);
    }

    timeLine() {
        return new TimeLine(this._messages);
    }
}

module.exports = User;