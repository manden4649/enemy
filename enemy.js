window.addEventListener("load", init);

function init() {
    let stage = new createjs.Stage("myCanvas");

    let enemy = new createjs.Shape();

    enemy.graphics.beginFill("black").drawRect(100,100,10,10);
    stage.addChild(enemy);

// array[Y][X]が現在の位置とする
    for (var Y = 0; Y < 3; Y++){
        for (var X = 0; X < 4; X++){
            
            if(array === ) {
                array[Y][X] = 0;
                array[Y][X-1] = ID;
                
            }
            if(isUp === true){
                array[Y][X] = 0;
                array[Y-1][X] = ID;
                
            }
            if(isRight === true){
                array[Y][X] = 0;
                array[Y-1][X] = ID
                
            }
            if(isDown === true) {array[Y][X] = 0;
                array[Y-1][X] = ID
                                 
            }
        }
    }
    stage.update();
}

