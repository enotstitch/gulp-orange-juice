import gulp from 'gulp';
import { path } from './gulp/config/path';
import { plugins } from './gulp/config/plugins';

import { clean } from './gulp/tasks/clean';
import { copy } from './gulp/tasks/copy';
import { server } from './gulp/tasks/server';
import { html } from './gulp/tasks/html';
import { styles } from './gulp/tasks/styles';
import { images } from './gulp/tasks/images';
import { sprite } from './gulp/tasks/sprite';
import { scripts } from './gulp/tasks/scripts';
import { fonts } from './gulp/tasks/fonts';
import { zip } from './gulp/tasks/zip';
import { ftp } from './gulp/tasks/ftp';
import { git } from './gulp/tasks/git';

global.app = {
	isProd: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
};

function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, styles);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.sprite, sprite);
	gulp.watch(path.watch.js, scripts);
	gulp.watch(path.watch.fonts, fonts);
}

const mainTasks = gulp.parallel(copy, html, styles, images, sprite, scripts, fonts);

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
const deployZip = gulp.series(clean, mainTasks, zip);
const deployFtp = gulp.series(clean, mainTasks, ftp);
const deployGit = gulp.series(clean, mainTasks, git);

export { dev };
export { build };
export { deployZip };
export { deployFtp };
export { deployGit };

gulp.task('default', dev);
