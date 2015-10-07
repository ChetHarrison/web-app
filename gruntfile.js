'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({

		// setup       ---------------------------------------------
		dir: {
			dev: 'dev/',
			generated: 'dev/generated/',
			es6: 'dev/es6/',
			es5: 'dev/es5/',
			fonts: 'dev/fonts/',
			css: 'dev/css/',
			img: 'dev/img/',
			prod: 'prod/',
			bower: 'bower_modules/',
			tests: 'reports/tests/',
			docs: 'reports/docs/',
			analysis: 'reports/analysis/',
			coverage: 'reports/coverage/'
		},

		port: {
			dev: 9000,
			prod: 9001,
			tests: 9002,
			coverage: 9003,
			docs: 9004,
			analysis: 9005
		},

		pkg: grunt.file.readJSON('package.json'),

		// task config ---------------------------------------------
		concat: {
			options: {
				stripBanners: true,
				banner: '// ## v <%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
					'\'use strict\';\n',
				process: function(src, filepath) {
					return '// Source: ' + filepath + '\n' +
						src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
				}
			},
			docs: {
				src: ['<%= dir.es6 %>**/*.js'],
				dest: '<%= dir.docs %><%= pkg.name %>.js'
			}
		},

		connect: {
			options: {
				hostname: 'localhost'
			},
			dev: {
				options: {
					keepalive: true,
					port: '<%= port.dev %>',
					open: {
						target: 'http://localhost:<%= port.dev %>/dev/index.html'
					}
				}
			},
			prod: {
				options: {
					keepalive: true,
					port: '<%= port.prod %>',
					open: {
						target: 'http://localhost:<%= port.prod %>/prod/index.html'
					}
				}
			},
			tests: {
				options: {
					keepalive: true,
					port: '<%= port.tests %>',
					open: {
						target: 'http://localhost:<%= port.tests %>/_SpecRunner.html'
					}
				}
			},
			coverage: {
				options: {
					keepalive: true,
					port: '<%= port.coverage %>',
					open: {
						target: 'http://localhost:<%= port.coverage %>/reports/coverage/'
					}
				}
			},
			docs: {
				options: {
					keepalive: true,
					port: '<%= port.docs %>',
					open: {
						target: 'http://localhost:<%= port.docs %>/<%= dir.docs %><%= pkg.name %>.html'
					}
				}
			},
			analysis: {
				options: {
					keepalive: true,
					port: '<%= port.analysis %>',
					open: {
						target: 'http://localhost:<%= port.analysis %>/reports/analysis/'
					}
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			change: {
				files: [
					'<%= dir.es6 %>**/*',
					'<%= dir.tests %>es6/**/*',
					'gruntfile.js'
				],
				tasks: ['build']
			}
		},

		clean: {
			app: ['<%= dir.prod %>', '<%= dir.es5 %>'],
			tests: ['<%= dir.tests %>es5'],
			generated: ['.grunt', '.sass-cache'],
			docs: ['reports/docs']
		},

		babel: {
			options: {
				sourceMap: true,
				modules: 'amd'
			},
			app: {
				files: [{
					expand: true,
					cwd: '<%= dir.es6 %>',
					src: [
						'**/*.js'
					],

					// Hack to place app and test transpiles in the
					// same build dir.
					dest: '<%= dir.es5 %>'
				}]
			},
			tests: {
				files: [{
					expand: true,
					cwd: '<%= dir.tests %>/es6/',
					src: ['**/*-spec.js'],
					dest: '<%= dir.tests %>/es5/'
				}]
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
					processName: function(filename) {
						var path = require('path');
						var basename = path.basename(filename, path.extname(filename));
						return basename.replace(/[-\.]([a-z0-9] )/g, function(g) {
							return g[1].toUpperCase();
						});
					}
				},
				files: [{
					src: ['<%= dir.es6 %>**/*.hbs'],
					dest: '<%= dir.es5 %>tpl/tpl.js'
				}]
			}
		},

		requirejs: {
			build: {
				options: {

					// "name", "include", and "insertRequire" paths
					// are relative to the baseUrl in require-config.js
					name: 'bower/almond/almond',
					include: ['require-config'],
					insertRequire: ['require-config'],
					wrap: true,
					optimize: 'uglify',
					out: '<%= dir.prod %>main.min.js',

					// This will affect the "name", "include", and "insertRequire"
					// paths. This path is relative to the gruntfile.
					mainConfigFile: '<%= dir.dev %>require-config.js',
					replaceRequireScript: [{

						// this file must exist before it will be rewritten
						// If you clean the the build dir then copy the
						// original index with the require script ref into
						// the build dir before running this task.
						files: ['<%= dir.prod %>index.html'],
						module: 'main',

						// This path is relative to the "out" option.
						modulePath: 'main.min'
					}]
				}
			}
		},

		copy: {
			pdf: {
				files: [{
					expand: true,
					cwd: '<%= dir.dev %>',
					src: ['**/*.pdf'],
					dest: '<%= dir.prod %>'
				}]
			},
			index: {
				files: [{
					expand: true,
					cwd: 'dev',
					src: ['index.html'],
					dest: '<%= dir.prod %>'
				}]
			}
		},

		jasmine: {
			phantom: {
				options: {

					// host: "http://127.0.0.1:" + phantomPort + "/",
					display: 'full', // short or none
					specs: '<%= dir.tests %>/es5/**/*-spec.js',
					template: require('grunt-template-jasmine-requirejs'),
					templateOptions: {
						requireConfigFile: '<%= dir.dev %>require-config.js'
					},
					keepRunner: true
				}
			},

			coverage: {
				src: ['<%= dir.es5 %>**/*.js'],
				options: {
					specs: '<%= dir.tests %>/es5/**/*-spec.js',
					template: require('grunt-template-jasmine-istanbul'),
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
						template: require('grunt-template-jasmine-requirejs'),
						templateOptions: {
							requireConfigFile: '<%= dir.dev %>require-config.js',
							requireConfig: {
								baseUrl: 'dev'
							}
						}
					}
				}
			}
		},

		eslint: {
			options: {
				configFile: '.eslintrc'
			},
			es6: ['<%= dir.es6 %>**/*.js']
		},

		plato: {
			report: {
				options: {

					// jshint: grunt.file.readJSON(".jshintrc")
				},
				files: {
					reports: ['<%= dir.es5 %>**/*.js']
				}
			}
		},

		docco: {
			doc: {
				src: ['<%= concat.docs.dest %>'],
				options: {
					output: '<%= dir.docs %>'
				}
			}
		},

		compass: {
			options: {
				sassDir: '<%= dir.bower %>sass-bootstrap/lib/',
				imagesDir: '<%= dir.img %>',
				javascriptsDir: '<%= dir.es5 %>',
				fontsDir: '<%= dir.bower %>sass-bootstrap/fonts',
				importPath: '<%= dir.bower %>sass-bootstrap/lib/',
				relativeAssets: true
			},
			dev: {
				options: {
					cssDir: '<%= dir.dev %>css',
					outputStyle: 'expanded',
					environment: 'development',
					debugInfo: true,
					trace: true,
					httpPath: '<%= dir.dev %>'
				}
			}
		},

		// Warning: This assumes there will only be
		// one css file in the src dir. Otherwise it
		// will attemt to name several files with the
		// same name.
		rename: {
			main: {
				files: [{
					src: ['<%= dir.css %>*.css'],
					dest: '<%= dir.css %>main.css'
				}]
			}
		},

		cssmin: {
			dist: {
				options: {
					report: 'min',
					sourceMap: true
				},
				files: {
					'<%= dir.prod %>css/main.css': [
						'<%= dir.css %>**/*.css'
					]
				}
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= dir.img %>',
					src: '**/*.{png,jpg,jpeg,ico}',
					dest: '<%= dir.prod %>img'
				}]
			}
		}
	});

	// ---------------------------------------------------------
	// Load tasks but filter the grunt-template-jasmine files

	require('matchdep')
		.filterAll('grunt-*')
		.filter(function(task) {
			return task.indexOf('grunt-template-jasmine') === -1;
		})
		.forEach(grunt.loadNpmTasks);

	// ---------------------------------------------------------
	// Register tasks

	grunt.registerTask(
		'setup-docs',
		'Generate documentation using docco.', ['clean:docs', 'concat:docs', 'docco']
	);

	grunt.registerTask(
		'doc',
		'Generate documentation using docco.', ['setup-docs', 'connect:docs']
	);

	grunt.registerTask(
		'setup-tests',
		'Build production files to "dest" folder.', ['clean:tests', 'babel:tests', 'jasmine:phantom']
	);

	grunt.registerTask(
		'test',
		'Build production files to "dest" folder.', ['setup-tests', 'connect:tests']
	);

	grunt.registerTask(
		'build',
		'Build production files to "dest" folder.', [
			'clean:app',
			'setup-docs',
			'imagemin',
			'handlebars',
			'copy',
			'babel:app',
			'compass',
			'rename',
			'setup-tests',
			'requirejs',
			'cssmin',
			'imagemin'
		]
	);

	grunt.registerTask(
		'default',
		'Watch files and run tests', ['watch']
	);
};
