const InvalidCommand = require('command/invalid.js');
const PostCommand = require('command/post.js');
const ReadCommand = require('command/read.js');
const WallCommand = require('command/wall.js');
const UserRepository = require('userRepository.js');

class SocialNetworking {
    constructor() {
        this.users = new UserRepository();
    }

    submit(commandLine) {
        const commands = [
            new PostCommand(this.users),
            new ReadCommand(this.users),
            new WallCommand(this.users),
            new InvalidCommand()
        ];

        return commands.find(command => {
            return command.matches(commandLine);
        }).execute();
    }
}

module.exports = SocialNetworking;