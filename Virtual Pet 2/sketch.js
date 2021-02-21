//constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//<Variables>
var rabbit,rabbitImg,rabbitAnim,backGround,backGroundImg;
var ball,ballImg,mouseSprite,mouseSpriteImg;
var engine,world;


//</Variables>

function preload()
{
rabbitImg = loadImage("images/Hare-a.png");
backGroundImg = loadImage("images/dood.jpg");
ballImg = loadImage("images/ball.png");
rabbitAnim = loadAnimation("hare-b.png","hare-c.png")
}

function setup() {
createCanvas(600, 400);
engine = Engine.create();
world = Engine.world;
}


function draw() {  
background("lightBlue");

//<background>
backGround = createSprite(300,200,1000,800);
backGround.addImage(backGroundImg);
//</background>



//<rabbit>
rabbit = createSprite(270,300);
rabbit.addImage(rabbitImg);
rabbit.scale = 0.6;
//</rabbit>

//<ball>
ball = createSprite(150,340)
ball.addImage(ballImg)
ball.scale = 0.5;
//</ball>

//ball
if(keyDown("b")){
ball.x = mouseX;
ball.y = mouseY;
rabbit.x = ball.x;
}

//ground
var ground = new Ground();

drawSprites();	
}

