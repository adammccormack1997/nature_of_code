#Moving an Ellipse 

We need to establish our x and y coordinates that the ellipse will be using. We need to create two variables to store these values. We set the speen then in the setup we create our canvas.

```js
var x = 320;
var y = 180;
var xspeed = 2;

function setup() {
  createCanvas(640,360); 
}

```



We want our background to refresh each frame. We add speed to the x position moving it by 2px per frame. If the x is less than 0 we multiply the speed by -1 to change the direction.

```js
function draw() {
  background(51);

  //add the current speed to position
  x = x + xspeed;

  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  //display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, 180, 48, 48);
}

```