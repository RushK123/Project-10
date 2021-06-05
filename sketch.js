var seaImg, shipImg, sea, ship;

function preload(){
  //making animation for ship
  shipImg = loadAnimation("ship-1.png","ship-2.png"); 
  //making image for the sea
  seaImg = loadImage("sea.png");

}

function setup(){
  
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  ship = createSprite(50,199,50,20);
  ship.addAnimation("sp", shipImg);
}

function draw() {
  //set background color
  background("blue");
  
  //sea moves backwards
  sea.velocityX = -2;
  
  //sea reset code
  if(sea.x < 0){ 
    sea.x = (sea.width/8);
  }

  ship.scale = 0.14
  sea.scale = 0.25;
  drawSprites();
}