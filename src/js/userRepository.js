const User = require('user.js');

class UserRepository {
    constructor() {
        this._users = new Map();
    }

    _getUser(name) {
        if (!this._users.has(name)) {
            this._users.set(name, new User(name));
        }
        return this._users.get(name);
    }
}

module.exports = UserRepository;