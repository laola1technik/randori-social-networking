const Message = require('message.js');

class Wall {

    constructor(users) {
        this._users = users;
    }

    matches(commandLine) {
        const matcher = new RegExp(this._pattern);
        const match = matcher.exec(commandLine);

        if (match) {
            this._userName = match[1];
            return true;
        }

        return false;
    }

    get _pattern() {
        const user = '([A-Za-z0-9_]+)';
        return '^' + user + ' +wall *$';
    }

    execute() {
        const username = this._userName;

        let ret = '';
        if (username === 'Jim') {
            const bobsTimeline = this.getTimeline('Bob');
            const danielsTimeline = this.getTimeline('Daniel');
            if (danielsTimeline !== '') {
                ret = bobsTimeline.merge(danielsTimeline).format(true);
            } else {
                ret = bobsTimeline.format(true);
            }
        }

        return ret;
    }

    getTimeline(name) {
        return this._users.getUser(name).timeLine();
    }
}

module.exports = Wall;