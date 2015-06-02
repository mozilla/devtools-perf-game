var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

var scripts = [
	'./script/data.js',
	'./script/stats.js',
	'./script/Utils.js',
	'./script/Playground.js',
	'./script/Playground.Scanlines.js',
	'./script/Playground.SoundOnDemand.js',
	'./script/Engine.js',
	'./script/Benchmark.js',
	'./script/BackgroundStars.js',
	'./script/CircleExplosion.js',
	'./script/Ship.js',
	'./script/Bullet.js',
	'./script/Asteroid.js',
	'./script/Cursor.js',
	'./script/Resource.js',
	'./script/Button.js',
	'./script/Particle.js',
	'./script/Planet.js',
	'./script/Game.js',
	'./script/Powerup.js',
	'./script/TextOut.js',
	'./script/Trail.js',
	'./script/Missile.js',
	'./script/Gameover.js',
	'./script/Main.js',
	'./script/bottlenecks.js'
];

gulp.task('server', function() {
  connect.server({
  	livereload: true
  });
});

gulp.task('scripts', function() {
	gulp.src(scripts)
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./script/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'server', 'watch']);
