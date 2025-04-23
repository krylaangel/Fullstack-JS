import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import browserSyncLib from "browser-sync";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);
const browserSync = browserSyncLib.create();
const { src, dest, watch, series } = gulp;

function styles() {
  return src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  watch("src/scss/**/*.scss", styles);
  watch("./*.html").on("change", browserSync.reload);
  watch("./dist/js/**/*.js").on("change", browserSync.reload);
}

export default series(styles, serve);
