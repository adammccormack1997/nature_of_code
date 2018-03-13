var position;
var velocity;

function setup() {
  createCanvas(640,360);
  position = createVector(100, 100);
  velocity = createVector(4, 4);
}

function draw() {
  background(51);

  // //add the current speed to position
  // position.x = position.x + velocity.x;
  // position.y = position.y + velocity.y;

  //add the current speed to position
  position.add(velocity);

  if((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  //display circle at xand y position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}
