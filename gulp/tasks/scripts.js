import webpack from 'webpack-stream';
import webpackConfig from '../../webpack.config';

export const scripts = () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'JavaScript',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(webpack(webpackConfig))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
};
