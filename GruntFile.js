module.exports= function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat'); // Load the things
    // if use configure grunt plugins things. 
    grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // pkg is key and package.json has plugin
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['JS/controllers/*.js','js/models/*.js','js/utils/*.js'],
          dest: 'dist/built.js',
        },
      },
      uglify: {
        my_target: {
          files: {
            'dist/build.min.js': ['dist/built.js']
          }
        }
      }
  });
    grunt.registerTask("default",["concat","uglify"]);// workflow....
//     {
//    // grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.log.write('Hello Grunt Task....').ok();
// }
}
// This is NodeJS file