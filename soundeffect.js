function SoundEffect(game) {
	this.game = game;
	this.punchWSound = new Audio("./sounds/Flash_Point_-_Hit_03.wav");
	this.punchSSound = new Audio("./sounds/Flash_Point_-_Hit_05.wav");

	this.kickWSound = new Audio("./sounds/Flash_Point_-_Hit_04.wav");
	this.kickSSound = new Audio("./sounds/Flash_Point_-_Hit_05.wav");
	
	this.blockSound = new Audio("./sounds/block_L_05.wav");
	
	this.fallSound = new Audio("./sounds/fall1.wav");
	
	this.fistSwingSound = new Audio("./sounds/fist_swing_07.wav");
	this.footSwingSound = new Audio("./sounds/foot_swing_06.wav");
	
	this.finishhim = new Audio("./sounds/finishhim.mp3");
	
	this.punchWSound.volume = 0.2;
	this.punchSSound.volume = 0.2;
	this.kickWSound.volume = 0.2;
	this.kickSSound.volume = 0.2;
	this.blockSound.volume = 0.2;
	this.finishhim.volume = 0.9;
	this.fallSound.volume = 0.02;
	this.fistSwingSound.volume = 0.1;
	this.footSwingSound.volume = 0.1;
	
	this.unit = 0.008;
}
SoundEffect.prototype.playSeffect = function(){
    var ent = this.game.entities[1];
    var ent2 = this.game.entities[2];
      if (ent.bar.greenwidth < 10|| ent2.bar.greenwidth <10) {
        this.finishhim.play();
    }
	if(ent.gotHit || ent2.gotHit){
		if (ent.weak_punch || ent2.weak_punch) {// w p
			this.punchWSound.play();
		} else if(ent.strong_punch || ent2.strong_punch){ //s p
			this.punchSSound.play();
		} else if(ent.strong_kick || ent2.strong_kick){ //s k 
			this.kickSSound.play();
		} else if(ent.weak_kick || ent2.weak_kick){ //w k 
			this.kickWSound.play();
		} 
	} else {
		if (ent.weak_punch || ent2.weak_punch || ent.strong_punch || ent2.strong_punch) {
			this.fistSwingSound.play();
		} else if(ent.strong_kick || ent2.strong_kick || ent.weak_kick || ent2.weak_kick){
			this.footSwingSound.play();
		} 
	} 
}
SoundEffect.prototype.play = function(){
	this.sound.play();
}
SoundEffect.prototype.pause = function(){
	this.sound.pause();
}

SoundEffect.prototype.playPunchW = function(){
	this.punchWSound.play();
}
SoundEffect.prototype.playPunchS = function(){
	this.punchSSound.play();
}

SoundEffect.prototype.playKickW = function(){
	this.kickWSound.play();
}
SoundEffect.prototype.playKickS = function(){
	this.kickSSound.play();
}

SoundEffect.prototype.playBlock = function(){
	this.blockSound.play();
}
SoundEffect.prototype.playFall = function(){
	this.fallSound.play();
}
