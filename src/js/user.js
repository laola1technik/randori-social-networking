const TimeLine = require('timeLine.js');

class User {
    constructor(name) {
        this._name = name;
        this._messages = [];
    }

    addMessage(message) {
        this._messages.push(message);
    }

    timeLine() {
        return new TimeLine(this._messages);
    }
}

module.exports = User;