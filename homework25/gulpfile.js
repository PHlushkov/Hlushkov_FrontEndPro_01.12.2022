const gulp = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

const sass = gulpSass(dartSass);

const SRC_PATH = "./src";
const BUILD_PATH = "./build";

const JS_FILES_PATH = SRC_PATH + "/**/*.js";
const SCSS_FILES_PATH = SRC_PATH + "/**/*.scss";

const jsCompilation = async () => {
  gulp
    .src(JS_FILES_PATH)
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("project.js"))
    .pipe(gulp.dest(BUILD_PATH));
};

const scssCompilation = async () => {
  return gulp
    .src(SCSS_FILES_PATH)
    .pipe(sass())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(BUILD_PATH));
};

gulp.task("js-compilation", jsCompilation);
gulp.task("scss-compilation", scssCompilation);

gulp.task("watch-js", () => {
  gulp.watch(JS_FILES_PATH, jsCompilation);
});

gulp.task("watch-scss", () => {
  gulp.watch(SCSS_FILES_PATH, scssCompilation);
});

gulp.task("watch", gulp.parallel("watch-js", "watch-scss"));

gulp.task("default", gulp.parallel("js-compilation", "scss-compilation"));
