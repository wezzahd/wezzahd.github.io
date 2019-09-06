function loadingScreen() {

  pg.background(0);

  pg.noFill();

  imageaspectratio(pg);

  buttonx = width/2;
  buttony = (height-(height/6));

  pg.fill(127,160);
  pg.noStroke()
  pg.ellipseMode(CENTER);
  pg.ellipse(buttonx,buttony, 90, 90);


  pg.fill(255);
  pg.noStroke()
  pg.ellipseMode(CENTER);
  pg.ellipse(buttonx,buttony, 65,65);


  if (instruction_toggle == false) {
    if (isMobile == true && width < height){
      pg.image(info, width-40, 50, 30, 30);
        }else{
      pg.image(info, width-40, 30, 30, 30);
}
  }

  if (instruction_toggle == true) {
  instructions();
  }

  image(pg, 0, 0);
}


function instructions () {

  pg.push();
  pg.noStroke();
  pg.fill(255,150);
  pg.rectMode(CENTER);
  pg.rect(width/2,height/2, width, height);


  if (instruction_toggle == true) {

 if (isMobile == true && width < height){
   pg.image(close, width-40, 50, 30, 30);
      }else{
        pg.image(close, width-40, 30, 30, 30);
}
  }

  if (isMobile == false) {
    pg.textSize(14);
  } else {
    pg.textSize(12);
  }


  pg.textFont("Roboto Mono");

  pg.noStroke();
  pg.fill(0, 255);

  pg.textAlign(CENTER, CENTER);

  if (isMobile == false) {
    pg.text('click here for fullscreen', width / 2, (40));
  }

  if (isAndroid == true && width < height) {
    pg.text('click here for fullscreen', width / 2, (60));
  }

  if (isAndroid == true && height < width) {
    pg.text('click here for fullscreen', width / 2, (40));
  }


  if (isMobile == false) {

    pg.textAlign(LEFT, LEFT);

    pg.fill(0);
     pg.textSize(24);
     pg.text('Noise, 2019', 70, height/4 );
     pg.textSize(24);
     pg.text('Wesley Dowling', 70, height/4 + 30);

     pg.textSize(14);

     pg.rectMode(CORNER);
     var s = 'Noise is an online generative work by Wesley Dowling that fragments and transforms photographs into flowing colour.  Machine learning algorithms capture the viewers image as an RGB subpixel array which then sampled to initialize and produce an ever-changing generative colour field.  The work oscillates and occupies a liminal queer space between states of photographic representation and abstraction.  The shifting composition is an outcome of research into the intersections between queerness and Queer Theory, and the new paradigms of computational photography and post-representation.'

     pg.text(s, 70, height/4+70, width- 70, height - 140);

     pg.textSize(14);
     pg.textAlign(LEFT, LEFT);
     pg.text('mouse click to reset', 70, (height -100));


     pg.textAlign(CENTER, CENTER);
     pg.textSize(14);
     pg.text('click button to start', width / 2, (height  - 20));



  } else {


      pg.textAlign(LEFT, LEFT);

      pg.fill(0);
     pg.textSize(18);
     pg.text('Noise, 2019', 20, height/6);
     pg.textSize(18);
     pg.text('Wesley Dowling', 20, height/6 + 20);

     pg.textSize(12);

     pg.rectMode(CORNER);
     var s = 'Noise is an online generative work by Wesley Dowling that fragments and transforms photographs into flowing colour.  Machine learning algorithms capture the viewers image as an RGB subpixel array which then sampled to initialize and produce an ever-changing generative colour field.  The work oscillates and occupies a liminal queer space between states of photographic representation and abstraction.  The shifting composition is an outcome of research into the intersections between queerness and Queer Theory, and the new paradigms of computational photography and post-representation.';

     pg.text(s, 20, height/6+70, width- 20, height - 130);

     pg.textSize(12);
     pg.textAlign(LEFT, LEFT);
     pg.text('tap to reset', 70, (height - 100));


     pg.textAlign(CENTER, CENTER);
     pg.textSize(12);
     pg.text('tap button to start', width / 2, (height  - 20));


  }

pg.pop();

}
