const Message = require('message.js');
const User = require('user.js');

class SocialNetworking {
    constructor() {
        this._users = new Map();
    }

    submit(command) {
        const publishSeparator = ' -> ';

        if (command.includes(publishSeparator)) {
            const userNameAndMessage = command.split(publishSeparator);
            const userName = userNameAndMessage[0];
            const messageText = userNameAndMessage[1];

            if (this._isValidMessage(messageText)) {
                this._getUser(userName).addMessage(new Message(messageText));
            }
        } else if (!command.includes(' ')) {
            return this._getUser(command)._messages.reverse()
                .map((message)=> {
                    return message.format();
                })
                .join('\n');
        } else if(command.endsWith(' wall')) {
            return '';
        } else {
            return `Invalid command: ${command}`;
        }
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