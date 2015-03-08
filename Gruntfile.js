/* jshint node:true */

"use strict";

module.exports = function (grunt) {
    // Show elapsed time at the end
    require("time-grunt")(grunt);
    // Load all grunt tasks
    require("load-grunt-tasks")(grunt);

    // Project configuration.
    grunt.initConfig({
        config: {
            main: "index",
            global: "ObjectPath"
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/cjs.js": "<%= config.main %>.js",
                    "dist/object-path.js": "object-path.js",
                    "dist/object-path-list.js": "object-path-list.js"
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        standalone: "<%= config.global %>"
                    }
                },
                files: {
                    "dist/browser.js": "dist/cjs.js"
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    screwIE8: true
                },
                files: {
                    "dist/<%= config.main %>.min.js": "<%= config.main %>.js"
                }
            },
            distCjs: {
                files: {
                    "dist/cjs.min.js": "dist/cjs.js"
                }
            },
            distBrowser: {
                files: {
                    "dist/browser.min.js": "dist/browser.js"
                }
            }
        }
    });

    grunt.task.registerTask("build:es6", ["uglify:dist"]);
    grunt.task.registerTask("build:cjs", ["babel:dist"]);
    grunt.task.registerTask("build:browser", ["babel:dist", "browserify:dist", "uglify:distBrowser"]);
};