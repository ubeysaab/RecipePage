import { src, dest, series,task, watch } from "gulp"

import gulpSass from "gulp-sass"

import * as sass from "sass"
import clean from "gulp-clean"
import imgminify from "gulp-imagemin"
const compileToCss = gulpSass(sass)






function buildStyles() {
  return  src("./scss/**/*.scss").pipe(compileToCss()).pipe(dest("./dest/css"));
}


function watcher() {
 return  watch("./scss/**/*.scss", buildStyles)
}

function cleans(){
 return  src('./dest/*',{read:false}).pipe(clean());
}


function minifyImages(){
 
   return src("./assets/images/*")
  .pipe(imgminify())
  .pipe(dest("./dest/images"))
}

task("default",series(cleans,buildStyles,watcher))