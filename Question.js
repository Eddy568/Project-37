class Question {
    constructor(x, y, width, height, Question) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':20
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }

      /*hide()
      
    }
*/
/*
      display(){
        //this.title.html("")
      }