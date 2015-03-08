function Music(game, filepath, loop, volume) {
	this.music = new Audio(filepath);
	this.music.volume = volume;
	this.music.loop = loop;
	this.unit = 0.008;
}
Music.prototype.play = function(){
	this.music.play();
}
Music.prototype.pause = function(){
	this.music.pause();
}
