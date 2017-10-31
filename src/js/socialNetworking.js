class SocialNetworking {


    submit(command) {
        if (command.includes(' -> ')) {
            this.message = command.split(' -> ')[1];
        } else {
            return `${this.message} (1 second ago)`;
        }
    }
}

module.exports = SocialNetworking;