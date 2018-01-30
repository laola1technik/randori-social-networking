class Follow {

    constructor(users) {
        this._users = users;
    }

    matches(commandLine) {
        const matcher = new RegExp(this._pattern);
        const match = matcher.exec(commandLine);

        if (match) {
            this._userName = match[1];
            this._userName2 = match[2];
            return true;
        }

        return false;
    }

    get _pattern() {
        const user = '([A-Za-z0-9_]+)';//TODO: regex duplicated
        return '^' + user + ' +follows +' + user + ' *$';
    }

    execute() {
        const userName = this._userName;
        const userName2 = this._userName2;
        this._users.getUser(userName).follows(userName2);
    }
}

module.exports = Follow;