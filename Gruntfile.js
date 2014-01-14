module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.name %> <%= pkg.version %> | Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.licenses[0].type %> License */\n',

    concat: {
      options: {
        stripBanners: {
          block: true
        },
        banner: '<%= banner %>'
      },
      dist: {
        src: [ 'fileHash.js' ],
        dest: 'fileHash.js'
      }
    },

    jshint: {
      files: [ 'fileHash.js' ]
    },

    nodeunit: {
      files: [ 'test/test-*.js' ],
    },

    watch: {
      files: [ 'fileHash.js', 'test/*.js' ],
      tasks: [ 'test' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', [ 'jshint', 'nodeunit' ]);
  grunt.registerTask('compile', [ 'concat' ]);
  grunt.registerTask('release', [ 'test', 'compile' ]);
  grunt.registerTask('dev', [ 'watch' ]);
  grunt.registerTask('default', [ 'dev' ]);
};
