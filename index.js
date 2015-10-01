/*!
 * gulp-octet <https://github.com/tunnckoCore/gulp-octet>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var gutil = require('gulp-util')
var through2 = require('through2')
var isObject = require('is-real-object')
var template = require('octet')

module.exports = function gulpOctet (locals) {
  if (!isObject(locals)) {
    throw new TypeError('gulp-octet: expect `locals` to be object')
  }

  return through2.obj(function (file, enc, cb) {
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-octet', 'Streaming not supported'))
      return
    }

    var contents = template.render(file.contents.toString(), locals)
    file.contents = new Buffer(contents)
    cb(null, file)
  })
}
