const InvalidCommand = require('command/invalid.js');
const PostCommand = require('command/post.js');
const ReadCommand = require('command/read.js');
const WallCommand = require('command/wall.js');
const FollowCommand = require('command/follow.js');
const UserRepository = require('userRepository.js');

class SocialNetworking {
    constructor() {
        const users = new UserRepository();
        this._commands = [
            new PostCommand(users),
            new ReadCommand(users),
            new WallCommand(users),
            new FollowCommand(users)
        ];
        this._commands.push(new InvalidCommand());  //catch all last command
    }

    submit(commandLine) {
        return this._commands.find(command => {
            return command.matches(commandLine);
        }).execute();
    }
}

module.exports = SocialNetworking;