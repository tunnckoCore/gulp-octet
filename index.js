/**
 * gulp-octet <https://github.com/tunnckoCore/gulp-octet>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var through = require('through2');
var octet = require('octet');

module.exports = function gulpOctet(data) {
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-octet', 'Steam not supported'));
      return cb();
    }

    try {
      var content = octet(file.contents.toString(), data);
      file.contents = new Buffer(content.res);
    } catch (err) {
      this.emit('error', new PluginError('gulp-octet', err));
    }

    this.push(file);
    cb();
  });
};
