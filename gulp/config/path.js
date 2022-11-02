//Получение имя папки нашего проекта
import  * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        // html: `${srcFolder}/*.html`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        // html: `${srcFolder}/**/*.html`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`,  
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}