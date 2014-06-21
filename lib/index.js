/**
 * gulp-octet - lib/index.js
 * Copyright (c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @api private
 */
'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var octet = require('octet');

module.exports = function (data) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-octet', 'Streaming not supported'));
      return cb();
    }

    try {
      var content = octet(file.contents.toString(), data);
      file.contents = new Buffer(content.res);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-octet', err));
    }

    this.push(file);
    cb();
  });
};