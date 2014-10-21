/**
 * gulp-octet <https://github.com/tunnckoCore/gulp-octet>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var gutil = require('gulp-util');
var gulpOctet = require('../index');
var user = { name: 'Charlike' };

describe('octet: should compile octet templates', function () {
  it('should support locals', function (done) {
    var stream = gulpOctet({user: user});
    stream.on('data', function (data) {
      assert.equal(data.contents.toString(), '<p>Charlike</p>');
      done();
    });

    stream.write(new gutil.File({
      contents: new Buffer('<p><%this.user.name%></p>')
    }));

    stream.end();
  });
  it('should support helpers', function (done) {
    var stream = gulpOctet({user: user, uppercase: function (str) {return str.toUpperCase();}});
    stream.on('data', function (data) {
      assert.equal(data.contents.toString(), '<p>CHARLIKE</p>');
      done();
    });

    stream.write(new gutil.File({
      contents: new Buffer('<p><%this.uppercase(this.user.name)%></p>')
    }));

    stream.end();
  });
});
