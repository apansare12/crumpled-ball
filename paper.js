  class paper {
    constructor(x,y,r)
    {
      var options = { 
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            desity:1.2
      };


      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("paper.png");
      this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
      World.add(world, this.body);
  
    }
    display()
    {
        var paperPos=this.body.position;		
        push();
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop();
        
    }

    flyPaper()
    {
  
       this.body.position.x = this.body.position.x + 18;
       this.body.position.y = this.body.position.y - 20;
    
    }

    
  }
  