var fighter
var zombies
var bullets
var logofwood
var road
var fighterAnimation
var zombiesAnimation
var bulletsAnimation
var logofwoodAnimation
var roadAnimation
var invisibleGround



function preload(){

  fighterAnimation = loadAnimation("Fighter1.png","Fighter2.png","Fighter3.png");
  zombiesAnimation = loadAnimation("Zombie1.png","Zombie2.png","Zombie3.png");
  bulletsAnimation = loadImage("Bullet.png");
  logofwoodAnimation = loadImage("log of wood.png");
  roadAnimation = loadImage("track.png");
}
function setup() {
  createCanvas(600,300);

  road = createSprite(400,100,800,50);
  road.addAnimation("roadAnimation",roadAnimation);
  road.x = road.width /2;

  fighter = createSprite(100,50,50,50)
  fighter.addAnimation("fighterAnimation",fighterAnimation);

  fighter.scale = 0.5;
 fighter.x = 50;

 invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false ;
  
}
function draw() {
  background(220);  
  road.velocityX = -2
  console.log(road.x)

  if (road.x<300){
    road.x = 400;
  }
  
  fighter.velocityY = fighter.velocityY + 0.8
  
 
 
fighter.collide(invisibleGround);
  drawSprites();
}
  
