#!/bin/sh
./node_modules/.bin/istanbul cover node_modules/mocha/bin/mocha test $@
