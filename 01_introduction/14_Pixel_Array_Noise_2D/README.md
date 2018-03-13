Pixel densitiy is set the 1 to be seen clearly. the variable yoff is a random moment in time

```js
var yoff = 1000.0;

function setup(){
      frameRate(1);
      createCanvas(1000, 800);
      pixelDensity(1);
      noiseDetail(10);
    }
```

Here we are using a nested loopand we loop through each y value. Then for each y value we loop through each x value.

We then calculate the index using the formula. 

the bright variable is our random moment in time for x and y to values between 0 and 255.

```js
    function draw(){
      loadPixels();

      for(var y = 0; y < height; y++){
        var xoff = 100.0;
        for (var x = 0; x< width; x++){
          var index = (x+y*width)*4
          var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[index+0] = bright;
            pixels[index+1] = bright;
            pixels[index+2] = bright;
            pixels[index+3] = 255;

            xoff += 0.002;
        }
        yoff += 0.002;
      }
      updatePixels();

    }
```

