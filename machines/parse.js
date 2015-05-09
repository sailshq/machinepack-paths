module.exports = {


  friendlyName: 'Parse path',


  description: 'Parse a path to determine its component parts.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    path: {
      friendlyName: 'Path',
      description: 'The path to parse.',
      example: 'C:\\\\a\\b\\index.html',
      required: true
    }

  },


  exits: {

    success: {
      friendlyName: 'then',
      description: 'Returns the various components of the provided path.',
      example: {
        root: 'C:\\',
        dir: 'C:\\a\\b',
        base: 'index.html',
        ext: '.html',
        name: 'index'
      }
    }

  },


  fn: function (inputs,exits) {
    // Use `path-parse` polyfill for Node <= 0.12
    var pathParse = require('path-parse');
    return exits.success(pathParse(inputs.path));
  }


};
