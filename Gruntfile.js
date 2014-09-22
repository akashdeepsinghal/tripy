'use strict';

module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options:{
        separator: '\n\n\n\n\n\n'
      },
      js: {
        src: ['js/waypoints.min.js','js/bootstrap.min.js','js/scripts.js','js/jquery.flexslider.js','js/modernizer.js','js/jquery.parallax.min.js'],
        dest: 'js/all.js'
      },
      css: {
        src: ['css/bootstrap.min.css', 'css/flexslider.min.css', 'css/queries.css', 'css/style.css','css/animate.css'],
        dest: 'css/all.css'
      }
    },
    uglify: {
      dist: {
        options: {
          banner: '/* <%= pkg.name %> Try to understand now!! :P */'
        },
        files: {
          'js/all.min.js':'js/all.js'
        }
      }
    },
    less:{
      css: {
        options: {
          paths:['css']
        },
        files: {
          'css/style.css' : 'css/style.less'
        }
      }
    },
    cssmin: {
      dist: {
        options: {
          banner: '/* Get your own creativity man!! :P */'
        },
        files: {
          'css/all.min.css': ['css/all.css']
        }
      }
    },
    imagemin: {
      dynamic: {  
        options: {                       // Target options
          optimizationLevel: 3
        },                       // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'assets/img/',                   // Src matches are relative to this path
          src: ['*.{png,jpg}'],   // Actual patterns to match
          dest: 'img/'
        }]
      }
    },
    watch:{
      options: {
        // livereload:true
      },
      styles: {
        files:['css/*.less'],
        tasks:['less']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    }
  });

  grunt.loadNpmTasks ( 'grunt-contrib-less' );
  grunt.loadNpmTasks ( 'grunt-contrib-watch' );
  grunt.loadNpmTasks ( 'grunt-contrib-concat' );
  grunt.loadNpmTasks ( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks ( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks ( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks ( 'grunt-contrib-livereload' );

  grunt.registerTask ( 'default',['concat:js','concat:css','uglify:dist','cssmin:dist','less:css','imagemin:dynamic'] );
};