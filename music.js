function Music(game, filepath) {
	this.music = new Audio(filepath);
	this.music.volume = 0.05;
	this.music.loop = true;
	this.unit = 0.008;
}
Music.prototype.play = function(){
	this.music.play();
}
Music.prototype.pause = function(){
	this.music.pause();
}
