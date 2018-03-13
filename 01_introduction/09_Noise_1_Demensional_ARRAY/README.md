[See the Code in action](code.html)

In this sketch we are creating an object but also creating a number of walkers. We need to create a new variable to hold the walkers and create a for loop. We set the number of walkers to 16.

```js
    function setup() {
      createCanvas(1200, 800);
      noOfWalkers = 16;
      walkers = []

      for(var i = 0; i < noOfWalkers; i++){
        walkers[i] = new Walker();
      }
      background(127);
    }
```

In the walker class we create vectors for x and y so that the walkers can move in either direction. We use the map funciton for the x and y positions in the step function so the walkers vary their movement. 



```js
    function Walker(){

      this.position = createVector(width/2, height/2);
      this.nOff = createVector(random(1000), random(1000));

      this.render = function(){
        noStroke();
        fill(258);
        ellipse(this.position.x, this.position.y, 
        map(noise(this.nOff.x), 0, 1, 20, 200),
        map(noise(this.nOff.x),0,1,20,200))  
      }

      this.step = function(){
        this.position.x = map(noise(this.nOff.x),0,1,0,width + 200);
        this.position.y = map(noise(this.nOff.y),0,1,0,height + 200);
        this.nOff.add(0.005, 0.005);
      }
    }
```

In the drawe function we are using a for loop for the walkers

```js
    function draw(){
      fill(0,15);
      rect(0,0,width,height);

      for(var i = 0; i < noOfWalkers; i++){
        walkers[i].step();
        walkers[i].render();    
      }  

    }
```