var monkey, monkeyRunning;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime = 0;
var score = 0;
var bananaGroup,obstaclesGroup;
var gameState=1;
function preload() {


  monkeyRunning = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}
function setup() {
 // createCanvas(600, 400)
  // monkey sprite
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkeyRunning)
  monkey.scale = 0.1
  //ground sprite
  ground = createSprite(300, 355, 800, 20);
  ground.velocityX = -5;
  ground.x = ground.width / 2;
  bananaGroup= new Group();
  obstaclesGroup= new Group();
}
function draw() {
  background("white");
  // reseting ground
  if(gameState===1){
   if (ground.x < 0) {
    ground.x = ground.width / 2;
  } 
     if (keyDown("space") && monkey.y > 200) {
    monkey.velocityY = -10
  }
  // gravity
  monkey.velocityY = monkey.velocityY + 0.4;
survivalTime = Math.ceil(frameCount / frameRate());
  spawnObstacles();
  spawnBanana();
  if(obstaclesGroup.isTouching(monkey)){
    obstaclesGroup.setVelocityXEach(0);
     obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setVelocityXEach(0);
  bananaGroup.setLifetimeEach(-1);
    ground.velocityX=0;
 gameState=0;
  }
  }
  
  
  
  
  
  
  monkey.collide(ground);
  // Displaying score 
  stroke("white");
  textSize(20);
  fill("black")
  text("Score = " + score,300, 30);
  // Displaying survival time
  textSize(20);
  fill("black");
  
  text("Survival Time = " + survivalTime, 100, 30)


  
  drawSprites();

}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(600, 305, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2
    obstacle.velocityX = -10;
  obstacle.lifetime = 60;
    obstaclesGroup.add(obstacle);
  }
}

function spawnBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 200, 10, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.10
    banana.velocityX = -10
    banana.lifetime = 60;
    bananaGroup.add(banana);
  }
}

                       