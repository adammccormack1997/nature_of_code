Pixel densitiy is set the 1 to be seen clearly

```js
    function steup(){
      createCanvas(400, 400);
      pixelDensity(1);
    }
```

Here we are using a nested loopand we loop through each y value. Then for each y value we loop through each x value.

We then calculate the index using the formula. 

```js
    function draw(){
      loadPixels();

      for(var y = 0; y < height; y++){
        for (var x = 0; x< width; x++){
          var index = (x+y*width)*4
            pixels[index+0] = 255;
            pixels[index+1] = 0;
            pixels[index+2] = 0;
            pixels[index+3] = 255;
        }
      }

      updatePixels();

    }
```


