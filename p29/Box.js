class Box{
    constructor(x,y){
        var options = {
            restitution: 0.4,
            friction: 0.001
        }
        this.width = 30;
        this.height = 40;
        this.body = Bodies.rectangle(x,y,this.width,this.height, options);
        World.add(world, this.body);
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("orangered");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}