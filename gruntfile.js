'use strict';

var browserPort = 9000;
var phantomPort = 9001;

module.exports = function( grunt ) {

	require( 'time-grunt' )( grunt );

	grunt.initConfig( {

		// setup       ---------------------------------------------
		dir: {
			dev		 : 'dev/',
			es6		 : 'dev/es6/',
			es5		 : 'dev/es5/',
			fonts	 : 'dev/fonts/',
			css		 : 'dev/css/',
			img		 : 'dev/img/',
			prod	 : 'prod/',
			lib		 : 'bower_modules/',
			tests	 : 'reports/tests/',
			docs	 : 'reports/docs/',
			analysis : 'reports/analysis/',
			coverage : 'reports/coverage/'
		},

		// task config ---------------------------------------------
		watch: {
			options: {
				livereload: true
			},
			change: {
				files: [
					'<%= dir.es6 %>**/*',
					'gruntfile.js'
				],
				tasks: [ 'build' ]
			}
		},

		clean: {
			build: [ '<%= dir.prod %>', '<%= dir.es5 %>' ]
		},

		babel : {
			options : {
				sourceMap: true,
				modules: 'amd'
			},
			app : {
				files : [ {
					expand : true,
					cwd : '<%= dir.es6 %>',
					src : [
						'**/*.js'
					],

					// Hack to place app and test transpiles in the
					// same build dir.
					dest: '<%= dir.es5 %>'
				} ]
			},
			tests : {
				files : [ {
					expand : true,
					cwd : '<%= dir.tests %>/es6/',
					src : [ '**/*-spec.js' ],
					dest : '<%= dir.tests %>/es5/'
				} ]
			}
		},

		handlebars: {
			tpl: {
				options: {

					// this path is relative to the built tpl.js dest property
					amd: 'bower_modules/handlebars/handlebars',

					namespace: 'tpl',

					// This converts our file names into camelCase names.
					// For instance, some-name.okay.ext => someNameOkay
					processName: function( filename ) {
						var path = require( 'path' );
						var basename = path.basename( filename, path.extname( filename ) );
						return basename.replace( /[-\.]([a-z0-9] )/g, function( g ) {
							return g[ 1 ].toUpperCase();
						} );
					}
				},
				files: [ {
					src: [ '<%= dir.es6 %>**/*.hbs' ],
					dest: '<%= dir.es5 %>tpl/tpl.js'
				} ]
			}
		},

		requirejs: {
			build: {
				options: {

					// "name", "include", and "insertRequire" paths
					// are relative to the baseUrl in require-config.js
					name: 'almond/almond',
					include: [ '../dev/require-config' ],
					insertRequire: [ '../dev/require-config' ],
					wrap: true,
					optimize: 'uglify',
					out: '<%= dir.prod %>main.min.js',

					// This will affect the "name", "include", and "insertRequire"
					// paths. This path is relative to the gruntfile.
					mainConfigFile: '<%= dir.dev %>require-config.js',
					replaceRequireScript: [ {

						// this file must exist before it will be rewritten
						// If you clean the the build dir then copy the
						// original index with the require script ref into
						// the build dir before running this task.
						files: [ '<%= dir.prod %>index.html' ],
						module: 'main',

						// This path is relative to the "out" option.
						modulePath: 'main.min'
					} ]
				}
			}
		},

		copy: {
			pdf: {
				files: [ {
					expand: true,
					cwd: '<%= dir.dev %>',
					src: [ '**/*.pdf' ],
					dest: '<%= dir.prod %>'
				} ]
			},
			index: {
				files: [ {
					expand: true,
					cwd: 'dev',
					src: [ 'index.html' ],
					dest: '<%= dir.prod %>'
				} ]
			}
		},

		jasmine: {
			phantom: {
				options: {

					// host: "http://127.0.0.1:" + phantomPort + "/",
					display: 'full', // short or none
					specs: '<%= dir.tests %>/es5/**/*-spec.js',
					template: require( 'grunt-template-jasmine-requirejs' ),
					templateOptions: {
						requireConfigFile: '<%= dir.dev %>require-config.js'
					},
					keepRunner: true
				}
			},

			coverage: {
				src: [ '<%= dir.dev %>**/*.js' ],
				options: {
					specs: '<%= dir.tests %>/es5/**/*-spec.js',
					template: require( 'grunt-template-jasmine-istanbul' ),
					templateOptions: {
						coverage: 'coverage/coverage.json',
						report: 'coverage',
						thresholds: {
							lines: 75,
							statements: 75,
							branches: 75,
							functions: 90
						},

						// 1. don"t replace src for the mixed-in template with instrumented sources
						replace: false,
						template: require( 'grunt-template-jasmine-requirejs' ),
						templateOptions: {
							requireConfigFile: '<%= dir.dev %>require-config.js'
						}
					}
				}
			}
		},

		eslint: {
			options: {
				configFile: '.eslintrc'
			},
			es6: [ '<%= es6 %>**/*.js' ]
		},

		plato: {
			report: {
				options: {

				// jshint: grunt.file.readJSON(".jshintrc")
				},
				files: {
					reports: [ '<%= dir.es5 %>**/*.js' ]
				}
			}
		},

		connect: {
			options: {
				hostname: 'localhost'
			},
			browser: {
				options: {
					port: browserPort,
					keepalive: true,
					base: 'dist'
				}
			},
			phantom: {
				options: {
					port: phantomPort
				}
			}
		},

		docco: {
			doc: {
				src: [ 'es5/**/*.js' ],
				options: {
					output: '<%= dir.docs %>'
				}
			}
		},

		compass: {
			options: {
				sassDir: '<%= dir.lib %>sass-bootstrap/lib/bootstrap.sass',
				cssDir: '<%= dir.css %>',
				imagesDir: '<%= dir.img %>',
				javascriptsDir: '<%= dir.es5 %>',
				fontsDir: '<%= dir.lib %>sass-bootstrap/fonts',
				importPath: '<%= dir.lib %>sass-bootstrap/lib/',
				relativeAssets: true
			},
			dist: {},
			server: {
				options: {
					debugInfo: true
				}
			}
		},

		cssmin: {
			dist: {
				options: {
					report: 'min',
					sourceMap: true
				},
				files: {
					'<%= dir.prod %>css/app.min.css': [
					'dev/css/carousel.css',
					'dev/css/bootstrap.css'
					]
				}
			}
		},

		imagemin: {
			dist: {
				files: [ {
					expand: true,
					cwd: '<%= dir.img %>',
					src: '**/*.{png,jpg,jpeg,ico}',
					dest: '<%= dir.prod %>img'
				} ]
			}
		}
	} );

	// ---------------------------------------------------------
	// Load tasks but filter the grunt-template-jasmine files

	require( 'matchdep' )
	.filterAll( 'grunt-*' )
		.filter( function( task ) {
			return task.indexOf( 'grunt-template-jasmine' ) === -1;
		} )
		.forEach( grunt.loadNpmTasks );

	// ---------------------------------------------------------
	// Register tasks

	grunt.registerTask(
	'build',
	'Build production files to "dest" folder.',
	[ 'clean', 'imagemin', 'handlebars', 'copy', 'babel', 'requirejs', 'cssmin' ]
	);

	grunt.registerTask(
	'default',
	'Watch files and run tests', [ 'watch' ]
	);
};
