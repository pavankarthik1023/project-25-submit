
var paper,ground;
var border2,border2,border3;
var paperImg,bucketImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	

	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ground = new Ground(350,400,900,200);
		paper =  new Paper(225,150,40);
		border1 = new Bucket(525,250,40,100);
		border2 = new Bucket(625,250,40,100);
		border3 = new Bucket(575,320,125,40);
		
		
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(55,68,190);

  Engine.update(engine);
  //console.log(paper.body.x)

	paper.depth=paper.depth-1 ;
	border1.depth=paper.depth;
  drawSprites();
  ground.display();
  paper.display(); 

  border1.display();
  border2.display();
  border3.display();
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
  
	}
}



