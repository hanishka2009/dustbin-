const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,d2,d3,Paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.World;
Paper=new paper(200,500,50,50)
	

	//Create the Bodies Here.
	dustbin1=new Dustbin(500,670,200,20)


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Paper.display();
  dustbin1.display();
  drawSprites();
 
}



