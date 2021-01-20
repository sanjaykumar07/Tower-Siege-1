class blocktriangle{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width+20, height+20, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("triangle.png");
    World.add(world, this.body);
  }

  display()
  {
    var angle = this.body.angle;
    push ();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle)

    imageMode(CENTER);
    image(this.image, 0, 0, this.width+20, this.height+20);
    

    pop ();
  }
}
