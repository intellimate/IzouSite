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
                base: 'build'
            },
            src: ['**']
        }
    });

    grunt.loadNpmTasks('grunt-gh-pages');


    // Create the default task
    grunt.registerTask('default', ['gh-pages']);

    // Create deploy task - this publishes the build folder to gh-pages
    grunt.registerTask('deploy', ['uglify']);
};