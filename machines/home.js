module.exports = {


  friendlyName: 'Home (~)',


  description: 'Get the absolute path to your home directory on this computer (OS-agnostic)',


  sync: true,


  cacheable: true,


  inputs: {},


  exits: {

    success: {
      friendlyName: 'pathToHomeDir',
      description: 'Returns the path to the home directory.',
      example: '/Users/mikermcneil'
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
