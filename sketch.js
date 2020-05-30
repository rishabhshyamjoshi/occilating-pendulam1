
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

var angle = 0;
var anglespeed = 0.5;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,10,ground_options)
  World.add(world,ground);

  holder = Bodies.rectangle(200,100,400,10,holder_options);
  World.add(world,holder);

  var ball_options = {
    restitution : 1.0,
    density : 1.0
}

  ball  = Bodies.rectangle(220,200,40,40,ball_options);
  World.add(world,ball);


  var options = {
    bodyA : ball,
    bodyB : holder,
    stiffness: 0.004,
    length : 100
}
  var string = Constraint.create(options);
  World.add(world,string);

}


function draw() {
  background(255,255,255); 
  Engine.update(engine);


  text("Press space bar to oscillate the pendulam to left and right with the mouse",10,20);
  text("Press Enter to stop the Pendulum",10,50);

  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,400,10);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill(0);
 // angleMode(DEGREES);
  ////rotate(angle);
  //angle = 5;
  rect(ball.position.x,ball.position.y,40,40);
  
  
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);

//if(World.frameCount%10===0){
 // angle = angle+5;
//}



  if(keyDown("space")){
    console.log("space key is pressed");
    ball.position.y = mouseY;
    ball.position.x = mouseX;
}

  else if (keyDown("enter")){
    ball.position.x = 200;

}

}







