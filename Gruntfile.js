module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		clean: {
			dist: ['dist/*']
		},
		copy: {
			dev: {
				files: [
					{expand: true, cwd: 'src/', src: ['index.html'], dest: 'dev/'},

					{expand: true, cwd: 'src/', src: ['**/*.js'], dest: 'dev/'},
					{expand: true, cwd: 'src/', src: ['**/*.json'], dest: 'dev/'},

					{expand: true, cwd: 'src/', src: ['**/*.png'], dest: 'dev/'},

					{expand: true, cwd: 'bower_components/angularjs/',					src: ['angular.min.js', 'angular.min.js.map'], dest: 'dev/vendor'},
					{expand: true, cwd: 'bower_components/angular-animate',		 		src: ['angular-animate.min.js', 'angular-animate.min.js.map'], dest: 'dev/vendor'},
					{expand: true, cwd: 'bower_components/angular-aria',				src: ['angular-aria.min.js', 'angular-aria.min.js.map'], dest: 'dev/vendor'},
					{expand: true, cwd: 'bower_components/angular-material',			src: ['angular-material.min.js', 'angular-material.min.css'], dest: 'dev/vendor'},
					{expand: true, cwd: 'bower_components/angular-ui-router/release',	src: ['angular-ui-router.min.js'], dest: 'dev/vendor'},
					{expand: true, cwd: 'bower_components/underscore',					src: ['underscore-min.js', 'underscore-min.map'], dest: 'dev/vendor'},
					{expand: true, cwd: 'bower_components/moment/min',					src: ['moment.min.js'], dest: 'dev/vendor'}
				]
			},
			dist: {
				files: [
					{expand: true, cwd: 'dev', src: ['**/*'], dest: 'dist'}
				]
			}
		},
		less: {
			dev: {
				options: {
					compress: false,
					sourceMap: true,
					sourceMapFileInline: true
				},
				files: {
					'dev/styles.css': 'src/index.less'
				}
			}
		},
		ngtemplates: {
			app:          {
				src:        ['src/components/**/*.html', 'src/pages/**/*.html'],
				dest:       'dev/templates.js',
				options:    {
					htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
				}
			}
		},
		manifest: {
			dist: {
				options: {
					basePath: 'dist/'
				},
				src: [
					'**/*.js',
					'**/*.js.map',
					'**/*.json',
					'**/*.css',
					'**/*.png'
				],
				dest: 'dist/manifest.appcache'
			}
		},
		notify: {
			dev: {
				options: {
					title: 'ExpMan',  // optional
					message: 'Files copied' //required
				}
			}
		},
		watch: {
			js: {
				files: ['src/**/*'],
				tasks: ['dev', 'notify:dev']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-manifest');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('dev', ['copy:dev', 'less:dev', 'ngtemplates']);
	grunt.registerTask('dist', ['dev', 'clean:dist', 'copy:dist', 'manifest:dist']);
};
