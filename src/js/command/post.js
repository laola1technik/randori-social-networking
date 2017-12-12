const Message = require('message.js');

class Post {

    constructor(socialNetworking) {
        this._socialNetworking = socialNetworking;
        this._publishSeparator = ' -> ';
    }

    matches(commandLine) {
        const userPattern = '[A-Za-z0-9_]+';
        const pattern = '^' + userPattern + ' *' + this._publishSeparator + ' *.*$';
        const matcher = new RegExp(pattern);
        return matcher.test(commandLine);
    }

    execute(command) {
        const userNameAndMessage = command.split(this._publishSeparator);
        const userName = userNameAndMessage[0];
        const messageText = userNameAndMessage[1];

        if (this._isValidMessage(messageText)) {
            this._socialNetworking._getUser(userName).addMessage(new Message(messageText));
        }
    }

    _isValidMessage(text) {
        return text.trim().length > 0;
    }
}

module.exports = Post;