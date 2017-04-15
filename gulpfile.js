'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var size = require('gulp-size');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("test", function() {
	return gutil.log("Gulp is working fine");
});

gulp.task("build-sass", function() {
	return gulp.src("./test/app.scss")
		.pipe(sass({outputStyle: 'compressed'}).on('error', gutil.log))
		.pipe(autoprefixer())
		.pipe(rename('app.min.css'))
		.pipe(size({
			title: "app.min.css",
		}))
		.pipe(size({
			title: "app.min.css",
			gzip: true
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task("watch-sass", function() {
	return gulp.watch("./src/**/*.scss", ["build-sass"]);
})
