class Box{

// Properties: x, y,width,height
constructor(x,y,width,height){

    var options ={
        restitution: 0.9
    }

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);

}

// Object = Properties+functions

//functions

display(){

    rectMode(CENTER);
    fill (255);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);

}

}