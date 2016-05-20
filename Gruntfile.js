/**
 * Run sudo npm install to download all dependencies
 */

var pjson = require('./package.json');
var version = pjson.version;

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        'gh-pages': {
            options: {
                base: 'Sedna'
            },
            src: ['**']
        }
    });

    grunt.loadNpmTasks('grunt-gh-pages');


    // Create the default task
    grunt.registerTask('default', ['gh-pages']);

    // Create the default task
    grunt.registerTask('deploy', ['uglify']);
};