# Vector Normalization

In this example we use the normalize and mult function to make the line become a unit vector.

```js
function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  //vectorLine.mult(0.5);

  vectorLine.normalize();
  vectorLine.mult(50);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```