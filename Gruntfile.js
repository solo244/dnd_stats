module.exports = function(grunt) {

  // Change these local settings
  var project_name = "dnd"; // Name of the project - for notifications
  var localhost = "./" + project_name + "/build/"; // Define if your using a server, default = project_name
  var root_project_name = "/" + project_name; // Local folder containing the project. Prefix with an "/"! Default = project_name

  // Optional FTP settings
  var server_key = "serverA"; // Defined in your .ftppass file
  var ftp_host = "ftp.someserver.com"; // Host location
  var upload_location = "/httpdocs/folder"; // Destination folder for ftp
  var server = "/folder"; // Online subfolder containing the project. Prefix with an "/"!

  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: project_name,
        success: false,
        duration: 2
      }
    },

    concat: {
      dist: {
        src: [
          'dev/js/*.js'
        ],
        dest: 'js/main.js',
      },
      vendor: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
        ],
        dest: 'js/vendor.js',
      },
      combo: {
        src: [
          'js/vendor.js',
          'js/main.js'
        ],
        dest: 'js/app.js',
      }
    },

    uglify: {
      build: {
        src: 'js/app.js',
        dest: 'js/app.min.js'
      },
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'dev/css/main.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
        ]
      },
      dist: {
        src: 'css/style.css'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            '**/*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          },
          startPath: "/"
        }
      }
    },

    jade: {
      compile: {
        options: {
          basedir: "dev/content/_template/",
          data: {
            debug: false
          },
          pretty: true
        },
        files: [{
          cwd: "dev/content",
          src: ["**/*.jade", "!_template/**/*.jade"],
          dest: "",
          expand: true,
          ext: ".html"
        }],
      }
    },

    copy: {
      images: {
        files: [{
          expand: true,
          cwd: 'dev/images/',
          src: '**',
          dest: 'images/'
        }]
      },
      fonts: {
        bower_files: [{
          expand: true,
          cwd: 'bower_components/rpg-awesome/fonts/',
          src: '**',
          dest: 'css/fonts/'
        }]
      },
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif,ico}'],
          dest: 'images/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['dev/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
      },
      css: {
        files: [
          'dev/css/modules/*.scss',
          'dev/css/pages/*.scss',
          'dev/css/template/*.scss',
          'dev/css/main.scss'
        ],
        tasks: ['sass', 'postcss', 'cssmin'],
        options: {
          spawn: false
        }
      },
      jade: {
        files: ['dev/content/*.jade', 'dev/content/**/*.jade'],
        tasks: ['jade']
      }
    },

    'ftp-deploy': {
      dist: {
        auth: {
          host: ftp_host,
          port: 21,
          authKey: server_key
        },
        src: 'dist',
        dest: upload_location,
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  grunt.task.run('notify_hooks');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss', 'cssmin', 'jade', 'copy:fonts', 'copy:images', 'browserSync', 'watch']);
};
