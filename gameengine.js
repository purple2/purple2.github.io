// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    
})();


function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
}

Timer.prototype.tick = function () {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
}

function GameEngine() {
    this.entities = [];
    this.showOutlines = false;
    this.ctx = null;
    this.click = null;
    this.mouse = null;
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;

    this.rightArrow = false;
    this.leftArrow = false;
    this.downArrow = false;
    this.upArrowPressed = false;

    //A S D F T KEYS
    this.theTPressed = false;//T key
    this.theAPressed = false;
    this.theSPressed = false;
    this.theDPresed = false;
    this.theFPressed = false;
    this.thePPressed = false;

    this.rightPressed = false;
    this.leftPressed = false;

    //Game States
    this.inStartup = true;
    this.inMenu = false;
    this.inFight = false;
    this.fightOver = false;
    this.gameOver = false;
    this.paused = false;
    this.pauseCycles = 120;
    //Fighters
    //this.Fighters = [new John(this, null), new Alex(this, null), new Vlad(this, null), new Syrym(this, null)];
    //this.selection = null;
    // this.Bar = new Bar();

    //Fighters
    this._NUM_FIGHTERS = 4;
    this.fightersUsed = [];
    this.startMusic = new Music(this,"./sounds/rjones1.mp3", true, .05);
    this.fight = new Music(this, "./sounds/fight.mp3", false, 1);
    this.lost = new Music(this, "./sounds/lost.mp3", false, 1);
    this.charSelectMusic = new Music(this, "./sounds/charSelectSound.wav", true, .05);
    this.moveSeffect = new SoundEffect(this);
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
    this.timebar = new TimeBar(ctx);
    console.log('game initialized');
}

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        if (that.inStartup) {
            that.startMusic.play();	
            that.displayStartup();
        }else if (that.inMenu) {
            that.startMusic.pause();
            that.charSelectMusic.play();
            that.getSelections();
        } else if (that.inFight) {
            that.charSelectMusic.pause();
            //console.log("In gameLoop inFight");
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        } else if(that.gameOver){//------------------------------
            that.displayMessage();
        }//-------------------------------------
    })();
}

function YouLose(game, background) {
    this.active_background = background;
    this.game = game;
    this.ctx = game.ctx;
}

YouLose.prototype.draw = function () {
    this.ctx.drawImage(this.active_background,
                  0, 0,  // source from sheet
                  700, 300,
                  325, 50,
                  700,
                  300);
}

YouLose.prototype.update = function () {
    //do nothing
}

function Message(game, message) {
    this.my_message = message;
    this.game = game;
    this.ctx = game.ctx;
}

Message.prototype.draw = function () {
    this.ctx.fillStyle = '#df1212';
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 3;

    this.ctx.font = 'italic bold 60px sans-serif';
    this.ctx.fillText(this.my_message, 575, 275);
    this.ctx.strokeText(this.my_message, 575, 275);

    this.ctx.fill();
    this.ctx.stroke();
}

Message.prototype.update = function () {
    //do nothing
}

function X(game, background, x, y) {
    this.active_background = background;
    this.startX = x;
    this.startY = y;
    this.game = game;
    this.ctx = game.ctx;
}

X.prototype.draw = function () {
        this.ctx.drawImage(this.active_background,
                      0, 0,  // source from sheet
                      25, 25,
                      this.startX, this.startY,
                      25,
                      25);
}

X.prototype.update = function () {
   //do nothing
}

// ---------------------------------
GameEngine.prototype.displayMessage = function () {
    /*console.log("In Message");
    var that = this;
    
    //var message = "";
    //this.ctx.canvas.addEventListener("click", function (e) {     
    //        that.inStartup = false;
    //        that.inMessage = false;
    //        that.inMenu = true;
    //        that.start();
    //})
    if (this.Fighter.bar.greenwidth <= 0) {
        this.addEntity(new YouLose(this, ASSET_MANAGER.getAsset("./img/youlose.png")));

        (function listenForSelection() {
            console.log("listening for selection");
            if (that.gameOver) {
                that.loop();
                console.log("in listening, called loop");
                requestAnimFrame(listenForSelection, that.ctx.canvas);
            } else {
                return;
            }
        })();
    } else {
        //this.addEntity(new Background(this, ASSET_MANAGER.getAsset("./img/youwin.png")));
        this.addEntity(new YouLose(this, ASSET_MANAGER.getAsset("./img/youwin.png")));
        (function listenForSelection() {
            console.log("listening for selection");
            if (that.gameOver) {
                that.loop();
                console.log("in listening, called loop");
                requestAnimFrame(listenForSelection, that.ctx.canvas);
            } else {
                return;
            }
        })();
    }
    */
    //this.ctx.fillStyle = 'black';
    //this.ctx.font = 'italic bold 60px sans-serif';
    //this.ctx.textBaseline = 'bottom';
    //this.ctx.fillText(message, 380, 200);
    //this.ctx.fillText("Click to Select New Fighter", 150, 400);
    ////this.inMenu = true;
    ////this.start();
}

GameEngine.prototype.displayStartup = function () {
    console.log("In Startup");
   
    var that = this;

    this.ctx.canvas.addEventListener("click", function (e) {
        if (that.inStartup) {
            that.inMenu = true;
            that.inStartup = false;
            console.log('State changed.');
            that.start();
        } else { return; }
    })

    this.ctx.drawImage(ASSET_MANAGER.getAsset("./img/startup.png"), 0,0);
};

GameEngine.prototype.clearEntities = function () {
    var clear_ind = 0;
    while (clear_ind < this.entities.length) {
        this.entities[clear_ind].removeFromWorld = true;
        clear_ind++;
    }
};

GameEngine.prototype.updateWinner = function (character) {
    //A fighters win status has three states:  0:true, 1:false, 2:undetermined.
    if (character.isPlayer) {
        this.opponentWins++;
        this.paused = true;
        this.loser = true;
        this.lost.play();
       
        console.log("Opponents Wins = " + this.opponentWins);
    } else {
        this.playerWins++;
        this.paused = true;
        this.winner = true;
 
        //console.log("Player Wins = " + this.playerWins);
    }
    //console.log("Opponent Rounds Won = " + this.opponentWins + " Player Rounds Won = " + this.playerWins);
}

GameEngine.prototype.updateFight = function () {
    console.log("Updating Fight...");
    if (!this.paused) {
        if (this.playerWins > 1) {
            //console.log("YOU WON THIS MATCH");
            //Get next Opponent
            if (this.fightersUsed.length === this._NUM_FIGHTERS) {
                console.log("YOU ARE THE BADDEST MAN IN T-TOWN!!!");
                this.fightersUsed = [];
                this.inFight = false;
                this.inMenu = true;
            } else {
                //get next opponent
                console.log("Get Next Opponent");
                this.loadNextFight();
            }
        } else if (this.opponentWins > 1) {
            //Return to Character Select Screen for now, maybe a Continue Option.
            console.log("YOU'LL NEVER BE KING OF THESE STREETS FIGHTING LIKE THAT")
            this.fightersUsed = [];
            this.inFight = false;
            this.inMenu = true;

        } else {
            //Repeat the same fight.
            this.resetFighters(this.fightersUsed[0], this.fightersUsed[this.fightersUsed.length - 1]);
            //console.log("Time for round 2");
        }
        //console.log("Done Updating Fight");
    }
};

GameEngine.prototype.loadNextFight = function () {
    console.log("Loading Next Fight...");

    var opponentIndex = 0;

    while (this.fightersUsed.indexOf(opponentIndex) > -1) { opponentIndex = Math.floor(Math.random() * this._NUM_FIGHTERS) };

    this.Opponent = this.getCharacter(opponentIndex, false);
    this.Opponent.loadEnergyBar(new Bar(this, this.Opponent));
    this.fightersUsed.push(opponentIndex);

    this.Fighter = this.getCharacter(this.fightersUsed[0], true);
    this.Fighter.loadEnergyBar(new Bar(this, this.Fighter));

    this.setUpFight();
    this.loadFighters();
    console.log("Done Loading Next Fight");
};

GameEngine.prototype.getCharacter = function (id, isPlayer) {
    console.log("Getting Character...");
    

    var fighter = null;

    switch (id) {
        case 0:
            fighter = new John(this, isPlayer);
            break;
        case 1:
            fighter = new Alex(this, isPlayer);
            break;
        case 2:
            fighter = new Vlad(this, isPlayer);
            break;
        case 3:
            fighter = new Syrym(this, isPlayer);
            break;
    }

    //console.log(id + " selected " + fighter.toString());
    fighter.updateOrientation();

    return fighter;
    console.log("Done Getting Character");
}

//USED BY NEW SELECT OPPONENT 
GameEngine.prototype.loadFighters = function () {
    //console.log("Loading fighters...");

    //Add Components of fight.
    this.clearEntities();
    this.addEntity(new Background(this, ASSET_MANAGER.getAsset(this.Opponent.turf)));
    this.addEntity(this.Fighter);
    this.addEntity(this.Opponent);
    this.addEntity(this.Fighter.bar);
    this.addEntity(this.Opponent.bar);
    this.addEntity(new TimeBar(this));

    //console.log('Finished Loading Fighters');
};


GameEngine.prototype.timeOutWinner = function () {
    this.updateWinner(this.Fighter.bar.greenwidth > this.Opponent.bar.greenwidth ? this.Opponent : this.Fighter);
}

GameEngine.prototype.setUpFight = function () {
    //console.log("Setting Up Fight...");
    this.playerWins = 0;
    this.opponentWins = 0;
    //console.log("Fight Set");
};

GameEngine.prototype.resetFighters = function (selection, opponentIndex) {
    //console.log("Resetting Fighters...");

    this.Fighter = this.getCharacter(selection, true);
    this.Fighter.loadEnergyBar(new Bar(this, this.Fighter));
    this.Opponent = this.getCharacter(opponentIndex, false);
    this.Opponent.loadEnergyBar(new Bar(this, this.Opponent));

    this.fight.play();
    this.loadFighters();
    
    //console.log("Done Resetting Characters");
};

//-------------------------------
GameEngine.prototype.setFighters = function (selection) {
    console.log("Setting Fighters...");
    this.Fighter = this.getCharacter(selection, true);
    this.Fighter.loadEnergyBar(new Bar(this, this.Fighter));

    //START NEW SELECT OPPONENT CODE 
    this.fightersUsed.push(selection);

    //Select opponent
    var opponentIndex = selection;

    //Find an opponent who has not already been used.
    while (this.fightersUsed.indexOf(opponentIndex) > -1) {
        opponentIndex = Math.floor(Math.random() * this._NUM_FIGHTERS);;
    }

    this.Opponent = this.getCharacter(opponentIndex, false);
    this.Opponent.loadEnergyBar(new Bar(this, this.Opponent));

    this.fightersUsed.push(opponentIndex);

    this.setUpFight();
    this.loadFighters();
    this.inMenu = false;
    this.inFight = true;
    
    //console.log('State changed inMenu -> inFight.');
    //console.log("Done Setting Fighters");
    this.start();
    //END NEW SELECT OPPONENT CODE
};


GameEngine.prototype.getSelections = function () {
    console.log('In menu');

    var that = this;

    this.ctx.canvas.addEventListener("click", function (e) {
        if (that.inMenu) {
            //console.log(Math.floor(e.clientX / 337.5));
            that.setFighters(Math.floor(e.clientX / 337.5));
        } else if (that.inMessage) {//-----
            that.inStartup = false;
            that.inMessage = false;
            that.inMenu = true;
            that.start();
        }//-------------------------------
    })
    this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    this.ctx.drawImage(ASSET_MANAGER.getAsset("./img/char_select.png"), 0, 0);
    (function listenForSelection() {
        console.log("listening for selection");
        if (that.inStartup) {
            that.loop();
            console.log("in listening, called loop");
            requestAnimFrame(listenForSelection, that.ctx.canvas);
        } else {
            return;
        }

    })();


};

GameEngine.prototype.startInput = function () {
    console.log('Starting input');
    var that = this;

    this.ctx.canvas.addEventListener("keydown", function (e) {
        if (e.which === 32) {
            that.space = true;
        } else if (e.which === 39) {
            that.rightArrow = true;
        } else if (e.which === 37) {
            that.leftArrow = true;
        } else if (e.which === 65) {//A KEY
            that.theAPressed = true;
        } else if (e.which === 83) {//S key
            that.theSPressed = true;
        } else if (e.which === 84) {//T key
            that.theTPressed = true;
        } else if (e.which === 68) {// D key
            that.theDPressed = true;
        } else if (e.which === 70) {// F key
            that.theFPressed = true;
        } else if (e.which === 80) { // P key
            that.thePPressed = true;
        } else if (e.which === 38) {
            that.upArrowPressed = true;
        } else if (e.which === 40) {
            that.downArrow = true;
        }
            e.preventDefault();

        }, false);
    this.ctx.canvas.addEventListener("keypress", function (e) {
        if (e.which === 39) {
            that.rightPressed = true;
        } else if (e.which === 37) {
            that.leftPressed = true;
        } else if (e.which === 65) {//A KEY
            that.theAPressed = true;
        } else if (e.which === 83) {//S key
            that.theSPressed = true;
        } else if (e.which === 84) {//T key
            that.theTPressed = true;
        } else if (e.which === 68) {// D key
            that.theDPressed = true;
        } else if (e.which === 70) {//F key
            that.theFPressed = true;
        } else if (e.which === 80) { // P key
            //that.thePPressed = true;
        } else if (e.which === 38) {
            that.upArrowPressed = true;
        } else if (e.which === 40) {
            that.downArrow = true;
        }
        e.preventDefault();
    }, false);
    this.ctx.canvas.addEventListener("keyup", function (e) {
        if (e.which === 39) {
            that.rightArrow = false;
        } else if (e.which === 37) {
            that.leftArrow = false;
        } else if (e.which === 32) {
            that.space = false;
        } else if (e.which === 65) {//A KEY
            that.theAPressed = false;
        } else if (e.which === 83) {//S key
            that.theSPressed = false;
        } else if (e.which === 84) {//T key
            that.theTPressed = false;
        } else if (e.which === 68) {// D key
            that.theDPressed = false;
        } else if (e.which === 70) {//F KEY
            that.theFPressed = false;
        } else if (e.which === 80) { // P key
            that.thePPressed = false;
        } else if (e.which === 38) {
            that.upArrowPressed = false;
        } else if (e.which === 40) {
            that.downArrow = false;
        }

    }, false);
    //console.log('Input started');
}

GameEngine.prototype.addEntity = function (entity) {
    //console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
     if (this.opponentWins >=1) {
        this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"),202, 108));
        if (this.opponentWins === 2) {
            this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 227, 108));
        }
    } else if (this.playerWins >= 1) {
        this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 1350 - 202, 108));
        if (this.playerWins === 2) {
            this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 1350-227, 108));
        }
        
    }
    if (this.playerWins >= 1 && this.opponentWins >= 1) {
        this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 1350 - 202, 108));
        this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 202, 108));
        if (this.playerWins === 2) {
            this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 1350 - 227, 108));
        } else if (this.opponentWins === 2) {
            this.addEntity(new X(this, ASSET_MANAGER.getAsset("./img/x.png"), 227, 108));
        }
    }
    if (this.paused) {
        if (this.pauseCycles > 0) {
            this.pauseCycles--;
            if (this.loser === true) {
                this.ctx.drawImage(ASSET_MANAGER.getAsset("./img/youlose.png"),
                           0, 0,  // source from sheet
                           700, 300,
                           325, 50,
                           700, 200);
                if (this.opponentWins === 1 && this.playerWins === 0) {
                    this.addEntity(new Message(this, "Round 1"));
                } else if (this.playerWins === 1 && this.opponentWins === 1 || this.playerWins === 0 && this.opponentWins === 2) {
                    this.addEntity(new Message(this, "Round 2"));
                } else if (this.opponentWins === 2 && this.playerWins === 1) {
                    this.addEntity(new Message(this, "Round 3"));
                }
                this.Fighter.lost = true;
                this.Opponent.win = true;
            } else if (this.winner === true) {
                this.ctx.drawImage(ASSET_MANAGER.getAsset("./img/youwin.png"),
                       0, 0,  // source from sheet
                       700, 300,
                       325, 50,
                       700, 200);
               if (this.playerWins === 1 && this.opponentWins === 0) {
                    this.addEntity(new Message(this, "Round 1"));
                } else if (this.playerWins === 1 && this.opponentWins === 1 || this.playerWins === 2 && this.opponentWins === 0) {
                    this.addEntity(new Message(this, "Round 2"));
                } else if (this.playerWins === 2 && this.opponentWins === 1) {
                    this.addEntity(new Message(this, "Round 3"));
                }
                this.Fighter.won = true;
                this.Opponent.lost = true;
            }
        } else {
            this.pauseCycles = 120;
            this.paused = false;
            this.winner = false;
            this.loser = false;
            this.updateFight();
        }  
    }

    this.ctx.restore();
}

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        if (!entity.removeFromWorld) {
            entity.update();
        }
    }

    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
}

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    if (!this.paused) {
        this.update();
    }
    this.draw();
    
    this.space = null;
}

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {
}

Entity.prototype.draw = function (ctx) {
    if (this.game.showOutlines && this.radius) {
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = "green";
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }
}

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
}
