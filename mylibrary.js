function hasCollided(bullet,walL){
  bulletLeftEdge = bullet.x + bullet.width/2;
  wallLeftEdge = wall.x - wall.width/2;
 if(bulletLeftEdge>=wallLeftEdge){
  return true;
 }else {
   return false;
 }
}
