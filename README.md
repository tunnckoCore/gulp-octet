gulp-octet [![Build Status](https://travis-ci.org/tunnckoCore/gulp-octet.png)](https://travis-ci.org/tunnckoCore/gulp-octet) [![Dependencies Status](https://david-dm.org/tunnckoCore/gulp-octet/status.svg)](https://david-dm.org/tunnckoCore/gulp-octet) [![Coverage Status](https://coveralls.io/repos/tunnckoCore/gulp-octet/badge.png?branch=master)](https://coveralls.io/r/tunnckoCore/gulp-octet?branch=master)
================

> Compile [octet templates](https://github.com/tunnckoCore/octet). Gulp plugin for octet - Javascript template engine in 140 bytes, by Jed Schmidt.


## Install
> Install [`package/gulp-octet`](http://npm.im/gulp-octet) with [npm](https://npmjs.org)

```
$ npm install gulp-octet
```


## Usage

#### `src/greeting.html`

```html
<h1>Hello <strike><%this.name%></strike></h1>
```

#### `gulpfile.js`

```js
var gulp = require('gulp');
var octet = require('gulp-octet');

gulp.task('default', function () {
  return gulp.src('src/greeting.html')
    .pipe(octet({name: 'Charlike'}))
    .pipe(gulp.dest('dist'));
});
```

#### `dist/greeting.html`

```html
<h1>Hello <strike>Charlike</strike></h1>
```

## Mocha (test), Istanbul (coverage), JSHint (lint)
> You can run it through `npm run`

```
$ npm test
$ npm run cov
$ npm run lint
```
or through `make` file
```
$ make test
$ make cov
$ make lint
```

## License
The MIT License, 2014 [Charlike Mike Reagent](https://github.com/tunnckoCore) ([@tunnckoCore](https://twitter.com/tunnckoCore))
***
_This file was rebuild with [`Ock`](https://github.com/tosckjs/ock) on June 21, 2014._

