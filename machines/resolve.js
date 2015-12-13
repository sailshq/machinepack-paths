module.exports = {


  friendlyName: 'Resolve path',


  description: 'Resolve and normalize a potentially-relative path into an absolute path.',


  extendedDescription: 'The resulting path is also normalized, and trailing slashes are removed unless the path gets resolved to the root directory.',


  moreInfoUrl: 'https://nodejs.org/docs/latest/api/path.html#path_path_resolve_from_to',


  cacheable: true,


  sync: true,


  inputs: {

    path: {
      friendlyName: 'Path',
      description: 'The path to be resolved to an absolute path.',
      extendedDescription: 'If first path is not absolute, it will be resolved from the process\'s present working directory (`pwd`).',
      example: 'node_modules/sails/bin/sails.js',
      required: true
    },

    from: {
      friendlyName: 'From',
      description: 'The working directory to resolve from.',
      extendedDescription: 'If omitted, the result path will be resolved from the process\'s present working directory (`pwd`).',
      example: '/usr/local/lib'
    }

  },


  exits: {

    success: {
      outputVariableName: 'path',
      outputDescription: 'An absolute path.',
      example: '/usr/local/lib/node_modules/sails/bin/sails.js'
    }

  },


  fn: function (inputs,exits) {
    var Path = require('path');
    var result = Path.resolve.apply(Path, inputs.path);
    return exits.success(result);
  }


};
