var rainDrop;

function setup() {
  createCanvas(800,400);
   
}

function draw() {
  background(0,25,150);
  for(var b=0;b>200;b=b+1){
    rainDrop=new RainDrop(RandomNumber(10,790),-40,10,50);
    rainDrop.velocityY=2;
    rainDrop.display();
    if(b===199){
      b===0;
    }
  } 
  drawSprites();
}