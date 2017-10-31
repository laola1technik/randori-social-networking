class SocialNetworking {
    constructor() {
        this.messages = [];
    }

    submit(command) {
        if (command.includes(' -> ')) {
            this.messages.push(command.split(' -> ')[1]);
        } else {
            return this.messages.reverse().map(function (message) {
                return `${message} (1 second ago)`;
            }).join('\n');
        }
    }
}

module.exports = SocialNetworking;