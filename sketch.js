var bullet,bullet2,bullet3,bullet4, wall,wall2,wall3,wall4;
var speed,speed2,speed3,speed4, weight,weight2,weight3,weight4;
var wallLeftEdge,wallLeftEdge2,wallLeftEdge3,wallLeftEdge4, bulletLeftEdge,bulletLeftEdge2,bulletLeftEdge3,bulletLeftEdge4;
var thickness,thickness2,thickness3,thickness4;
var line, line2, line3;
function setup() {
  createCanvas(1500,400);
  speed = random(223,321);
  speed2 = random(223,321);
  speed3 = random(223,321);
  speed4 = random(223,321);
  weight = random(30,52);
  weight2 = random(30,52);
  weight3 = random(30,52);
  weight4 = random(30,52);
  thickness = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22,83);

  bullet=createSprite(50,50,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  bullet2=createSprite(50,150,50,10);
  bullet2.velocityX = speed2;
  bullet2.shapeColor = "yellow";
  bullet3=createSprite(50,250,50,10);
  bullet3.velocityX = speed3;
  bullet3.shapeColor = "purple";
  bullet4=createSprite(50,350,50,10);
  bullet4.velocityX = speed4;
  bullet4.shapeColor = "blue";

  wall=createSprite(1200,50,thickness,80);
  wall.shapeColor = color(80,80,80);
  wall2=createSprite(1200,150,thickness2,80);
  wall2.shapeColor = color(80,80,80);
  wall3=createSprite(1200,250,thickness3,80);
  wall3.shapeColor = color(80,80,80);
  wall4=createSprite(1200,350,thickness4,80);
  wall4.shapeColor = color(80,80,80);
  
   line = createSprite(800,100,1600,10);
   line2 = createSprite(800,200,1600,10);
   line3 = createSprite(800,300,1600,10);
}

function draw() {
  background(0,0,0);  
 if(hasCollided(bullet,wall)){
 bullet.velocityX = 0;
 if((0.5*weight*speed*speed)/(thickness*thickness*thickness) >= 10){
 wall.shapeColor = color(255,0,0);
 }else {
 wall.shapeColor = color(0,255,0);
 }
}
 if(hasCollided(bullet2,wall2)){
  bullet2.velocityX = 0;
  if((0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2) >= 10){
  wall2.shapeColor = color(255,0,0);
  }else {
  wall2.shapeColor = color(0,255,0);
  }
}
  if(hasCollided(bullet3,wall3)){
    bullet3.velocityX = 0;
    if((0.5*weight3*speed3*speed3)/(thickness3*thickness3*thickness3) >= 10){
    wall3.shapeColor = color(255,0,0);
    }else {
    wall3.shapeColor = color(0,255,0);
    }
  }
    if(hasCollided(bullet4,wall4)){
      bullet4.velocityX = 0;
      if((0.5*weight4*speed4*speed4)/(thickness4*thickness4*thickness4) >= 10){
     wall4.shapeColor = color(255,0,0);
      }else {
      wall4.shapeColor = color(0,255,0);
      }
    }
 
 
 drawSprites();
}
function hasCollided(bullet,walL){
  bulletLeftEdge = bullet.x + bullet.width/2;
  wallLeftEdge = wall.x - wall.width/2;
 if(bulletLeftEdge>=wallLeftEdge){
  return true;
 }else {
   return false;
 }
}
