class Polygon{
    constructor(x,y,r){
        var options = {
            restitution : 1.0
        }
        this.body = Bodies.circle(x,y,r/1.5, options);
        this.radius = r;
        World.add(world, this.body);
        this.image = loadImage("hexagon.png");
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, this.radius*2, this.radius*2);
        pop();
    }
}