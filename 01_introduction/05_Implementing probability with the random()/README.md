# Implementing probability with random walker()

[See the Code in action](code.html)

Here we are using our walker class to create a walker object and implementing the 'step' and 'render' classes in our draw function. 



```js
         this.step = function() {
            var choice = floor(random(4));
            var r = random(1);
            //40% still moving to the right
            if(r < 0.4){
              this.x++;
            }else if (r < 0.6){
              this.x--;
            }else if (r < 0.8){
              this.y++;
            }else{
              this.y--;
            }
            this.x = constrain(this.x, 0, width - 1);
            this.y = constrain(this.y, 0, width - 1);
```



From the function you can see that the chance of the walker to mov right is 40%. the random number 'r' can float between 0 - 1. This means it will be more likely to move right as opposed to other directions.