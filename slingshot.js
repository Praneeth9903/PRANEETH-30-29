class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 15
        }        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
attach(body){
    this.sling.bodyA=body;
}
    fly(){
        this.sling.bodyA = null;
    }

    display(){        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("yellow");
            //fill(255,250,250);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
