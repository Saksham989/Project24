
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer1;
var ground;
var stone1;
var rubber1;
var sand1;

function setup() {
	createCanvas(1200, 600);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	hammer1 = new Hammer()
	ground = new Ground(600,500,1200,20)
	stone1 = new Stone(500,300,100,100);
	rubber1 = new Rubber(250, 250,70);
	sand1 = new Sand(500, 480,20)
	sand2 = new Sand(480, 480,20)
	sand3 = new Sand(450, 480,20)
	iron1 = new Iron(550, 470,50);
}


function draw() {
  rectMode(CENTER);
  background(225);
  

  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  iron1.display();
}



