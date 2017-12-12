const Message = require('message.js');

class Post {

    constructor(users) {
        this._users = users;
    }

    matches(commandLine) {
        const matcher = new RegExp(this._pattern);
        const match = matcher.exec(commandLine);
        if (match) {
            this._userName = match[1];
            this._messageText = match[2];
            return true;
        }

        return false;
    }

    get _pattern() {
        const user = '([A-Za-z0-9_]+)';
        const separator = ' -> ';
        const message = '(.*)';
        return '^' + user + ' *' + separator + ' *' + message + '$';
    }

    execute() {
        const userName = this._userName;
        const messageText = this._messageText;

        if (this._isValidMessage(messageText)) {
            this._users.getUser(userName).addMessage(new Message(messageText));
        }
    }

    _isValidMessage(text) {
        return text.trim().length > 0;
    }
}

module.exports = Post;