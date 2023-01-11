import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const images = () => {
	return app.gulp
		.src(app.path.src.images)
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Images',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isProd,
				imagemin({
					progressive: true,
					optimizationlevel: 3,
					verbose: true,
				}),
			),
		)
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
