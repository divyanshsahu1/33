const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies

var bg,ground
var santa,simg,santarunnig,sleftrun,standim,jumpim
//var santawalk,santawalkim
var s=[]
var engine,world
var p=400
var l=350
function preload() {

bg=loadImage("snow1.jpg")
simg=loadAnimation("run/run1.png","run/run2.png","run/run3.png","run/run4.png","run/run5.png","run/run6.png",)
//santawalkim=loadAnimation("walk/walk1.png","walk/walk2.png","walk/walk3.png","walk/walk4.png")
sleftrun=loadAnimation("leftrun/leftrun1.png","leftrun/leftrun2.png","leftrun/leftrun3.png","leftrun/leftrun4.png","leftrun/leftrun5.png","leftrun/leftrun6.png")
standim=loadImage("stand.png")
jump=loadAnimation("jump/jump1.png","jump/jump2.png","jump/jump3.png")
}
function setup() {
  engine= Engine.create()
  world=engine.world
 createCanvas(800,400);
ground=createSprite(400, 350, 850, 20);
ground.visible=false
santa=createSprite(p,l);
santa.addImage("stand",standim)
//santa.visible=false
santa.scale=0.5
santa.addAnimation("left",sleftrun)
santa.addAnimation("right",simg)
santa.addAnimation("fly",jump)



}

function draw() {
  background(bg);  
  Engine.update(engine);
  keyPress()
  santa.velocityY = santa.velocityY + 2;


 santa.collide(ground)
 drawSprites();
 snow=new snows(random(0,800),0)
s.push(snow)
for(var i=0; i<s.length; i++){
s[i].display()
}
  
}
function keyPress(){
  if(keyDown("right"))
  { santa.changeAnimation("right", simg)
   santa.velocityX = 4 } 
  else if(keyDown("left"))

  { santa.changeAnimation("left", sleftrun)
   santa.velocityX = -4 } 
   else if(keyDown("space")&& santa.y  >= 90){
    santa.changeAnimation("fly",jump)
    santa.velocityY = -15;
    
   }
  else
  { santa.changeImage("stand", standim)
   santa.velocityX = 0 }
    }


