module.exports = function (config) {
    config.set({
        files: [
            {pattern: 'src/**/*.js', mutated: true, included: false},
            'test/*.js'
        ],
        testRunner: 'mocha',
        mutator: 'javascript',
        transpilers: ['babel'],
        reporter: ['clear-text', 'progress'],
        testFramework: 'mocha',
        coverageAnalysis: 'off',
        babelConfig: {
            "presets": ["env"],
            "plugins": ["transform-object-rest-spread"]
        }
    });
};