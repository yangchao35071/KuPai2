//先引入gulp
var gulp = require('gulp');
//引入sass
var sass = require('gulp-sass');





// html文件拷贝命令
gulp.task('copy-index',function(){
    gulp.src('front/*.html')
        .pipe(gulp.dest('after\\public'));
})
// gulp.task('copy-html', function () {
//     gulp.src('html/*.html')
//         .pipe(gulp.dest('E:\\phpStudy\\WWW\\KuPai\\html'));
// })
// 拷贝图片
// gulp.task('copy-image',function(){
//     gulp.src('img/**/*')
//         .pipe(gfront/ulp.dest('E:\\phpStudy\\WWW\\KuPai\\img'));
// })
// 拷贝js文件
// gulp.task('copy-js',function(){
//     gulp.src('js/**/*')
//         .pipe(gulp.dest('E:\\phpStudy\\WWW\\KuPai\\js'));
// })
//拷贝sass
gulp.task('sassfile',function(){
    gulp.src('front/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('after\\public\\css'));
})
//php
// gulp.task('php-study',function(){
//     gulp.src('php/**/*')
//         .pipe(gulp.dest('E:\\phpStudy\\WWW\\KuPai\\php'));
// })






gulp.task('watchall',function(){
    gulp.watch('front/*.html', ['copy-index']);
    // gulp.watch('html/*.html', ['copy-html']);
    // gulp.watch('img/**/*', ['copy-image']);
    // gulp.watch('js/**/*', ['copy-js']);
    gulp.watch('front/sass/*.scss', ['sassfile']);
    // gulp.watch('php/*.php', ['php-study']);
})