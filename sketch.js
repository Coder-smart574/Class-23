const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;

var box1, box2;

var canvas;
var  ball;

function setup() {
  canvas=createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(200, 300, 50,50);
  box2=new Box(250,100, 30,100);
  ground=new Ground(200, height, 400, 20);
 
}
function draw() {
  background("blue");
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
  box1.display();
  box2.display();  
  ground.display();
 
}