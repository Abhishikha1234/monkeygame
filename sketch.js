
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0
function preload(){
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 }

function setup() {
  createCanvas(600,400);

monkey = createSprite(80,315,20,20);
monkey.addAnimation("running" , monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
bananaGroup = new Group();
obstacleGroup = new Group();
  
}

function draw() {
background("pink");
  
stroke("blue");
textSize(20);
fill("blue");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time = "+ survivalTime, 420,50);  
  
if (ground.x < 450){
ground.x = ground.width/2;
}
  
if(keyDown("space")&&monkey.y>=160){
monkey.velocityY = -12;
}
  
monkey.velocityY = monkey.velocityY + 1
monkey.collide(ground);
  
spawnFruits();
spawnObstacles();
drawSprites();

  
}
function spawnFruits(){
if(frameCount % 80 === 0 ) {
   var banana = createSprite(350,350);
   banana.y = Math.round(random(140,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
   banana.lifetime = 300;
   bananaGroup.add(banana);
   }  
}

function spawnObstacles(){
 if(frameCount % 300 === 0 ) {
   var obstacle= createSprite(400,310);
   //obstacle.y = Math.round(random(350));
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -3;
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);
   }  
}



