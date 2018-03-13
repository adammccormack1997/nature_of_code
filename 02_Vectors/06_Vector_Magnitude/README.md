# Vector Magnitude

In this exercise the magnitude is calculated using the .mag function. The magnitude is the line length.

```js
function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  
  var m = vectorLine.mag();
  fill(255);
  stroke(0);
  rect(0, 0, m, 10);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```