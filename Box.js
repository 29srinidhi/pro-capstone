class Box {
    constructor(x, y, width, height) {
      var options = { 
        restitution:1.0,
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var position = this.body.position;
      var angle = this. body. angle;
      push();
      translate(position.x,position.y);
      rotate(angle);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("white")
      fill ("cyan")
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  