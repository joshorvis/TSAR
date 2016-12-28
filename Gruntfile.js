module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,requirejs: {
			options: {
				baseUrl: './dist'
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
					,mainConfigFile: 'dist/main.js'
					,out: 'dist/main.js'
					,optimize: 'none'
				}
			}
		}
		,ts: {
			options: {
				target: 'es5'
				,module: 'amd'

			}
			,main : {
				src: ['src/**/*.ts']
				,outDir: 'dist'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-ts');

	grunt.registerTask("build", ["ts:main","requirejs:main"]);

};