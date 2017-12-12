const Message = require('message.js');

class Post {

    constructor(){

    }

    matches(commandLine) {
        const publishSeparator = ' -> ';
        const postPattern = new RegExp('^[A-Za-z0-9_]+ *' + publishSeparator + ' *.*$');
        return postPattern.test(commandLine);
    }

    execute(command, socialNetworking) {
        const publishSeparator = ' -> ';
        const userNameAndMessage = command.split(publishSeparator);
        const userName = userNameAndMessage[0];
        const messageText = userNameAndMessage[1];

        if (this._isValidMessage(messageText)) {
            socialNetworking._getUser(userName).addMessage(new Message(messageText));
        }
    }

    _isValidMessage(text) {
        return text.trim().length > 0;
    }
}

module.exports = Post;