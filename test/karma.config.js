module.exports = function(config) {
  config.set({
    basePath: '..',

    files: [
      'node_modules/video.js/dist/video-js/video-js.css',
      'node_modules/video.js/dist/video-js/video.dev.js',
      'node_modules/dashjs/dist/dash.all.debug.js',
      'src/js/whitelist-ext.js',
      'src/js/videojs-dash.js',
      'test/integration.test.js',
      'test/globals.test.js',
      'test/dashjs.test.js'
    ],

    frameworks: ['qunit'],

    singleRun: true,

    browsers: process.env.TRAVIS ? ['travisChrome'] : ['Chrome'],

    customLaunchers: {
      travisChrome: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });
};
