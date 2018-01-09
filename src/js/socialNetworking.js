const InvalidCommand = require('command/invalid.js');
const PostCommand = require('command/post.js');
const ReadCommand = require('command/read.js');
const WallCommand = require('command/wall.js');
const UserRepository = require('userRepository.js');

class SocialNetworking {
    constructor() {
        this.users = new UserRepository();
    }

    submit(command) {
        const postCommand = new PostCommand(this.users);
        const readCommand = new ReadCommand(this.users);
        const wallCommand = new WallCommand(this.users);
        const invalidCommand = new InvalidCommand();

        if (postCommand.matches(command)) {
            return postCommand.execute();
        } else if (readCommand.matches(command)) {
            return readCommand.execute();
        } else if (wallCommand.matches(command)) {
            return wallCommand.execute();
        } else if (invalidCommand.matches(command)) {
            return invalidCommand.execute();
        }
    }
}

// Todo: Extract Commands into Command Classes following the Design of Post.
module.exports = SocialNetworking;