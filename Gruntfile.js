module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['component/src/*.js','component/intermediate/template.js'],
                dest: 'dist/imageViewer.js'
            }
        },

        html2js:{
            main:{
                src:['component/src/*.tpl.html'],
                dest:'component/intermediate/template.js'
            }


        },

        uglify: {
            options: {
                mangle:true
            },
            dist: {
                files: {
                    'dist/imageViewer.min.js': ['dist/imageViewer.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-common-html2js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('release',['html2js','concat','uglify']);

}