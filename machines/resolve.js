module.exports = {


  friendlyName: 'Resolve path',


  description: 'Resolve one or more potentially-relative paths into an absolute path (like `cd`).',


  extendedDescription: 'Think of this as a sequence of `cd` commands in a shell-- except this machine doesn\'t actually do anything with the filesystem (i.e. the files/directories don\'t need to actually exist).',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    paths: {
      friendlyName: 'Path(s)...',
      description: 'The paths to resolve, in top-to-bottom order.',
      extendedDescription: 'If first path is not absolute, it will be resolved from the process\'s present working directory (`pwd`).',
      example: ['/usr/local/lib/node_modules'],
      required: true
    }

  },


  exits: {

    success: {
      friendlyName: 'then',
      description: 'Returns an absolute path.',
      example: '/usr/local/lib/node_modules/sails/bin/sails.js'
    }

  },


  fn: function (inputs,exits) {
    var Path = require('path');
    var result = Path.resolve.apply(Path, inputs.paths);
    return exits.success(result);
  }


};
