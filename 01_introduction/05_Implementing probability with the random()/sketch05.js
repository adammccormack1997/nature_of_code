
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var walker;

function setup() {
    createCanvas(320, 640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}

function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.render = function() {
    stroke(0);
    point(this.x, this.y);
  };
  this.step = function() {
    var choice = floor(random(4));
    var r = random(1);
    //40% still moving to the right
    if(r < 0.4){
      this.x++;
    }else if (r < 0.6){
      this.x--;
    }else if (r < 0.8){
      this.y++;
    }else{
      this.y--;
    }
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, width - 1);
    
  };
}
