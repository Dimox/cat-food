import gulp from 'gulp';
import html from './gulp-tasks/html';
import styles from './gulp-tasks/styles';
import scripts from './gulp-tasks/scripts';
import watch from './gulp-tasks/watch';
import server from './gulp-tasks/server';
import githubPages from './gulp-tasks/github-pages';

gulp.task('build', gulp.parallel(html, styles, scripts));
gulp.task('production', gulp.series('build'));
gulp.task('default', gulp.parallel('build', watch, server));
gulp.task('githubPages', gulp.parallel(githubPages));
