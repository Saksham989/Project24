class Rubber {
    constructor(x, y, r) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':0.5,
        }
        this.body = Bodies.circle(x,y,r, options);
        this.x=x
        this.y=y
        this.r=r
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rectMode(CENTER);
        fill("yellow")
        ellipse(0, 0, this.r, this.r);
        pop();
      }
  }
  
  