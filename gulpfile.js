//本体系
var g = require('gulp');

//開発パス、ビルドパス
var srcPath = './'
var buildPath = './app/'

//SCSS系
var scss = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixCore = require('autoprefixer-core');
var autoprefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

g.task('sass',function(){
	var minCssFlg = true;
	console.log('gulp task sass ---------satar');
	return scss(srcPath+'css/',
		{
			style:'expanded',
			sourcemap:true
		}
	)
	.on('error',function(txt) {
				console.error('ERRor',txt.message);
	})
	.pipe(plumber())
	.pipe(autoprefix({
		browers:['Android 2.1','ie 8','ie 7'],
		cascade: false
	}))
	.pipe(sourcemaps.write('/map',{
		includeContent:false,
		sourceRoot:buildPath+'css/'
	}))
	.pipe(g.dest(buildPath+'css/'));
})

g.task('watch',['sass'],function(){
	g.watch(srcPath+'css/**/*.scss',['sass']);
})

g.task('default',['watch'])