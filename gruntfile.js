module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        stylus: {
            app: {
                files: {
                    './app/css/theme.css': './app/stylus/theme.styl'
                }
            }
        },

        jshint: {
            all: [
                './gruntfile.js',
                './app/js/**/*.js'
            ]
        },

        browserify: {
            './app/build/app.js': ['./client/app.js']
        },

        watch: {
            js: {
                files: [
                    './gruntfile.js',
                    './app/js/**/*.js'
                ],
                tasks: ['jshint', 'browserify']
            },
            css: {
                files: [
                    './app/stylus/**/*.styl'
                ],
                tasks: ['stylus']
            }
        }

    });


    grunt.registerTask('default', ['stylus', 'jshint', 'browserify']);

};
