export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.build.html}`,
		},
		open: false,
		notify: false,
		port: 5000,
	});
};
