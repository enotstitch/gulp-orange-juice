import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export const buildFolder = `./build`;
export const srcFolder = `./assets`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/`,
	},

	src: {
		html: `${srcFolder}/html/*.html`,
		scss: `${srcFolder}/scss/styles.scss`,
		js: `${srcFolder}/js/scripts.js`,
		images: `${srcFolder}/resources/img/**/*.{jpg,jpeg,png,svg,gif}`,
		sprite: `${srcFolder}/resources/icons/svg/*.svg`,
		fonts: `${srcFolder}/resources/fonts/*.woff2`,
		files: `${srcFolder}/resources/files/**/*.*`,
	},

	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/**/*.{sass,scss}`,
		js: `${srcFolder}/**/*.js`,
		images: `${srcFolder}/resources/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
		sprite: `${srcFolder}/resources/icons/svg/*.svg`,
		fonts: `${srcFolder}/resources/fonts/*.woff2`,
		files: `${srcFolder}/resources/files/**/*.*`,
	},

	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``, // * Папка на хостинге
};
