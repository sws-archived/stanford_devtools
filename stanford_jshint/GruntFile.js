
module.exports = function(grunt) {

  // The first place we gather config is the config file.
  var defaults = grunt.file.readJSON('../configure.json');
  // Declare vars.
  var masterConfig = {};
  masterConfig = {
    availabletasks: {
      tasks: {}
    },
    // ------------------------------------------------------------------------.
    prompt: {
      webserver_root: {
        options: {
          questions: [
            {
              config: 'build.webserver_root',
              type: 'input',
              message: "What is your webserver root directory?",
              default: defaults.build.webserver_root
            }
          ]
        }
      },
      dest: {
        options: {
          questions: [
            {
              config: 'build.dest',
              type: 'input',
              message: "What is the site directory name?",
              default: grunt.config("build.dest")
            }
          ]
        }
      },
      path: {
        options: {
          questions: [
            {
              config: 'build.path',
              type: 'list',
              message: "What path do you want to lint files on?",
              default: '/sites/all/modules/stanford',
              choices: getPaths()
            }
          ]
        }
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      tests: ['Gruntfile.js', 'src/js/**/*.js'],
      build: ['<%= build.webserver_root %><%= build.dest %><%= build.path %>'],    
    }
  };

  // Load all tasks
  require('load-grunt-tasks')(grunt);

  // Default task list
  grunt.registerTask('default', ['availabletasks']);

  // Init the Config.
  grunt.initConfig(masterConfig);
  
  grunt.registerTask('lint-my-site', 'Finish up with some helper functions.', function() {
    
    grunt.config("defaults", defaults);
    grunt.task.run("prompt:");
    grunt.task.run("jshint:build");
  });

};

function getPaths() {
    return [
      '/sites/all/modules/stanford',
      '/sites/default/modules/stanford',
    ];
  };
