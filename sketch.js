var thief;
var laser1,laser2,laser3;
var obstacle1,obstacle2,obstacle3;
var police;
var wall1,wall2,wall3,wall4,wall5,wall6;

function preload(){

 obstacle1Img = loadImage("stopSign.png");
 obstacle2Img = loadImage("trafficCone.png");
 obstacle3Img = loadImage("fence.png");

     
}

function setup(){
createCanvas(600,600)

thief = createSprite(0,600,30,30);
laser1 = createSprite(500,300,400,10);
laser1.shapeColor ="red";
laser2 = createSprite(200,100,10,300);
laser2.shapeColor = "red";
laser3 = createSprite(500,10,30,70);
laser3.visible = false;


obstacle1 = createSprite(300,200,10,50);
obstacle1.addImage(obstacle1Img);
obstacle1.scale = 0.15;
obstacle2 = createSprite(405,405,10,100);
obstacle2.addImage(obstacle2Img);
obstacle2.scale = 0.20;
obstacle3 = createSprite(100,105,10,100);
obstacle3.addImage(obstacle3Img);
obstacle3.scale = 0.25;
}

function draw(){
background("yellow");

laser1.velocityX = 3;
laser1.velocityY = 3;

drawSprites();





}