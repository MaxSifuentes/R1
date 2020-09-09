var stablerect, movingrect;



function setup() {
  createCanvas(800,400);
  stablerect = createSprite(200,200,50,80);
  movingrect = createSprite(200,100,80,50);
  stablerect.shapeColor = "red"
  movingrect.shapeColor = "red"


}

function draw() {
  background(255,255,255);  
movingrect.x = World.mouseX
movingrect.y = World.mouseY

if(movingrect.x - stablerect.x < stablerect.width/2 + movingrect.width/2 &&
  stablerect.x - movingrect.x < stablerect.width/2 + movingrect.width/2 &&
  movingrect.x - stablerect.x < stablerect.height/2 + movingrect.height/2 &&
  stablerect.x - movingrect.x < stablerect.height/2 + movingrect.height/2 ) {

  stablerect.shapeColor = "green"
  movingrect.shapeColor = "green"



}
else {


  stablerect.shapeColor = "red"
  movingrect.shapeColor = "red"




}
  drawSprites();



}