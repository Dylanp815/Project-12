var Runner, Runner_Running, RunnerImg
var path, pathImg
var IBoundary
var IBoundary2

function preload(){
  Runner_Running = loadAnimation("Runner-1.png", "Runner-2.png");

  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

  Runner = createSprite(200,300, 100,100);
  Runner.addAnimation("running", Runner_Running);
  Runner.scale = 0.1

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


IBoundary = createSprite(400,50, 10,400)
IBoundary.visible = false;

IBoundary2 = createSprite(18,50,10,400)
IBoundary2.visible=false;
}

function draw() {
  background("yellow");

  if(keyDown("right")){
    Runner.velocityX = 3;
  }
  if(keyDown("left")){
    Runner.velocityX=-3
  }

if(path.y > 400 ){
  path.y = height/2;
}

Runner.collide(IBoundary)

Runner.collide(IBoundary2)

path.depth = Runner.depth;
Runner.depth = path.depth+1

drawSprites();
}
