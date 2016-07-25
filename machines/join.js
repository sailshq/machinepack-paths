module.exports = {


  friendlyName: 'Join paths',


  description: 'Combine multiple path segments into a single result path.',


  extendedDescription: 'This machine returns "." for an empty array of paths.',


  moreInfoUrl: 'https://nodejs.org/docs/latest/api/path.html#path_path_join_path1_path2',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    paths: {
      description: 'The paths to join, in left-to-right order.',
      example: [ 'lib/node_modules' ],
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Joined path',
      outputDescription: 'The combined path.',
      outputExample: 'lib/node_modules/sails/bin/sails.js'
    }

  },


  fn: function (inputs,exits) {
    var Path = require('path');
    var resultPath = Path.join.apply(Path, inputs.paths);
    return exits.success(resultPath);
  }


};
