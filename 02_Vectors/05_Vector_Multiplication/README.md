# Vector Multiplication

In this exercise a line is made from the mouse coordinates to the center. It follows the mouse around the canvas.
```js
function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  vectorLine.mult(0.5);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```