import svgSprite from 'gulp-svg-sprite';

export const sprite = () => {
	return app.gulp
		.src(app.path.src.sprite)
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Sprite',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: '../icons/sprite.svg',
					},
				},
			}),
		)
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
