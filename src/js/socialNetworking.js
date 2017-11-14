const Message = require('message.js');
const User = require('user.js');

class SocialNetworking {
    constructor() {
        this._users = new Map();
    }

    submit(command) {
        const seperator = ' -> ';
        if (command.includes(seperator)) {
            const userNameAndMessage = command.split(seperator);
            this._getUser(userNameAndMessage[0]).addMessage(new Message(userNameAndMessage[1]));
        } else {
            return this._getUser(command)._messages.reverse()
                .map((message)=> {
                    return message.format();
                })
                .join('\n');
        }
    }

    _getUser(name) {
        if (!this._users.has(name)) {
            this._users.set(name, new User(name));
        }
        return this._users.get(name);
    }
}

module.exports = SocialNetworking;