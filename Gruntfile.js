'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> Brightcove  */\n',

    /* Build Stuff */
    clean: {
      files: ['tmp', 'dist']
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    uglify: {
      dist: {
        src: [
          'src/js/whitelist-ext.js',
          'src/js/videojs-dash.js'
        ],
        dest: 'tmp/videojs-dash.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/videojs-dash.css': [
            'src/css/videojs-dash.css'
          ]
        }
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: [
          'tmp/videojs-dash.min.js'
        ],
        dest: 'dist/videojs-dash.min.js'
      },
      debug: {
        src: [
          'src/js/whitelist-ext.js',
          'src/js/videojs-dash.js'
        ],
        dest: 'dist/videojs-dash.js'
      }
    },
    karma: {
      test: {
        options: {
          configFile: 'test/karma.config.js'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', 'karma');
  grunt.registerTask('build', ['clean', 'jshint', 'uglify', 'cssmin', 'concat']);
  grunt.registerTask('default', ['build', 'test']);
};
