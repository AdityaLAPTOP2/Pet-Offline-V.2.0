var dog
var game=1
var car
var boneImg
var full
var empty
var feed 
var happy
var count = 26
var happiness = 100
function preload(){
  happy=loadImage("images/Happy.png")
  boneImg = loadImage("images/Bone.png");
   car=loadImage("images/dogs.png");
 //  milks = loadImage("images/milk.jpg")

}


function setup() {
feed = createSprite(100,100);
  createCanvas(800,400);
 dog = createSprite(700,270)
 dog.addImage(car)
 dog.scale = 0.3
 feed.addImage(boneImg)
 feed.scale=0.1


}

function draw() {
  background(255,255,255);  
  drawSprites();
  /*if(keyCode===87&&count>0){
    feed = createSprite(100,100);
    feed.addImage(boneImg)
    feed.scale=0.1

  }*/
if(game===1&&keyCode===32&&count>0){
  feed.x=World.mouseX
  feed.y=World.mouseY

}
if(feed.isTouching(dog)){
game=2
happiness=happiness+Math.round(random(1,7))
  feed.destroy();
  dog.addImage(happy);
 
}
if(keyCode===87&&game===2&&count>0){
   
  count=count-1
  game=1
  feed = createSprite(100,100);
  feed.addImage(boneImg)
  feed.scale=0.1
}

if(World.frameCount%1800===0){
  count=count+Math.round(random(0,4))
}
if(World.frameCount%180===0){
  happiness=happiness-Math.round(random(0,3))
}
if(happiness===0||happiness<1){
  game=5
}
if(game===5){
  text("Game over . You didnot feed dog",400,200)

}









  
  text("Food Left :"+count,100,50)
  text("Dog happiness :"+happiness,200,50)

}