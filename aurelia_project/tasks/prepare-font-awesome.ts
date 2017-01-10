import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as merge from 'merge-stream';
import * as project from '../aurelia.json';

export default function prepareFontAwesome() {

  const taskCss = gulp.src(project.paths.nodeModules.concat('/font-awesome/css/font-awesome.min.css'))
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(project.paths.root.concat(''));
  //.pipe(gulp.dest(project.platform.output.concat('/css'));

  const taskFonts = gulp.src(project.paths.nodeModules.concat('/font-awesome/fonts/*'))
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(project.paths.root.concat('/fonts'));
    //.pipe(gulp.dest(project.platform.output.concat('/css/fonts'));

  return merge(taskCss, taskFonts);
}
