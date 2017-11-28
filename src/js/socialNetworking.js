const Message = require('message.js');
const User = require('user.js');

class SocialNetworking {
    constructor() {
        this._users = new Map();
    }

    submit(command) {
        const publishSeparator = ' -> ';

        if (this.post(command, publishSeparator)) {
            const userNameAndMessage = command.split(publishSeparator);
            const userName = userNameAndMessage[0];
            const messageText = userNameAndMessage[1];

            if (this._isValidMessage(messageText)) {
                this._getUser(userName).addMessage(new Message(messageText));
            }
        } else if (this.timeline(command)) {
            return this._getUser(command)._messages.reverse()
                .map((message)=> {
                    return message.format();
                })
                .join('\n');
        } else if (this.showWall(command)) {
            return '';
        } else {
            return `Invalid command: ${command}`;
        }
    }

    post(command, publishSeparator) {
        const postPattern = new RegExp('^[A-Za-z0-9_]+ *' + publishSeparator + ' *.*$');
        return postPattern.test(command);
    }

    timeline(command) {
        const userPattern = new RegExp('^[A-Za-z0-9_]+$');
        return userPattern.test(command);
    }

    showWall(command) {
        const wallPattern = new RegExp('^[A-Za-z0-9_]+ wall$');
        return wallPattern.test(command);
    }

    _isValidMessage(text) {
        return text.trim().length > 0;
    }

    _getUser(name) {
        if (!this._users.has(name)) {
            this._users.set(name, new User(name));
        }
        return this._users.get(name);
    }
}

module.exports = SocialNetworking;