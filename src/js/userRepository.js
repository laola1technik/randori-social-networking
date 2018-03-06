/*jshint esversion: 6 */
const User = require('user.js');

class UserRepository { // TODO: rename to Users

    constructor() {
        this._users = new Map();
    }

    getUser(name) {
        if (!this._users.has(name)) {
            this._users.set(name, new User(name));
        }
        return this._users.get(name);
    }
}

module.exports = UserRepository;