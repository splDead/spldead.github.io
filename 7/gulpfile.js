const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers:['>1%']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream())
});

gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./build/'))
});

gulp.task('watch', function () {
    gulp.watch('./src/css/*.scss', gulp.series('sass'));
    gulp.watch('./src/*.html', gulp.series('html')).on('change', browserSync.reload);
});

gulp.task('serve', function () {
    browserSync.init({
        server:true,
        browser:'chrome',
        startPath:'/build',
        notify:false
    })
});

gulp.task('dev', gulp.parallel('watch', 'serve'));