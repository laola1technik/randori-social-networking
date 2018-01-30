const InvalidCommand = require('command/invalid.js');
const PostCommand = require('command/post.js');
const ReadCommand = require('command/read.js');
const WallCommand = require('command/wall.js');
const FollowCommand = require('command/follow.js');
const UserRepository = require('userRepository.js');

class SocialNetworking {
    constructor() {
        this._users = new UserRepository();
        this._commands = [
            new PostCommand(this._users),
            new ReadCommand(this._users),
            new WallCommand(this._users),
            new FollowCommand(this._users)
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