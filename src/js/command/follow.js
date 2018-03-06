/*jshint esversion: 6 */
class Follow {

    constructor(users) {
        this._users = users;
    }

    matches(commandLine) {
        const matcher = new RegExp(this._pattern);
        const match = matcher.exec(commandLine);

        if (match) {
            this._subscriber = match[1];
            this._targetUserName = match[2];
            return true;
        }

        return false;
    }

    get _pattern() {
        const user = '([A-Za-z0-9_]+)';
        return '^' + user + ' +follows +' + user + ' *$';
    }

    execute() {
        const subscriber = this._subscriber;
        const targetUserName = this._targetUserName;
        this._users.getUser(subscriber).subscribeTo(targetUserName);
    }
}

module.exports = Follow;