# Normal/Gaussian random distribution

[See the Code in action](code.html)

We need a random gaussian number. The number will have a mean of 0 and standard deviation of 1.


```js
        function draw(){
          var xloc = randomGaussian();
          console.log(xloc);
    }
```

We set our standard deviation to 60 and our mean to width/2 (Center of canvas on x-axis). Then we scale the random gaussian number by by our standard deviation and mean.

We set our mean to a width of 1/2 to put it in the center of the canvas and then set the standard deviation to 60. We then scale the gaussian number by the mean and standard deviation

We then draw the ellipse and the centre and declare a size.



```js
          var sd = 120;
          var mean = width / 2;
          xloc = (xloc * sd) + mean;

          fill(0,10);
          noStroke();
          ellipse(xloc, height / 2, 16, 16);
    }
```

