class Invalid {

    matches(commandLine) {
        this._command = commandLine;
        return true;
    }

    execute() {
        return `Invalid command: ${this._command}`;
    }
}

module.exports = Invalid;