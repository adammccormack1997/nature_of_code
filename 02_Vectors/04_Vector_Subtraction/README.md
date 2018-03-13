# Bouncing Ball with Vectors

This exercise uses 3 vectors. One vector eill calculate mouse coordinates, one will draw center coordinates and the other will subtract the mouse from the center.

```js
function setup() {
  createCanvas(640,360);
}

function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  //fill(127);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```