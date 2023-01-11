import { buildFolder } from '../config/path';
import ghPages from 'gulp-gh-pages';

export const git = () => {
	return app.gulp.src(`${buildFolder}/**/*.*`).pipe(ghPages());
};
