window.addEventListener("load", init);

function init() {
    let stage = new createjs.Stage("myCanvas");

    let enemy = new createjs.Shape();

    enemy.graphics.beginFill("black").drawRect(100,100,10,10);
    stage.addChild(enemy);

// array[Y][X]が現在の位置とする

    if(isLeft === true) {
        player.x -= 3;
        // array[Y][X] = 0;
        // array[Y][X-1] = ID;
    }
    if(isUp === true){
        player.y -= 3;
        // array[Y][X] = 0;
        // array[Y-1][X] = ID;
    }
    if(isRight === true){
        player.x += 3;
    }
    if(isDown === true) {
        player.y += 3;
    }


    stage.update();
}

