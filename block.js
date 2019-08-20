function Block(x, y, w, h, g, gp) {
    this.x = x;
    this.y = w;
    this.width = w;
    this.height = h;
    //this.express = e;
    //this.score = s;
    //this.age = a;
    this.gender = g;
    this.genderprob =gp;
    this.color = color(255,0,0);





    this.display = function() {
pg.background(0);
      pg.noFill();
      pg.stroke(this.color);
      pg.noFill();
      pg.rect(this.x,this.y,this.width,this.height);
      pg.noStroke();
      pg.fill(this.color);
      pg.textSize(16);
      //text(this.express, ((this.x+this.width+ 10)- ((this.x+this.width+ 10)/2)), (this.y+this.height +10));
      //text(int(this.score*100)+"% confidence", ((this.x+this.width+ 10)- ((this.x+this.width+ 10)/2)), (this.y+this.height +30));
      //text("age:"+ int(this.genderprob),((this.x+this.width+ 10)- ((this.x+this.width+ 10)/2)), (this.y+this.height +10));
      pg.text(this.gender, ((this.x+this.width+ 10)- ((this.x+this.width+ 10)/2)), (this.y+this.height +10));
  pg.text(this.genderprob, ((this.x+this.width+ 10)- ((this.x+this.width+ 10)/2)), (this.y+this.height +30));
    }
  }
