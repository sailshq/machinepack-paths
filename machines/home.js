module.exports = {


  friendlyName: 'Home (~)',


  description: 'Get the absolute path to your home directory on this computer (OS-agnostic).',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {},


  exits: {

    success: {
      outputFriendlyName: 'Path to home dir',
      outputDescription: 'The path to the home directory.',
      outputExample: '/Users/mikermcneil'
    }

  },


  fn: function(inputs, exits) {

    // Get the home directory from the environment, using the appropriate
    // key for the current platform.
    var homeDir = process.env[
      (process.platform == 'win32') ?
      'USERPROFILE' :
      'HOME'
    ];

    // Use the `path` package's `.resolve()` to get an OS-appropriate
    // absolute path for the home directory, and return it through
    // the `success` exit.
    return exits.success(
      require('path').resolve(homeDir)
    );
  },

};
