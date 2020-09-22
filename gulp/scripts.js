const gulp = require("gulp");

// packages
const uglify = require("gulp-uglify");
const webpack = require("webpack");
const webpackconfig = require("../webpack.config");
const webpackstream = require("webpack-stream");

function build() {
    return (
        gulp
        .src([
            "./src/assets/js/**/*"
        ])
        .pipe(webpackstream(webpackconfig, webpack))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/assets/js"))
    );
}

// exports (Common JS)
module.exports = {
    build: build
};