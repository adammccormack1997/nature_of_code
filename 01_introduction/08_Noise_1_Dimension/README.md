[See the Code in action](code.html)

We set up by declaring a walker object

```js
    function setup() {
          createCanvas(1200, 800);

          walker = new Walker();
          background(127);
        }
    }
```

In the walker class we have two functions. The render function, which displays the ecclipse and our step function, which makes the walker move.  

The ellipse only moves along the x-axis. The walker is moving sideways at a speed of a random number between 0 and 1000. the xOff is set to greater than or equal to 0.005.



```js
      function Walker(){

          this.x = width/2;
          this.xOff = random(1000);

          this.render = function(){
            noStroke();
            fill(258);
            ellipse(this.x, 500, 40, 40)
          }

          this.step = function(){
            this.x = map(noise(this.xOff),0,1,0,width);
            this.xOff += 0.005;
          }
        }
    }
```

In the draw function we set a black background colour and call the two walker function step and render.

```js
    function draw(){
          fill(0,15);
          rect(0,0,width,height);
          walker.step();
          walker.render();
    }   
```
