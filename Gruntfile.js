module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({

        clean: [
            'dist'
        ],

        concat: {
            basic_and_extras: {
                files: {
                    'dist/main.js': 'src/**/*.js'
                }
            }
        },

        qunit: {
            all: ['test/**/*.html']
        },

        requirejs: {
            compile: {
                options: {
                    name: 'app',
                    baseUrl: 'src',
                    include: ['../bower_components/almond/almond.js'],
                    out: 'dist/main.min.js'
                }
            }
        }

    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Define your tasks here
    grunt.registerTask('default', [
        'qunit',
        'concat',
        'requirejs'
    ]);

    grunt.registerTask('test', [
        'qunit'
    ]);

};