class DustBin{
        constructor( x, y , width, height){
            var options = {
                'isStatic' : true
            }
            this.bodyb = Bodies.rectangle(x,y, width, height,options);
            World.add(world, this.bodyb);
            this.bodyb = Bodies.rectangle((x-(width/2)), (y-(height*2)) );
            World.add(world, this.bodyl);
            this.bodyb = Bodies.rectangle((x+(width/2)), (y-(height*2)) )
            World.add(world, this.bodyr);
            this.bodyb.width = width
            this.bodyb.height  = height
            
        }
        display(){
            fill("white")
            rect(thos.bodyb.position.x, this.bodyb.position.y, this.bodyb.width)
            rect(thos.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position)
            rect(thos.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position)
        }
}