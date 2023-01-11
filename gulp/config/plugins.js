import browserSync from 'browser-sync';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';
import rename from 'gulp-rename';
import fileInclude from 'gulp-file-include';
import ifPlugin from 'gulp-if';

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	size: size,
	rename: rename,
	fileInclude: fileInclude,
	if: ifPlugin,
};
