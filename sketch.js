var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
 tower = createSprite(300,300);
 tower.addImage(towerImg);
 tower.velocityY = 3;

 fantasma = createSprite(200,200,50,50);
 fantasma.addImage(ghostImg);
 fantasma.scale = 0.5;




}

function draw(){
  background(0);
  if(keyDown("space")){
  fantasma.velocityY = -5;
  }

  fantasma.velocityY = fantasma.velocityY+ 0.8;

  if(tower.y > 400){
    tower.y = 300;
  }
    
  if(keyDown("right")){
    fantasma.velocityX = 5;
  }

  if(keyDown("left")){
    fantasma.velocityX = -5;
  }




puerta();
    drawSprites();
  }
 
  function puerta(){
  if(frameCount % 240 == 0){

door = createSprite(200,-50);
door.addImage(doorImg);
door.velocityY = 3;
door.lifetime = 200;
door.x = Math.round(random(120,400));

climber = createSprite(200,10);
climber.addImage(climberImg);
climber.velocityY = 3;
climber.x = door.x;
}
}
  
  


