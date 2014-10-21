# gulp-octet [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url]
> Compile [octet templates](https://github.com/tunnckoCore/octet). Gulp plugin for octet - Gulp plugin for octet - Javascript template engine in just 20 lines. Used in AbsurdJS.


## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install gulp-octet
```


## Usage

##### src/greeting.html

```html
<h1>Hello <strike><%this.name%></strike></h1>
```

##### gulpfile.js

```js
var gulp = require('gulp');
var octet = require('gulp-octet');

gulp.task('default', function () {
  return gulp.src('src/greeting.html')
    .pipe(octet({name: 'Charlike'}))
    .pipe(gulp.dest('dist'));
});
```

##### dist/greeting.html

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


## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]

**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/gulp-octet/graphs/contributors).  
Released under the [`MIT`][license-url] license.



[npmjs-url]: http://npm.im/gulp-octet
[npmjs-shields]: http://img.shields.io/npm/v/gulp-octet.svg
[npmjs-install]: https://nodei.co/npm/gulp-octet.svg?mini=true

[license-url]: https://github.com/tunnckoCore/gulp-octet/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/gulp-octet
[travis-img]: https://travis-ci.org/tunnckoCore/gulp-octet.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/gulp-octet
[depstat-img]: https://david-dm.org/tunnckoCore/gulp-octet.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore

[cobody-url]: https://github.com/visionmedia/co-body
[mocha-url]: https://github.com/visionmedia/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[koa-router-url]: https://github.com/alexmingoia/koa-router
[koa-url]: https://github.com/koajs/koa
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/visionmedia/co
[extend-url]: https://github.com/justmoon/node-extend
[npmrepo]: https://github.com/repo-utils/npm-repo
[sindreopn]: https://github.com/sindresorhus/opn
