class Slingshot{
    constructor(body, anchor){
        var options = {
            bodyA:body,
            pointB:anchor,
            stiffness:0.04,
            length:1
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointB = this.chain.pointB;
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            push();
            stroke(0);
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }
}