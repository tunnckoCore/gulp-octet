## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Compile [octet templates](https://github.com/tunnckoCore/octet). [Gulp](http://gulpjs.com) plugin for octet - Javascript template engine in just 20 lines - used in [AbsurdJS](http://absurdjs.com)

## Install
```bash
npm install gulp-octet
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

**src/greeting.html**
```html
<h1>Hello <strike><%this.name%></strike></h1>
```
**gulpfile.js**

```js
var gulp = require('gulp');
var octet = require('gulp-octet');

gulp.task('default', function () {
  return gulp.src('src/greeting.html')
    .pipe(octet({name: 'Charlike'}))
    .pipe(gulp.dest('dist'));
});
```
**dist/greeting.html**
```html
<h1>Hello <strike>Charlike</strike></h1>
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/gulp-octet
[npmjs-img]: https://img.shields.io/npm/v/gulp-octet.svg?style=flat&label=gulp-octet

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gulp-octet?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gulp-octet.svg?style=flat

[license-url]: https://github.com/tunnckoCore/gulp-octet/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/gulp-octet
[travis-img]: https://img.shields.io/travis/tunnckoCore/gulp-octet.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/gulp-octet
[daviddm-img]: https://img.shields.io/david/tunnckoCore/gulp-octet.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/gulp-octet/graphs/contributors

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 30, 2014_
