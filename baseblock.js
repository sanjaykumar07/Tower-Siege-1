class baseblock {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.2,
      friction: 0.75,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
  display() {
    push();
    /*var angle = this.body.angle;
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);*/
    rectMode(CENTER);
    strokeWeight(2)
    rect(this.body.position.x, this.body.position.y, this.width, this.height);

    pop();
  }
}
