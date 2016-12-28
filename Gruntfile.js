module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,ts: {
			options: {
				target: 'es5'
				,module: 'amd'
				
			}
			,main : {
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
			,'main': {
				options: {
					include: [ 'app' ]
					,name: 'main'
					,mainConfigFile: 'build/main.js'
					,out: 'build/<%= pkg.name %>-variant-compiled.js'
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
			,main: {
				files: {
					'dist/<%= pkg.name %>-variant.min.js': 'build/<%= pkg.name %>-variant-compiled.js'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("build", ["ts:main","requirejs:main","uglify:main"]);

};