var gameState=0;




function preload(){
    Parents = loadImage("Animations/FightingParents.jpeg")
    Child = loadImage("Animations/FrighttenChild.jpg")
    House = loadImage("Animations/HouseRoom.jpg")
    Office = loadImage("Animations/OfficeWorker.jpg")
    Stars = loadImage("Animations/WatchingStars.webp")
    
}
function setup(){
 createCanvas(displayWidth-150,displayHeight-150)  
 kitchen = createSprite(500,250,50,50);
 kitchen.addImage(House); 
 kitchen.scale = 0.5
 office = createSprite(900,250,50,50);
 office.addImage(Office);
 office.scale = 0.5
}
function draw(){
   if(gameState===0){
      background(Parents);
   }
   if(gameState===1){
       background(Child);
   }
   if(gameState===2){
       background(Stars)
   }
   if(keyDown("space")){
       gameState=1
   } 
   if(keyDown("LEFT_ARROW")){
       gameState=2
   }
   if(keyDown("RIGHT_ARROW")){
       gameState=3
   } 
   if(gameState===3){
       background("blue")
       drawSprites();
   }
   if(mousePressedOver(kitchen)){
       background("yellow");
       gameState=4;    
   }
   if(gameState===4){
       textSize(25);
       fill("red")
       text("please answer the following Home Science questions",500,100);
   }
   if(mousePressedOver(office)){
       background("pink");
       gameState=5;
   }
   if(gameState===5){
       textSize(25);
       fill("blue")
       text("please answer the following office questions",500,100);
   }
}
