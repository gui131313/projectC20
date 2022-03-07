
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,plane,world,block1,block2,block3;
var plane_options={
	isStatic : true
}
var block1_options = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}

var block2_options = {
	restitution:0.1,
	friction:0.01,
	frictionAir:0.0001
}

var block3_options = {
	restitution:0.09,
	friction:1,
	frictionAir:0.00003
}





function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	plane=Bodies.rectangle(400,600,800,2,plane_options);
	World.add(world,plane);

	block1 = Bodies.circle(220,10,80,block2_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,70,40,block1_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,50,50,block3_options);
	World.add(world,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40);
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,800,2);
  ellipse(block1.position.x,block1.position.y,80);
  rect(block2.position.x,block2.position.y,70,40);
  rect(block3.position.x,block3.position.y,50,50);

  drawSprites();

}



