var fixedRect;
var movingRect;

function setup() {
  createCanvas(500,400);
  
  fixedRect = createSprite(400, 200, 40, 70);
  fixedRect.shapeColor = "Yellow";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 60, 40);
  movingRect .shapeColor = "Yellow";
  movingRect .debug = true;

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;


}

function draw() {
  background(0);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if (isTouching(movingRect,fixedRect)){
 
    movingRect.shapeColor = "Pink";
    fixedRect.shapeColor = "Pink";
  }

  else {

    fixedRect.shapeColor = "Yellow";
    movingRect.shapeColor = "Yellow";
  }

  bounceOff (movingRect,fixedRect);

  drawSprites();
}
