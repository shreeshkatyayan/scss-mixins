'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var size = require('gulp-size');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var tasks = {};

tasks.test = function() {
	return gutil.log("Gulp is working fine");
}

tasks.build = function() {
	return gulp.src("./src/app.scss")
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
}

tasks.watch = function() {
	return gulp.watch("./src/**/*.scss", [tasks.build()]);
}

module.exports = tasks;
