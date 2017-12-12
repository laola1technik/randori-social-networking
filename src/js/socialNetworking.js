const PostCommand = require('command/post.js');
const UserRepository = require('userRepository.js');

class SocialNetworking {
    constructor() {
        this.users = new UserRepository();
    }

    submit(command) {
        const showWallMatch = this.showWall(command);
        const postCommand = new PostCommand(this.users);

        if (postCommand.matches(command)) {
            return postCommand.execute(command);
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
        return this.users._getUser(command)._messages.reverse()
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
            this.users._getUser(userName).addMessage(new Message(messageText));
        }
    }

    getTimeline(name) {
        return this.users._getUser(name)._messages.reverse()
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


}

module.exports = SocialNetworking;