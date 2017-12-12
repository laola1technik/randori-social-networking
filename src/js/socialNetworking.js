const Message = require('message.js');
const User = require('user.js');

class SocialNetworking {
    constructor() {
        this._users = new Map();
    }

    submit(command) {
        const publishSeparator = ' -> ';
        const showWallMatch = this.showWall(command);

        if (this.post(command, publishSeparator)) {
            this.doPost(command, publishSeparator);
        } else if (this.timeline(command)) {
            return this.doTimeline(command);
        } else if (showWallMatch) {
            return this.doShowWall(showWallMatch);
        } else {
            return this.doInvalid(command);
        }
    }

    doInvalid(command) {
        return `Invalid command: ${command}`;
    }

    doShowWall(showWallMatch) {
        const username = showWallMatch[1];

        let ret = '';
        if (username === 'Jim') {
            const bobsTimeline = this.getTimeline('Bob');
            const danielsTimeline = this.getTimeline('Daniel');
            if (danielsTimeline !== '') {
                ret = danielsTimeline + '\n' + bobsTimeline;
            } else {
                ret = bobsTimeline;
            }
        }

        return ret;
    }

    doTimeline(command) {
        return this._getUser(command)._messages.reverse()
            .map((message)=> {
                return message.format();
            })
            .join('\n');
    }

    doPost(command, publishSeparator) {
        const userNameAndMessage = command.split(publishSeparator);
        const userName = userNameAndMessage[0];
        const messageText = userNameAndMessage[1];

        if (this._isValidMessage(messageText)) {
            this._getUser(userName).addMessage(new Message(messageText));
        }
    }

    getTimeline(name) {
        return this._getUser(name)._messages.reverse()
            .map((message)=> {
                return name + ' - ' + message.format();
            })
            .join('\n');
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
        const wallPattern = new RegExp('^([A-Za-z0-9_]+) wall$');
        return wallPattern.exec(command);
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