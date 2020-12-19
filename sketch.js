
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground11,paperBall,rect1,rect2,rect3;
function setup() 
{
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground11=new Ground(width/2,680,width,15)
	paperBall=new Paper(65, 670)
	rect1=new Rect(640,640,100,120)
	
	//Create the Bodies Here.
	Engine.run(engine);
  
}
function draw()
{
	background("white");
	ground11.display()
	paperBall.display()
	rect1.display()
	
	drawSprites();
}
function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
    }
}



