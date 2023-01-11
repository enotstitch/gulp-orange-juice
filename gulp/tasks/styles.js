import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const compilSass = gulpSass(dartSass);

export const styles = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(
			compilSass({
				outputStyle: 'expanded',
			}),
		)
		.pipe(
			autoprefixer({
				grid: true,
				cascade: true,
			}),
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(app.plugins.if(app.isProd, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isProd,
				app.plugins.size({
					title: 'До сжатия CSS',
				}),
			),
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				cleanCss({
					level: 2,
				}),
			),
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				app.plugins.size({
					title: 'После сжатия CSS',
				}),
			),
		)
		.pipe(
			app.plugins.rename({
				suffix: '.min',
			}),
		)
		.pipe(app.gulp.dest(app.path.build.css, { sourcemaps: '.' }))
		.pipe(app.plugins.browserSync.stream());
};
