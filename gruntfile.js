
'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    path: {
      gruntfile: './gruntfile.js',
      prod: './app/_prod/',
      build: './app/_build/',
      js: './app/js/',
      css: './app/css/',
      stylus: './app/stylus/'
    },
    stylus: {
      app: {
        files: {
          '<%= path.css %>theme.css': '<%= path.stylus %>theme.styl'
        }
      }
    },

    jshint: {
      all: [
        '<%= path.gruntfile %>',
        '<%= path.js %>**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    browserify: {
      build: {
        src: '<%= path.js %>app.js',
        dest: '<%= path.build %>app.js',
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      prod: {
        files: {
          '<%= path.prod %>/app.js': '<%= path.build %>/app.js'
        }
      }
    },

    watch: {
      js: {
        files: [
          '<%= path.gruntfile %>',
          '<%= path.js %>**/*.js'
        ],
        tasks: ['jshint', 'browserify', 'uglify']
      },
      css: {
        files: [
          '<%= path.stylus %>**/*.styl'
        ],
        tasks: ['stylus']
      }
    }

  });

  grunt.registerTask('default', ['stylus', 'jshint', 'browserify', 'uglify']);

};
