var garden,rabbit;
var gardenImg,rabbitImg;
var grass1,grass2,grass3,grassimg;
var appleimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassimg = loadImage("grass.png");
  appleimg = loadImage("apple.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
grass1=createSprite(170,290,20,20);
grass1.addImage(grassimg);
grass1.scale=0.1;
grass2=createSprite(380,285,20,20);
grass2.addImage(grassimg);
grass2.scale=0.1;
grass3=createSprite(100,340,20,20);
grass3.addImage(grassimg);
grass3.scale=0.1;

var rand = Math.round(random(50,350));

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

if (keyDown("RIGHT_ARROW")){
  rabbit.x=rabbit.x +10
}

if (keyDown("LEFT_ARROW")){
  rabbit.x=rabbit.x -10
}
apples()
  drawSprites();
}


function apples() {
if(frameCount % 80 === 0){
apple = createSprite(random(50,350),40,10,10);
apple.velocityY=3;
apple.addImage(appleimg);
apple.scale=0.1

}
if(rabbit.isTouching("apple")){
  apple.destroy();
}

}