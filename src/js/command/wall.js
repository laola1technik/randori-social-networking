const Message = require('message.js');
const TimeLine = require('timeLine.js');

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
        const beingFollowed = this._users.getUser(username)._follows;

        return beingFollowed.map(name => this.getTimeline(name))
            .reduce((merged, timeLine) => merged.merge(timeLine), new TimeLine([]))
            .format(true);
    }

    getTimeline(name) {
        return this._users.getUser(name).timeLine();
    }
}

module.exports = Wall;