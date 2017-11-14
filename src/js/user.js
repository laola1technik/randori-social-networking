class User {
    constructor(name) {
        this._name = name;
        this._messages = [];
    }

    addMessage(message){
        this._messages.push(message);
    }
}

module.exports = User;