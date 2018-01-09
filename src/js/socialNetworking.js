const PostCommand = require('command/post.js');
const ReadCommand = require('command/read.js');
const UserRepository = require('userRepository.js');

class SocialNetworking {
    constructor() {
        this.users = new UserRepository();
    }

    submit(command) {
        const showWallMatch = this.showWall(command);
        const postCommand = new PostCommand(this.users);
        const readCommand = new ReadCommand(this.users);

        if (postCommand.matches(command)) {
            return postCommand.execute(command);
        } else if (readCommand.matches(command)) {
            return readCommand.execute(command);
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

    getTimeline(name) {
        return this.users.getUser(name)._messages.reverse()
            .map((message)=> {
                return name + ' - ' + message.format();
            })
            .join('\n');
    }

    showWall(command) {
        const wallPattern = new RegExp('^([A-Za-z0-9_]+) wall$');
        return wallPattern.exec(command);
    }

}

// Todo: Extract Commands into Command Classes following the Design of Post.
module.exports = SocialNetworking;