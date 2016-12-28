module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,ts: {
			options: {
				target: 'es5'
				,module: 'amd'
				
			}
			,mainVariant : {
				src: ['src/**/*.ts']
				,outDir: 'build'
			}
		}
		,requirejs: {
			options: {
				baseUrl: './build'
				,paths: {
					/* Remote refs */
					'firebase': '//cdn.firebase.com/js/client/2.2.1/firebase'
					,'angularfire': '//cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min'

					/* Core libs - include them in the dist so that remotes can depend upon them properly */
					,'jquery': '../node_modules/jquery/dist/jquery'
					,'angular': '../node_modules/angular/angular'
					,'later': '../node_modules/later/later'
					,'angular-route': '../node_modules/angular-route/angular-route'
					,'angular-resource': '../node_modules/angular-resource/angular-resource'
					,'angular-ui-bootstrap': '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap'

					,'app': 'app'
					,'testFeature.module': 'testFeature/module'
					,'testFeature.sampleWidget': 'testFeature/sampleWidget'
				}
			}
			,'mainVariant': {
				options: {
					include: [ 'app' ]
					,name: 'main'
					,mainConfigFile: 'build/main.js'
					,out: 'dist/<%= pkg.name %>-mainVariant.js'
					,optimize: 'none'
				}
			}
		}
		,uglify: {
			options: {
				// the banner is inserted at the top of the output
				//banner: '/*! <%= pkg.name %> */\n'  //<%= grunt.template.today("dd-mm-yyyy") %>
				banner: '/* Copyright 2016 NerdyHippie, LLC */\n'
				
			}
			,mainVariant: {
				files: {
					'dist/<%= pkg.name %>-mainVariant.min.js': 'dist/<%= pkg.name %>-mainVariant.js'
				}
			}
		}
		,cssmin: {
			options: {
				root: './'
			}
			,mainVariant: {
				files: {
					'dist/<%= pkg.name %>-mainVariant.min.css': ['css/main.css']
				}
			}
		}
		
		,jshint: {
			// define the files to lint
			files: ['Gruntfile.js', 'src/**/*.ts', 'js/**/*.js'],
			//files: ['js/app.js','js/baseModules/**/*.js','js/controllerModules/**/*.js','js/modules/**/*.js','js/directiveModules/**/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// more options here if you want to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true
				},
				laxbreak: true,
				laxcomma: true
				,asi: true
				,esversion: 6
			}
		}
	});

	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask("build", ["ts:mainVariant","requirejs:mainVariant","uglify:mainVariant","cssmin:mainVariant"]);
	grunt.registerTask("inspect",["jshint"]);

};