const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,connector

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  /* var ground_options={
    isStatic : true
  } */


  //var holder_options={
 //   isStatic: true
 // }

 /* ground = Bodies.rectangle(200,330,400,20,ground_options)
 World.add(world,ground); */

 ground = new Ground();
 holder = new Holder();

 //holder = Bodies.rectangle(200,100,200,20,holder_options);
 //World.add(world,holder);

  // var ball_options = {

  // restitution : 1.0,
 //  density : 1.0

  //}  

 //ball = Bodies.circle(220,200,40,ball_options);
 //World.add(world,ball); 

ball = new Ball(220,200,40);
connector = new Connector({x:200,y:100},ball.body);


/* var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White"); */

}


function draw() {
  background(0); 
  Engine.update(engine);

  //console.log(ball.x, ball.y);

  text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
  text("Press Enter to stop the Pendulum from oscillating",100,50);

  /* fill ("brown");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,200,20);

  /* fill(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); */


  //fill("blue");
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,40);  

 // strokeWeight(8);
 // stroke("white");
  //line(ball.position.x,ball.position.y,holder.position.x,holde */r.position.y) */

  ground.display();
  ball.display();
  holder.display();
  connector.display();


/* if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;
} */
  
/* if(keyCode === 98){
   ball.position.x = (220,180);  
} */ 

/* if(keyCode === 98){
  mouseDragged();
} */

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
  Matter.Body.setStatic(ball.body, false);
}  

function keyPressed(){
  if(keyCode === ENTER){
    Matter.Body.setStatic(ball.body, true);
  }
}





