const Message = require('message.js');

class Read {

    constructor(users) {
        this._users = users;
    }

    matches(commandLine) {
        const matcher = new RegExp(this._pattern);
        const match = matcher.exec(commandLine);

        if (match) {
            this._userName = match[1];
            return true;
        }

        return false;
    }

    get _pattern() {
        const user = '([A-Za-z0-9_]+)';
        return '^' + user + ' *$';
    }

    execute() {
        const userName = this._userName;

        return this._users.getUser(userName)._messages.reverse()
            .map((message)=> {
                return message.format();
            })
            .join('\n');
    }
}

module.exports = Read;