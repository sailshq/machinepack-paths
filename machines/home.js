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
    return exits.success(
      require('path').resolve(process.env[
        (process.platform == 'win32') ?
        'USERPROFILE' :
        'HOME'
      ])
    );
  },

};
