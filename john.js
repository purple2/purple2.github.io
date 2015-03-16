function John(game, isPlayer) {
    //idle
    this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, -20, 150, 290, .3, 5, true, false, 0);
    this.idleLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 1770, -20, 150, 290, .3, 5, true, false, 0);

    //walk
    this.walkLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 840, 260, 140, 280, 0.05, 12, true, false, 0);
    this.walkRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 260, 140, 280, 0.05, 12, true, false, 0);

    //taunt
    this.tauntLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 0, 540, 120, 330, .07, 9, false, false, 0);
    this.tauntRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 1440, 540, 120, 330, .07, 9, false, true, 0);

    //jump
    this.jumpRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 870, 140, 280, 0.1, 5, false, false, 0);
    this.jumpLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 1820, 870, 140, 280, 0.1, 5, false, true, 0);
    
    //block
    this.blockRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 1610, 100, 280, 1, 1, true, false, 0);
    this.blockLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 2420, 1610, 100, 280, 1, 1, true, false, 0);

    /////new controls animation 
    //weak punch
    this.wkPunchRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 1890, 180, 280, .05, 11, false, false, 0);
    this.wkPunchLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 540, 1890, 180, 280, .05, 11, false, true, 0);

    //weak kick
    this.wkKickRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 2450, 200, 280, .05, 12, false, false, 0);
    this.wkKickLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 120, 2450, 200, 280, .05, 12, false, true, 0);

    //strong punch
    this.strPunchRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 2170, 200, 280, .07, 6, false, false, 0);
    this.strPunchLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 1320, 2170, 200, 280, .07, 6, false, true, 0);

    //strong kick
    this.strKickRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 2730, 274, 280, .07, 9, false, false, 0);
    this.strKickLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 54, 2730, 274, 280, .07, 9, false, true, 0);

    //head damage
    this.hdRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 3010, 100, 280, .05, 3, false, false, 0);
    this.hdLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 2220, 3010, 100, 280, .05, 3, false, true, 0);

    //body damage
    this.bdyRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 3290, 360/3, 280, .15, 3, false, false, 0);
    this.bdyLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 2155, 3290, 360/3, 280, .15, 3, false, true, 0);

    //Defeat
    this.defeatRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 0, 3570, 120, 280, .07, 6, false, false, 0);
    this.defeatLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 1800, 3570, 120, 280, .07, 6, false, true, 0);
    
    //Defeat still shot
    this.defeatRightStill = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 600, 3570, 120, 280, 5, 1, false, false, 0);
    this.defeatLeftStill = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 2400, 3570, 120, 280, 5, 1, false, true, 0);

    //Victory
    this.victoryRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 10, 3850, 135, 330, .07, 8, false, false, 0);
    this.victoryLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 1440, 3850, 135, 330, .07, 8, false, true, 0);

    //Victory still shot
    this.victoryRightStill = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 955, 3850, 135, 330, 5, 1, false, false, 0);
    this.victoryLeftStill = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 1440+955, 3850, 135, 330, 5, 1, false, true, 0);
    
    	   //slide punch
    this.slidePunchRight = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Right.png"), 1400, 2170, 200, 280, .07, 1, true, false, 0);
    this.slidePunchLeft = new Animation(ASSET_MANAGER.getAsset("./img/John_Sprites_Left.png"), 0, 2170, 200, 280, .07, 1, true, true, 0);
    //John's home turf
    this.turf = "./img/staircase.png";
    
    //new boolean values added here
    this.slide_punch = false; //=====================slide punch

    this.weak_punch = false;
    this.weak_kick = false;
    this.strong_punch = false;
    this.strong_kick = false;
    this.jumping = false;
    this.sittingLeft = false;
    this.sittingRight = false;
    this.rightwalk = false;
    this.leftwalk = false;
    this.current_action = false;
    this.gotHit = false;
    this.isPlayer = isPlayer;
    this.game = game;
    this.myboxes = new Hitbox(game, 3);
    this.bar;
}

John.prototype = new Entity();
John.prototype.constructor = John;

John.prototype.loadEnergyBar = function ( energy_bar ) { this.bar = energy_bar }

John.prototype.updateOrientation = function () {
    this.standing = this.isPlayer;
    this.standingLeft = !this.isPlayer;
    this.isRight = this.isPlayer;

    this.start = this.isPlayer ? 100 : 1000;
    this.ground = 440;
    this.controlled = this.isPlayer;
    this.offset = 35;
    if (!this.isPlayer) {
        this.my_ai = new Ai_controller(this.game, -35);
    }

    Entity.call(this, this.game, this.start, this.ground);
}

John.prototype.update = function () {
    if (this.isRight) {
        this.myboxes.setHitbox(this.x + 20, this.y - 130, 70, 250);
    } if (!this.isRight) {
        this.myboxes.setHitbox(this.x + 10, this.y - 130, 70, 250);
    }

    if (this.controlled) {//
 	if(this.game.rightArrow){
		this.isRight = true;
	} else if (this.game.leftArrow){
		this.isRight = false;
	}
        if (this.game.space) {
            this.jumping = true;
            this.strong_kick = false;
            this.strong_punch = false;
            this.weak_kick = false;
            this.weak_punch = false;
            this.slide_punch = false;
        }
        if (this.game.rightArrow && this.current_action === false) {
            this.rightwalk = true;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
         //   this.isRight = true;
            this.slide_punch = false;
        } else if (this.game.leftArrow && this.current_action === false) {
            this.leftwalk = true;
            this.rightwalk = false;
            this.standing = false;
            this.standingLeft = false;
        //    this.isRight = false;
            this.slide_punch = false;
        } else if (this.game.downArrow && this.isRight && this.current_action === false) {
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = true;
            this.sittingLeft = false;
            this.strong_kick = false;
            this.slide_punch = false;
        } else if (this.game.downArrow && !this.isRight && this.current_action === false) {
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = true;
            this.strong_kick = false;
            this.slide_punch = false;

        } else if (this.game.theAPressed && this.current_action === false) {//A weak punch
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
            this.current_action = true;
            this.slide_punch = false;
            ////////////////////////////////////////////Added if statement^^
        } else if (this.game.theSPressed && this.current_action === false) {//S weak kick
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
            this.slide_punch = false;
            ////////////////////////////////////////////Added if statement and weak action booleans^^^^
        } else if (this.game.theDPressed && this.current_action === false) {//D Strong punch
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
            ////////////////////////////////////////////Added weak action booleans^^
            this.strong_punch = true;
            this.slide_punch = false;
        } else if (this.game.theFPressed && this.current_action === false) {//F Strong kick
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
            this.strong_kick = true;
            this.current_action = true;
            this.slide_punch = false;
            ////////////////////////////////////////////Added weak action booleans^^

        } else if (this.isRight && this.current_action === false) {//if not any previous actions then just idle to right
            this.rightwalk = false;
            this.leftwalk = false;
            this.standing = true;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
            this.slide_punch = false;
            ////////////////////////////////////////////Added weak action booleans^^
        } else if (!this.isRight && this.current_action === false) {// idle to left
            this.rightwalk = false;
            this.leftwalk = false;
            this.standingLeft = true;
            this.standing = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
            this.slide_punch = false;
            ////////////////////////////////////////////Added weak action booleans^^
        }
			//===========main change for slide punch
	if (this.game.shift && this.game.theAPressed && (this.game.rightArrow || this.game.leftArrow)  &&  !this.jumping && Math.abs(this.game.Opponent.x - this.x) > 350 && ((!this.game.Opponent.isRight) === this.isRight)) {
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
			 this.current_action = true;
        }  
    }
    if (!this.controlled && !this.current_action) {
        this.my_ai.action();
        //this.rightwalk = false;
        //this.leftwalk = false;
        //this.standing = false;
        //this.standingLeft = false;
        //this.sittingRight = false;
        //this.sittingLeft = false;
        //this.strong_kick = false;
        //this.strong_punch = false;
        //this.weak_kick = true;
        //this.weak_punch = false;
        //this.current_action = true;
    }
    if (this.gotHit) {//<-----------------------------------------new from here
        this.current_action = true;
        this.rightwalk = false;
        this.leftwalk = false;
        this.standing = false;
        this.sittingRight = false;
        this.sittingLeft = false;
        this.weak_punch = false;
        this.weak_kick = false;
        this.strong_punch = false;
        this.strong_kick = false;
        this.slide_punch = false;
        if (this.jumping) {
            this.jumpRight.elapsedTime = 0;
            this.jumpLeft.elapsedTime = 0;
            this.jumping = false;
            this.y = this.ground;
        }
        if (this.isRight) {
           ////console.log("Hit right");
            if (this.x >= -50) {
                this.x += -1;
            }

            if (this.bdyRight.isDone()) {
                ////console.log("end of right hit animation");
                this.bdyRight.elapsedTime = 0;
                //this.standingLeft = true;
                this.standing = true;
                this.current_action = false;
                this.gotHit = false;
            }//add your animations accordingly both left and right hit animations
        } else {
            ////console.log("hit left");
            if (this.x < 1100) {
                this.x += 1;
            }

            if (this.bdyLeft.isDone()) {
                ////console.log("end of hit animation Left");
                this.bdyLeft.elapsedTime = 0;
                this.standingLeft = true;
                this.current_action = false;
                this.gotHit = false;

            }
        }//<-------------------------to here 
    }
    if (this.jumping) {
        var jumpDistance;

        if (this.isRight) {
            if (this.jumpRight.isDone()) {
                    this.jumpRight.elapsedTime = 0;
                    if(this.jumping){
						this.game.moveSeffect.playFall();
					}
                    this.jumping = false;
                    this.standing = true;
                    this.current_action = false;
                }
                jumpDistance = this.jumpRight.elapsedTime / this.jumpRight.totalTime;
            } else {
                if (this.jumpLeft.isDone()) {
                    this.jumpLeft.elapsedTime = 0;
                    if(this.jumping){
						this.game.moveSeffect.playFall();
					}
                    this.jumping = false;
                    this.standingLeft = true;
                    this.current_action = false;
                }
                jumpDistance = this.jumpLeft.elapsedTime / this.jumpRight.totalTime;
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
            /*if (this.game.rightArrow) {
                this.x += 10;
                
            } else if (this.game.leftArrow) {
                this.x -= 10;
                
            }*/
            if (this.game.rightArrow && this.x < 1100 && this.controlled) {
                this.x += 10;
            } else if (this.game.leftArrow && this.x > -50 && this.controlled) {
                this.x -= 10;
            }
            this.leftwalk = false;
            this.rightwalk = false;
            this.standing = false;
            this.standingLeft = false;
            this.sittingRight = false;
            this.sittingLeft = false;
            this.weak_punch = false;
            this.weak_kick = false;
            ////////////////////////////////////////////Added weak action booleans^^
            this.strong_punch = false;
            this.strong_kick = false;
            this.slide_punch = false;
    }
    if (this.lost) {//----------------------------------------------------------------------------------added if for win/lost here
        if (this.isRight) {
            if (this.defeatRight.isDone()) {
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
                this.slide_punch = false;
            }
        } else {
            if (this.defeatLeft.isDone()) {
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
                this.slide_punch = false;
            }
        }
    }
    if (this.won) {
        if (this.isRight) {
            if (this.victoryRight.isDone()) {
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
                this.slide_punch = false;

            }
        } else {
            if (this.victoryLeft.isDone()) {
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
                this.slide_punch = false;
            }
        }
    }//----------------------------------------------------------------------------------ended if for win/lost here

    if (this.taunt) {//----------------------------------------------------------------------------------added taunt anim here
        if (this.isRight) {
            if (this.tauntRight.isDone()) {
                this.tauntRight.elapsedTime = 0;
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
                this.slide_punch = false;

            }
        } else {
            if (this.tauntLeft.isDone()) {
                this.tauntLeft.elapsedTime = 0;
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
                this.slide_punch = false;
            }
        }
    }
    if (this.slide_punch) {//slide punch=========================================
	 this.weak_punch = false;
            if (this.isRight) {
                if (this.slidePunchRight.currentFrame() === 0) {
                    this.x += 20;
                    this.myboxes.setAttackBox(this.x + 92, this.y - 100, 80, 25);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (!this.game.rightArrow) {
                    this.slidePunchRight.elapsedTime = 0;
                    this.slide_punch = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.slidePunchLeft.currentFrame() === 0) {//new code from here 3 is the frame it checks
                    this.x += 20;
                    this.myboxes.setAttackBox(this.x, this.y - 100, -80, 25);// Left weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }//to here
                if (!this.game.leftArrow) {
                    this.slidePunchLeft.elapsedTime = 0;
                    this.slide_punch = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        if (this.weak_punch) {
            if (this.isRight) {
                if (this.wkPunchRight.currentFrame() === 10) {
                    this.myboxes.setAttackBox(this.x + 92, this.y - 100, 80, 25);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.wkPunchRight.isDone()) {
                    this.wkPunchRight.elapsedTime = 0;
                    this.weak_punch = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.wkPunchLeft.currentFrame() === 10) {//new code from here 3 is the frame it checks for
                    this.myboxes.setAttackBox(this.x, this.y - 100, -80, 25);// Left weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }//to here
                if (this.wkPunchLeft.isDone()) {
                    this.wkPunchLeft.elapsedTime = 0;
                    this.weak_punch = false;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        if (this.strong_punch) {
            if (this.isRight) {
                if (this.strPunchRight.currentFrame() === 5) {
                    this.myboxes.setAttackBox(this.x + 125, this.y - 120, 76, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.strPunchRight.isDone()) {
                    this.strPunchRight.elapsedTime = 0;
                    this.strong_punch = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.strPunchLeft.currentFrame() === 5) {//hitbox here check frame and change to what you want
                    this.myboxes.setAttackBox(this.x - 75, this.y - 120, 76, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.strPunchLeft.isDone()) {
                    this.strPunchLeft.elapsedTime = 0;
                    this.strong_punch = false;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }
        if (this.weak_kick) {
            if (this.isRight) {
                if (this.wkKickRight.currentFrame() === 11) {
                    this.myboxes.setAttackBox(this.x + 90, this.y + 35, 65, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.wkKickRight.isDone()) {
                    this.wkKickRight.elapsedTime = 0;
                    this.weak_kick = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.wkKickLeft.currentFrame() === 11) {
                    this.myboxes.setAttackBox(this.x - 60, this.y + 35, 60, 45);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.wkKickLeft.isDone()) {
                    this.wkKickLeft.elapsedTime = 0;
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
                if (this.strKickRight.currentFrame() === 8) {
                    this.myboxes.setAttackBox(this.x + 75, this.y - 45, 120, 35);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.strKickRight.isDone()) {
                    this.strKickRight.elapsedTime = 0;
                    this.strong_kick = false;
                    //this.standingLeft = false;
                    this.standing = true;
                    this.current_action = false;
                }
            } else {
                if (this.strKickLeft.currentFrame() === 8) {
                    this.myboxes.setAttackBox(this.x - 95, this.y - 45, 120, 35);// right weak punch hitbox set****
                    this.myboxes.setAttack();
                    this.myboxes.attackenemy();
                    this.myboxes.unsetAttack();
                }
                if (this.strKickLeft.isDone()) {
                    this.strKickLeft.elapsedTime = 0;
                    this.strong_kick = false;
                    //this.standingLeft = true;
                    this.standing = false;
                    this.current_action = false;
                }
            }
        }

        /*if (this.controlled && this.rightwalk) {
            this.x += 3;
            
        } else if (this.controlled && this.leftwalk) {
            this.x -= 3;
            
        }*/

        if (this.controlled && this.rightwalk && this.x <= 1150) {
            this.x += 5;

        } else if (this.controlled && this.leftwalk && this.x >= -50) {
            this.x -= 5;

        }
        
    //Entity.prototype.update.call(this);
}
John.prototype.stopSPunch = function(){
	this.weak_punch = false;
	this.game.rightArrow = false;
	this.game.leftArrow = false;
	this.slide_punch = false;
	this.game.shift = false;
	this.game.theAPressed = false;
	this.leftwalk = false;
	this.rightwalk = false;
}
John.prototype.draw = function (ctx) {
    /*ctx.fillStyle = "DarkGreen";
    ctx.fillRect(this.myboxes.hitbox.x, this.myboxes.hitbox.y, this.myboxes.hitbox.width, this.myboxes.hitbox.height);
    Entity.prototype.draw.call(this);
    if (this.current_action) {
        ctx.fillStyle = "Red";
        ctx.fillRect(this.myboxes.attackbox.x, this.myboxes.attackbox.y, this.myboxes.attackbox.width, this.myboxes.attackbox.height);
        Entity.prototype.draw.call(this);
    }*/

    if (this.jumping) {
        if (this.isRight) {
            this.jumpRight.drawFrame(this.game, ctx, this.x, this.y - 190);
        } else {
            this.jumpLeft.drawFrame(this.game, ctx, this.x, this.y - 190);
        }
    } else if (this.gotHit) {//<-----------------------------------------------------------added hit animation here
        if (this.isRight) {
            this.bdyRight.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else {
            this.bdyLeft.drawFrame(this.game, ctx, this.x, this.y - 150);
        }
    } else if (this.slide_punch) {
        if (this.isRight) {
            this.slidePunchRight.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.slidePunchLeft.drawFrame(this.game, ctx, this.x, this.y - 150);
            //console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
    } else if (this.rightwalk) {
        this.walkRight.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.leftwalk) {
        this.walkLeft.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.sittingLeft) {
        this.blockLeft.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.sittingRight) {
        this.blockRight.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.lost) {//<--------------------------------------------------------------------------added loss/win animation here
        if (this.isRight) {
            this.defeatRight.drawFrame(this.game, ctx, this.x, this.y - 150);
            if (this.defeatRight.isDone()) {
                this.defeatRightStill.drawFrame(this.game, ctx, this.x, this.y - 150)
            }

        } else {
            this.defeatLeft.drawFrame(this.game, ctx, this.x, this.y - 150);
            if (this.defeatRight.isDone()) {
                this.defeatRightStill.drawFrame(this.game, ctx, this.x, this.y - 150)
            }

        }
    } else if (this.won) {
        if (this.isRight) {
            this.victoryRight.drawFrame(this.game, ctx, this.x, this.y - 200);
            if (this.victoryRight.isDone()) {
                this.victoryRightStill.drawFrame(this.game, ctx, this.x, this.y - 200)
            }
        } else {
            this.victoryLeft.drawFrame(this.game, ctx, this.x, this.y - 200);
            if (this.victoryLeft.isDone()) {
                this.victoryLeftStill.drawFrame(this.game, ctx, this.x, this.y - 200)
            }
        }
    } else if (this.weak_punch) {
        if (this.isRight) {
            this.wkPunchRight.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.wkPunchLeft.drawFrame(this.game, ctx, this.x - 90, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
        ////////////////////////////////////////////Added if statement^^
    } else if (this.weak_kick) {
        if (this.isRight) {
            this.wkKickRight.drawFrame(this.game, ctx, this.x - 40, this.y - 150);
        } else if (!this.isRight) {
            this.wkKickLeft.drawFrame(this.game, ctx, this.x - 70, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
        ////////////////////////////////////////////Added if statement^^
    } else if (this.strong_punch) {
        if (this.isRight) {
            this.strPunchRight.drawFrame(this.game, ctx, this.x, this.y - 150);
        } else if (!this.isRight) {
            this.strPunchLeft.drawFrame(this.game, ctx, this.x - 80, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
    } else if (this.strong_kick) {
        if (this.isRight) {
            this.strKickRight.drawFrame(this.game, ctx, this.x - 80, this.y - 150);
        } else if (!this.isRight) {
            this.strKickLeft.drawFrame(this.game, ctx, this.x - 100, this.y - 150);
            ////console.log("this.x " + this.x + " this.y " + this.y, +" ");
        }
    } else if (this.standing) {//////////////////////////////////////
        this.idleRight.drawFrame(this.game, ctx, this.x, this.y - 150);
    } else if (this.standingLeft) {
        this.idleLeft.drawFrame(this.game, ctx, this.x, this.y - 150);
    }


    Entity.prototype.draw.call(this);
}
