var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(100, 200, 50, 70);
  movingRect = createSprite(200, 200, 70, 50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }

  drawSprites();
}