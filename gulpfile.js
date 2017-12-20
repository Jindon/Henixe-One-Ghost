const gulp          = require('gulp');
const watch         = require('gulp-watch');
const zip           = require('gulp-zip');
const sass          = require('gulp-sass');
const cleanCSS      = require('gulp-clean-css');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');
const prefix        = require('gulp-autoprefixer');
const runSequence   = require('run-sequence');

const source        ='./src';
const destination   ='./dest/themes/henixe';
const distribution  = './dist';

const name = 'henixe-one'

//Sass, CSS prefix and minification
gulp.task('sass', function() {
    return gulp.src(['src/assets/scss/*.scss'])
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/assets/css'));
});

// JS
gulp.task('js', function() {
    return gulp.src('src/assets/js/lib/*.js') // Gets all files ending with .scss in app/scss
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/assets/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/assets/js'));
});

//Packaging the theme
gulp.task('package', function(){
    gulp.src(source + '/**/*', {base: source})
        .pipe(zip(name + '.zip'))
        .pipe(gulp.dest(distribution));
});

//Copying the theme files
gulp.task('watch',['sass'], function(){
    gulp.src(source + '/**/*', {base: source})
        .pipe(watch(source, {base: source}))
        .pipe(gulp.dest(destination));

        gulp.watch(['src/assets/scss/*.scss'], ['sass']);
        gulp.watch(['src/assets/js/*.js'], ['js']);
});

//default
gulp.task('default', function (callback) {
    runSequence(['sass','js', 'watch'],
        callback
    )
});
