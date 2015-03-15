function Alex(game, isPlayer) {
    //Alex Sprite
    this.alex_standingAnim = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 2250+10, 251.5, 325, .2, 4, true, false, 0);
    this.alex_rightwalkAnim = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 1280 + 10, 251.5, 325, 0.2, 7, true, false, 0);
    this.alex_jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 1615, 251.5, 325, 0.15, 5, false, false, 0);

    this.alex_standingLeftAnim = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008-1002, 2250+10, 251.5, 325, .2, 4, true, true, 0);
    this.alex_leftwalkAnim = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 0, 1280 + 10, 251.5, 325, 0.2, 7, true, true, 0);
    this.alex_leftjumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 750.5, 1615, 251.5, 325, 0.15, 5, false, true, 0);

    this.alex_blockRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 4200+10, 251.5, 325, 1, 1, true, false, 0);
    this.alex_blockLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008-1756.5, 4200+10, 251.5, 325, 1, 1, true, true, 0);


    /////new controls animation 
    //weak punch
    this.alex_weak_punch_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 650, 251.5, 325, .1, 4, false, false, 0);
    this.alex_weak_punch_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 650, 251.5, 325, .1, 4, false, true, 0);

    //weak kick
    this.alex_weak_kick_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 325, 251.5, 325, .1, 4, false, false, 0);
    this.alex_weak_kick_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 325, 251.5, 325, .1, 4, false, true, 0);

    //strong punch
    this.alex_strong_punch_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 975, 251.5, 325, .1, 4, false, false, 0);
    this.alex_strong_punch_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 975, 251.5, 325, .1, 4, false, true, 0);

    //strong kick
    this.alex_strong_kick_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 0, 251.5, 325, .1, 4, false, false, 0);
    this.alex_strong_kick_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 0, 251.5, 325, .1, 4, false, true, 0);

    //----------------------------------------------------------------------------------added animations for win/lost here

    //victory loop 1
    this.alex_victory_Animation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 3875, 251.5, 325, .2, 4, false, false, 0);
    this.alex_victory_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 3875, 251.5, 325, .2, 4, false, true, 0);

    //victory loop 2 (to stay at last column of sprite)
    this.alex_victory_Animation2 = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 754.5, 3875, 251.5, 325, 1, 1, true, false, 0);
    this.alex_victory_leftAnimation2 = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008-754.5, 3875, 251.5, 325, 1, 1, true, false, 0);
   
    //lost loop 1
    this.alex_lost_Animation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 3875 - 325, 251.5, 325, .2, 4, false, false, 0);
    this.alex_lost_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 3875 - 325, 251.5, 325, .2, 4, false, true, 0);
    

    //loss loop 2 (to stay at last column of sprite)
    this.alex_lost_Animation2 = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 754.5, 3875 - 325, 251.5, 325, 1, 1, true, false, 0);
    this.alex_lost_leftAnimation2 = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 754.5, 3875 - 325, 251.5, 325, 1, 1, true, true, 0);
    
    //----------------------------------------------------------------------------------ended anim for win/lost here

    //high hit
    this.alex_high_hit_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 2585, 251.5, 325, .1, 4, false, false, 0);
    this.alex_high_hit_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 2585, 251.5, 325, .1, 4, false, true, 0);

    //low hit
    this.alex_low_hit_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 2585 + 325, 251.5, 325, .1, 4, false, false, 0);
    this.alex_low_hit_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 2585 + 325, 251.5, 325, .1, 4, false, true, 0);

    //----------------------------------------------------------------------------------added taunt anim here
    //taunt
    this.alex_taunt_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 0, 2250 + 10 - 325, 251.5, 325, .2, 4, false, false, 0);
    this.alex_taunt_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 2008 - 1002, 2250 + 10 - 325, 251.5, 325, .2, 4, false, true, 0);
    //----------------------------------------------------------------------------------ended taunt anim here
    
    //slide punch
    this.alex_slide_punch_rightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new.png"), 754.5, 650, 251.5, 325, .1, 1, true, false, 0);
    this.alex_slide_punch_leftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/alex_sprite_new2.png"), 0, 650, 251.5, 325, .1, 1, true, true, 0);
    
    //Alex's turf
    this.turf = "./img/narrows.png";
    
    //new boolean values added here
    this.slide_punch = false; //=====================slide punch
    this.weak_punch = false;
    this.taunt = false;//----------------------------------------------------------------------------------set taunt to false here
    this.weak_kick = false;
    this.strong_punch = false;
    this.strong_kick = false;
    this.jumping = false;
    this.sittingLeft = false;
    this.sittingRight = false;
    this.rightwalk = false;
    this.lost = false;
    this.won = false;
    this.leftwalk = false;
    this.current_action = false;
    this.gotHit = false;
    this.isPlayer = isPlayer;
    this.game = game;
    this.myboxes = new Hitbox(game, 2);
    this.myboxes.setHitbox(this.x + 85, this.y - 140, 110, 300);
    this.bar;
}

//Alex.prototype = new Entity();
//Alex.prototype.constructor = Alex;


Alex.prototype.loadEnergyBar = function (energy_bar) { this.bar = energy_bar }

Alex.prototype.updateOrientation = function () {
    this.standing = this.isPlayer;
    this.standingLeft = !this.isPlayer;
    this.isRight = this.isPlayer;

    this.start = this.isPlayer ? 100 : 1000;
    this.ground = 410;
    this.controlled = this.isPlayer;
    this.offset = -35;
    if (!this.isPlayer) {
        this.my_ai = new Ai_controller(this.game, -35);
    }
    Entity.call(this, this.game, this.start, this.ground);
}

Alex.prototype.update = function () {
    if (this.isRight) {
        this.myboxes.setHitbox(this.x + 70, this.y - 140, 70, 300);
    } if (!this.isRight) {
        this.myboxes.setHitbox(this.x + 110, this.y - 140, 70, 300);
    }
    if (this.game.thePPressed) {
        this.controlled = !this.controlled;
    }

    if (this.controlled) {//
    	if (this.game.rightArrow){
		this.isRight = true;
	} else if (this.game.leftArrow){
		this.isRight = false;
	}
	
        if (this.game.space) {
            this.slide_punch = false;
            this.jumping = true;
            this.strong_kick = false;
            this.strong_punch = false;
            this.weak_kick = false;
            this.weak_punch = false;
        }
        if (this.game.rightArrow && this.current_action === false) {
            this.slide_punch = false; 	
            this.rightwalk = true;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.isRight = true;
        } else if (this.game.leftArrow && this.current_action === false) {
            this.slide_punch = false;
            this.leftwalk = true;
            this.rightwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.isRight = false;
        } else if (this.game.downArrow && this.isRight && this.current_action === false) {
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = true;
            this.sittingLeft = false;
            this.strong_kick = false;
        } else if (this.game.downArrow && !this.isRight && this.current_action === false) {
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = true;
            this.strong_kick = false;

        } else if (this.game.theAPressed && this.current_action === false) {//A weak punch
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.strong_kick = false;
            this.strong_punch = false;
            this.weak_kick = false;
            this.weak_punch = true;
            this.current_action = true;//----------------------------------------------------------------------------------added taunt anim here
        } else if (this.game.theTPressed && this.current_action === false) {//T taunt
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.strong_kick = false;
            this.strong_punch = false;
            this.weak_kick = false;
            this.taunt = true;
            this.current_action = true;//----------------------------------------------------------------------------------added taunt anim here
        } else if (this.game.theSPressed && this.current_action === false) {//S weak kick
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.strong_kick = false;
            this.strong_punch = false;
            this.weak_punch = false;
            this.weak_kick = true;
            this.current_action = true;
        } else if (this.game.theDPressed && this.current_action === false) {//D Strong punch
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.strong_kick = false;
            this.weak_punch = false;
            this.weak_kick = false;
            this.current_action = true;
            this.strong_punch = true;
        } else if (this.game.theFPressed && this.current_action === false) {//F Strong kick
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.strong_kick = true;
            this.current_action = true;

        } else if (this.isRight && this.current_action === false) {//if not any previous actions then just idle to right
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = true;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
        } else if (!this.isRight && this.current_action === false) {// idle to left
            this.slide_punch = false;
            this.rightwalk = false;
            this.leftwalk = false;
            this.standingLeft = true;
            this.standing = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
        }
		//===========main change for slide punch
	if (this.game.shift && this.game.theAPressed && (this.game.rightArrow || this.game.leftArrow)  &&  !this.jumping) {
	    this.slide_punch = true;
            this.jumping = false;
            this.strong_kick = false;
            this.strong_punch = false;
            this.weak_kick = false;
            this.weak_punch = false;
	    this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
        } 
    }
    if (this.bar.greenwidth <= 0) {//----------------------------------------------------------------------------------added if for win/lost here
        this.lost = true;
        this.controlled = false;
    }
    //----------------------------------------------------------------------------------------------------------------ended if for win/lost here
    if (!this.controlled && !this.current_action) {
        this.my_ai.action();
        //this.rightwalk = false;
        //this.rightwalk = false;
        //this.leftwalk = false;
        //this.standing = false;
        //this.standingLeft = false;
        //this.sittingRight = false;
        //this.sittingLeft = false;
        //this.strong_kick = false;
        //this.strong_punch = false;
        //this.weak_kick = false;
        //this.weak_punch = true;
        //this.current_action = true;
    }
    if (this.gotHit) {
        this.current_action = true;
        this.slide_punch = false;
        this.rightwalk = false;
        this.leftwalk = false;
        this.standing = false;
        this.sittingRight = false;
        this.sittingLeft = false;
        this.weak_punch = false;
        this.weak_kick = false;
        this.strong_punch = false;
        this.strong_kick = false;
        if (this.jumping) {
            this.alex_jumpAnimation.elapsedTime = 0;
            this.jumping = false;
            this.y = this.ground;
        }

        
        if (this.isRight) {
            //console.log("Hit right");
            if (this.x >= -50) {
                this.x += -1;
            }

            if (this.alex_high_hit_rightAnimation.isDone()) {
                //console.log("end of right hit animation");
                this.alex_high_hit_rightAnimation.elapsedTime = 0;
                //this.standingLeft = true;
                this.standing = true;
                this.current_action = false;
                this.gotHit = false;
            }//add your animations accordingly both left and right hit animations
        } else {
            //console.log("hit left");
            if (this.x < 1100) {
                this.x += 1;
            }

            if (this.alex_high_hit_leftAnimation.isDone()) {
                //console.log("end of hit animation Left");
                this.alex_high_hit_leftAnimation.elapsedTime = 0;
                this.standingLeft = true;
                this.current_action = false;
                this.gotHit = false;

            }
        }

    }//end of added code



    if (this.jumping) {
        var jumpDistance;

        if (this.isRight) {
            if (this.alex_jumpAnimation.isDone()) {
                    this.alex_jumpAnimation.elapsedTime = 0;
                    if(this.jumping){
						this.game.moveSeffect.playFall();
					}
                    this.jumping = false;
                    this.standing = true;
                    this.current_action = false;
                }
                jumpDistance = this.alex_jumpAnimation.elapsedTime / this.alex_jumpAnimation.totalTime;
            } else {
                if (this.alex_leftjumpAnimation.isDone()) {
                    this.alex_leftjumpAnimation.elapsedTime = 0;
                    if(this.jumping){
						this.game.moveSeffect.playFall();
					}
                    this.jumping = false;
                    this.standing = true;
                }
                jumpDistance = this.alex_leftjumpAnimation.elapsedTime / this.alex_jumpAnimation.totalTime;
            }


            var totalHeight = 200;
            var howHigh = -4;
            if (this.game.upArrowPressed) {
                howHigh = -6;
            }
            if (jumpDistance > 0.5)
                jumpDistance = 1 - jumpDistance;

            var height = totalHeight * (howHigh * (jumpDistance * jumpDistance - jumpDistance));
            this.y = this.ground - height;
            if (this.game.rightArrow && this.x<1100 && this.controlled) {
                this.x += 10;
            } else if (this.game.leftArrow && this.x > -50 && this.controlled) {
                this.x -= 10;
            }
            this.slide_punch = false;
            this.leftwalk = false;
            this.rightwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
            this.strong_punch = false;
            this.strong_kick = false;

    }
    if (this.lost) {//----------------------------------------------------------------------------------added if for win/lost here
        if (this.isRight) {
            if (this.alex_lost_Animation.isDone()) {
            	this.slide_punch = false;
                this.jumping = false;
                this.standing = false;
                this.current_action = false;
                this.leftwalk = false;
                this.rightwalk = false;
                this.standing = false;
                this.standingLeft = false;
                this.sittingRight = false;
                this.sittingLeft = false;
                this.weak_punch = false;
                this.weak_kick = false;
                this.strong_punch = false;
                this.strong_kick = false;
                this.gotHit = false;

            }
        } else {
            if (this.alex_lost_leftAnimation.isDone()) {
            	this.slide_punch = false;
                this.jumping = false;
                this.standing = false;
                this.current_action = false;
                this.leftwalk = false;
                this.rightwalk = false;
                this.standing = false;
                this.standingLeft = false;
                this.sittingRight = false;
                this.sittingLeft = false;
                this.weak_punch = false;
                this.weak_kick = false;
                this.strong_punch = false;
                this.strong_kick = false;
                this.gotHit = false;
            }
        }
    }
    if (this.won) {
        if (this.isRight) {
            if (this.alex_lost_Animation.isDone()) {
            	this.slide_punch = false;
                this.jumping = false;
                this.standing = false;
                this.current_action = false;
                this.leftwalk = false;
                this.rightwalk = false;
                this.standing = false;
                this.standingLeft = false;
                this.sittingRight = false;
                this.sittingLeft = false;
                this.weak_punch = false;
                this.weak_kick = false;
                this.strong_punch = false;
                this.gotHit = false;
                this.strong_kick = false;

            }
        } else {
            if (this.alex_lost_leftAnimation.isDone()) {
            	this.slide_punch = false;
                this.jumping = false;
                this.standing = false;
                this.current_action = false;
                this.leftwalk = false;
                this.rightwalk = false;
                this.standing = false;
                this.standingLeft = false;
                this.sittingRight = false;
                this.sittingLeft = false;
                this.weak_punch = false;
                this.gotHit = false;
                this.weak_kick = false;
                this.strong_punch = false;
                this.strong_kick = false;
            }
        }
    }//----------------------------------------------------------------------------------ended if for win/lost here

    if (this.taunt) {//----------------------------------------------------------------------------------added taunt anim here
        if (this.isRight) {
            if (this.alex_taunt_rightAnimation.isDone()) {
                this.alex_taunt_rightAnimation.elapsedTime = 0;
                this.slide_punch = false;
                this.taunt = false;
                this.jumping = false;
                this.standing = false;
                this.current_action = false;
                this.leftwalk = false;
                this.rightwalk = false;
                this.standing = true;
                this.standingLeft = false;
                this.sittingRight = false;
                this.sittingLeft = false;
                this.weak_punch = false;
                this.weak_kick = false;
                this.strong_punch = false;
                this.strong_kick = false;

            }
        } else {
            if (this.alex_taunt_leftAnimation.isDone()) {
                this.alex_taunt_leftAnimation.elapsedTime = 0;
                this.slide_punch = false;
                this.taunt = false;
                this.jumping = false;
                this.standing = false;
                this.current_action = false;
                this.leftwalk = false;
                this.rightwalk = false;
                this.standing = false;
                this.standingLeft = false;
                this.sittingRight = false;
                this.sittingLeft = false;
                this.weak_punch = false;
                this.weak_kick = false;
                this.strong_punch = false;
                this.strong_kick = false;
            }
        }
    }//----------------------------------------------------------------------------------added taunt anim here
        if (this.slide_punch) {//slide punch=========================================
            if (this.isRight) {
                if (this.alex_slide_punch_rightAnimation.currentFrame() === 0) {
                    this.myboxes.setAttackBox(this.x + 80, this.y - 100, 125, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_slide_punch_rightAnimation.isDone()) {
                    this.alex_slide_punch_rightAnimation.elapsedTime = 0;
                    this.slide_punch = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.alex_slide_punch_leftAnimation.currentFrame() === 0) {//new code from here 3 is the frame it checks
                    this.myboxes.setAttackBox(this.x + 40, this.y - 100, 125, 45);// Left weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }//to here
                if (this.alex_slide_punch_leftAnimation.isDone()) {
                    this.alex_slide_punch_leftAnimation.elapsedTime = 0;
                    this.slide_punch = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        if (this.weak_punch) {
            if (this.isRight) {
                if (this.alex_weak_punch_rightAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x + 80, this.y - 100, 125, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_weak_punch_rightAnimation.isDone()) {
                    this.alex_weak_punch_rightAnimation.elapsedTime = 0;
                    this.weak_punch = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.alex_weak_punch_leftAnimation.currentFrame() === 3) {//new code from here 3 is the frame it checks for
                    this.myboxes.setAttackBox(this.x + 40, this.y - 100, 125, 45);// Left weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }//to here
                if (this.alex_weak_punch_leftAnimation.isDone()) {
                    this.alex_weak_punch_leftAnimation.elapsedTime = 0;
                    this.weak_punch = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        ////////////////////////////////////////////Added if statement^^

        if (this.strong_punch) {
            if (this.isRight) {
                if (this.alex_strong_punch_rightAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x + 100, this.y - 85, 125, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_strong_punch_rightAnimation.isDone()) {
                    this.alex_strong_punch_rightAnimation.elapsedTime = 0;
                    this.strong_punch = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.alex_strong_punch_leftAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x + 25, this.y - 85, 125, 60);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_strong_punch_leftAnimation.isDone()) {
                    this.alex_strong_punch_leftAnimation.elapsedTime = 0;
                    this.strong_punch = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        if (this.weak_kick) {
            if (this.isRight) {
                if (this.alex_weak_kick_rightAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x + 85, this.y+70, 125, 25);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_weak_kick_rightAnimation.isDone()) {
                    this.alex_weak_kick_rightAnimation.elapsedTime = 0;
                    this.weak_kick = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.alex_weak_kick_leftAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x +40, this.y+70, 125, 25);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_weak_kick_leftAnimation.isDone()) {
                    this.alex_weak_kick_leftAnimation.elapsedTime = 0;
                    this.weak_kick = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        
        ////////////////////////////////////////////Added if statement^^
        if (this.strong_kick) {
            if (this.isRight) {
                if (this.alex_strong_kick_rightAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x + 125, this.y -30, 125, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_strong_kick_rightAnimation.isDone()) {
                    this.alex_strong_kick_rightAnimation.elapsedTime = 0;
                    this.strong_kick = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.alex_strong_kick_leftAnimation.currentFrame() === 3) {
                    this.myboxes.setAttackBox(this.x, this.y - 30, 125, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.alex_strong_kick_leftAnimation.isDone()) {
                    this.alex_strong_kick_leftAnimation.elapsedTime = 0;
                    this.strong_kick = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }

      if (this.controlled && this.game.rightArrow && this.x <= 1150) {
			
			if(this.slide_punch) {
				this.x +=20;
			} else {
				this.x += 3;
			}

        } else if (this.controlled && this.game.leftArrow && this.x >= -50) {

			if(this.slide_punch){
				this.x -=20;
			} else {
				this.x -= 3;
			}
        }
        
    //}//
    Entity.prototype.update.call(this);
}
Alex.prototype.stopSPunch = function(){
	this.slide_punch = false;
	this.game.shift = false;
	this.game.theAPressed = false;
	this.leftwalk = false;
	this.rightwalk = false;
}
Alex.prototype.draw = function (ctx) {
    //ctx.fillStyle = "DarkGreen";
    //ctx.fillRect(this.myboxes.hitbox.x, this.myboxes.hitbox.y, this.myboxes.hitbox.width, this.myboxes.hitbox.height);
    //Entity.prototype.draw.call(this);
    //if (this.current_action) {
    //    ctx.fillStyle = "Red";
    //    ctx.fillRect(this.myboxes.attackbox.x, this.myboxes.attackbox.y, this.myboxes.attackbox.width, this.myboxes.attackbox.height);
    //    Entity.prototype.draw.call(this);
    //}
    if (this.jumping) {
        if (this.isRight) {
            this.alex_jumpAnimation.drawFrame(this.game, ctx, this.x, this.y - 190);
        } else {
            this.alex_leftjumpAnimation.drawFrame(this.game, ctx, this.x, this.y - 190);
        }
    } else if (this.gotHit) {
        if (this.isRight) {
            this.alex_high_hit_rightAnimation.drawFrame(this.game, ctx, this.x , this.y - 150);
        } else {
            this.alex_high_hit_leftAnimation.drawFrame(this.game, ctx, this.x , this.y - 150);
        }
    } else if (this.slide_punch) {
        if (this.isRight) {
            this.alex_slide_punch_rightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.alex_slide_punch_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            //console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
	
    } else if (this.rightwalk) {
        this.alex_rightwalkAnim.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.leftwalk) {
        this.alex_leftwalkAnim.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.sittingLeft) {
        this.alex_blockLeftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.sittingRight) {
        this.alex_blockRightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.lost) {//<--------------------------------------------------------------------------added loss/win animation here
        if (this.isRight) {
            this.alex_lost_Animation.drawFrame(this.game, ctx, this.x, this.y - 150);
            if (this.alex_lost_Animation.isDone()) {
                this.alex_lost_Animation2.drawFrame(this.game, ctx, this.x, this.y - 150)
            }
        } else{
            this.alex_lost_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            if (this.alex_lost_leftAnimation.isDone()) {
                this.alex_lost_leftAnimation2.drawFrame(this.game, ctx, this.x, this.y - 150)
            }
        }
    } else if (this.won) {
        if (this.isRight) {
            this.alex_victory_Animation.drawFrame(this.game, ctx, this.x, this.y - 150);
            if (this.alex_victory_Animation.isDone()) {
                this.alex_victory_Animation2.drawFrame(this.game, ctx, this.x, this.y - 150)
            }
        } else {
            this.alex_victory_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            if (this.alex_victory_leftAnimation.isDone()) {
                this.alex_victory_leftAnimation2.drawFrame(this.game, ctx, this.x, this.y - 150)
            }
        }//<------------------------------------------------------------------------------------------added loss/win animation here
    } else if (this.weak_punch) {
        if (this.isRight) {
            this.alex_weak_punch_rightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.alex_weak_punch_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
        ////////////////////////////////////////////Added if statement^^
    } else if (this.taunt) {//----------------------------------------------------------------------------------added taunt anim here
        if (this.isRight) {
            this.alex_taunt_rightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.alex_taunt_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }//----------------------------------------------------------------------------------added taunt anim here
        ////////////////////////////////////////////Added if statement^^
    } else if (this.weak_kick) {
        if (this.isRight) {
            this.alex_weak_kick_rightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.alex_weak_kick_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
        ////////////////////////////////////////////Added if statement^^
    } else if (this.strong_punch) {
        if (this.isRight) {
            this.alex_strong_punch_rightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.alex_strong_punch_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
    } else if (this.strong_kick) {
        if (this.isRight) {
            this.alex_strong_kick_rightAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.alex_strong_kick_leftAnimation.drawFrame(this.game, ctx, this.x, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
    } else if (this.standing) {//////////////////////////////////////
        this.alex_standingAnim.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.standingLeft) {
        this.alex_standingLeftAnim.drawFrame(this.game, ctx, this.x, this.y - 150);
    }


    Entity.prototype.draw.call(this);
}
