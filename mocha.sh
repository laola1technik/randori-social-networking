#!/bin/sh
# Run tests.
NODE_PATH=./src/js/ node ./node_modules/mocha/bin/mocha test $@
