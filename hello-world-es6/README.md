# Hello World ES6

A minimal Ionic application that is written using ES6. The configuration changes are based on these boilerplate projects:

- https://github.com/ModusCreateOrg/ionic-seed
- https://github.com/ByJC/ionic-es6-webpack-boilerplate

## Installation

```
npm install --save ionic-sdk
npm install --save-dev babel-core babel-eslint babel-loader babel-polyfill babel-preset-es2015 ng-annotate-loader eslint-loader webpack webpack-stream gulp-plumber
```

## Configuration

Add these files:

- `.babelrc`
- `.eslintrc`
- `webpack.config.js`
- `webpack.prod.config.js`

Add to `gulpfile.js`

```javascript
// Need this to prevent the pipe from breaking on errors, and continue
// watching files for changes.
var plumber = require('gulp-plumber');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('./src/app.js')
    .pipe(plumber())
    .pipe(webpack(webpackConfig), null, function(err, stats) {
        console.log(stats);
    })
    .pipe(gulp.dest('./www'))
});
```

Delete everything in `www/lib/ionic` except the fonts directory and maybe the version.json file.

Inside `scss/ionic.app.scss`, change the "include all of Ionic" line to:

```
@import "../node_modules/ionic-sdk/scss/ionic";
```

Inside `ionic.project`, make sure you have:

```
"gulpStartupTasks": [
  "webpack",
  "sass",
  "watch"
]
```

Delete `css/style.css` and create `css\.gitkeep`.

## Build

```
gulp sass && webpack --progress --colors --config webpack.prod.config.js
```
