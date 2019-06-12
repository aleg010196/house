const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require("gulp-tinypng-compress");


function styles(){
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(gulp.dest('./dist/css'))
}


function minjs(){
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
}
function html(){
    return gulp.src('./*.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true 
    }))
    .pipe(gulp.dest('./dist'))
}
function fonts(){
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
}
function tiny() {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'FrGuccSmKn0gS6ykb5rDtw9bjnxXCofi',
        }))
        .pipe(gulp.dest('./dist/img'));
}

gulp.task('styles', styles);
gulp.task('minjs', minjs);
gulp.task('html', html);
gulp.task('fonts', fonts);
gulp.task('tiny', tiny);