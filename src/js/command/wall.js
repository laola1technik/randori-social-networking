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
        const subscriptions = this._users.getUser(username).subscriptions;

        return subscriptions.map(name => this._users.getUser(name))
            .map(user => user.timeLine())
            .reduce((merged, timeLine) => merged.merge(timeLine), new TimeLine([]))
            .format(true);
    }

}

module.exports = Wall;