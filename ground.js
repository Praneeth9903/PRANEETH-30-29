class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,0,100,options);      
      World.add(world, this.ground);
    }

    display(){     
      strokeWeight(10);
      fill("blue");
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  }