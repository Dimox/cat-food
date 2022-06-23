export const PRODUCTION = process.env.NODE_ENV == 'production';

export const PATHS = {
  build: {
    html: './',
    scripts: 'assets/js/',
    styles: 'assets/css/',
  },
  src: {
    html: 'src/html/*.html',
    scripts: 'src/js/main.js',
    styles: 'src/scss/styles.scss',
  },
  watch: {
    html: ['src/html/*.html', 'src/html/parts/*.html'],
    scripts: 'src/js/**/*.js',
    styles: 'src/scss/**/*.scss',
  },
};
