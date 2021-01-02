
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	
	ground= new Ground(400,height,800,20);
	box1=createSprite(400,680,200,10);
	box1.shapeColor=color("purple");
	box2=createSprite(500,630,10,100);
	box2.shapeColor=color("purple");
	box3=createSprite(300,630,10,100);
	box3.shapeColor=color("purple");
	ball=new Paper(100,0,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



