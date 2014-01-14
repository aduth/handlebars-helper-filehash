/*! handlebars-helper-filehash 1.0.0 | Copyright 2014 Andrew Duthie | MIT License */
var crypto = require('crypto'),
  fs = require('fs');

module.exports.register = function(Handlebars) {
  'use strict';

  /**
   * {{ fileHash }} handlebars helper for generating md5 hash from a file's content
   *
   * @example {{ fileHash './path/to/my/asset.css' 8 }}
   */
  Handlebars.registerHelper('fileHash', function(path, precision) {
    if (!path.length) return;

    var md5 = crypto.createHash('md5'),
      hash = '';

    try {
      var content = fs.readFileSync(path);
      md5.update(content);
      hash = md5.digest('hex');
      if (typeof precision === 'number') {
        hash = hash.slice(0, precision);
      }
    } catch (e) {
      console.error('Failed to generate hash. Check if file exists: `' + path + '`');
    }

    return hash;
  });
};