#!/bin/sh
NODE_PATH=./src/js/ ./node_modules/.bin/jslint src/**/*.js test/*.js --edition=es6
