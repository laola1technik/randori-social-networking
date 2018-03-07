#  Social Networking - ES6

This is the [Social Networking Kata](http://monospacedmonologues.com/post/49250842364/the-social-networking-kata)
in JavaScript/ES6 with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/),
done in a Randori-styled [Coding Dojo](http://codingdojo.org/WhatIsCodingDojo/), 
9 sessions a 2 hours.

## Installation
* This package requires [Node Package Manager](https://www.npmjs.com/)
    * Have node installed, verify using ```node -v```
    * Have npm installed, verify using ```npm -v```
* Install global packages
    * nyc (for coverage) ```npm i -g nyc```
    * cross-env (for windows support) ```npm i -g cross-env```
* Download all required Node dependencies
    * ```npm install``` (in the root directory of this project)
    * verify using ```npm test``` (running tests)

### Check your Coverage ###
To measure your progress you should use code coverage tools:

* [Istanbul](https://istanbul.js.org/) - run `npm run test-nyc`. `coverage.bat` or `./coverage.sh`.

* [Stryker](https://stryker-mutator.github.io/) - run `stryker.bat` or `./stryker.sh`.

### License
This work is licensed under a [New BSD License](http://opensource.org/licenses/bsd-license.php), see `license.txt` in repository.
