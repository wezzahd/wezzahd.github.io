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
  pg.noFill();
  pg.stroke(255)
  pg.rectMode(CENTER);
  pg.rect(40,40, 30,30);
  }else{
     pg.noStroke();
  pg.fill(255)
  pg.rectMode(CENTER);
  pg.rect(40,40, 30,30);
  }



  if (instruction_toggle == true) {
  instructions();
  }

  image(pg, 0, 0);


}


function instructions () {

  for (var m = (width/2 - 95-skip); m < (width/2 + 95); m += skip) {
        for (var n = (height/2 - 95-skip); n < (height/2 + 95); n += skip) {


    pg.fill(255,0,0,40);
    pg.strokeWeight(.5);
  pg.stroke(0);
 pg.rectMode(CENTER);
  pg.rect(m + (skip/3) ,n, skip/3, skip);

  pg.fill(0,255,0,40);
  pg.strokeWeight(.5);
pg.stroke(0);
pg.rectMode(CENTER);
  pg.rect(m + (skip/3*2) ,n, skip/3, skip);

  pg.fill(0,0,255,40);
  pg.strokeWeight(.5);
  pg.stroke(0);
  pg.rectMode(CENTER);
  pg.rect(m + (skip/3*3) ,n, skip/3, skip);


       }
     }


  pg.noStroke();
  pg.fill(80,127);
  pg.rectMode(CENTER);
  //pg.rect(width/2,height/2, 200, 200);





 pg.noStroke();
  pg.fill(255, 150);
  pg.textAlign(CENTER, CENTER);

  if (isMobile == false) {
    pg.textSize(14);
  } else {
    pg.textSize(14);
  }


 pg.textFont("Roboto Mono");

  pg.noStroke();
  pg.fill(255, 255);

  pg.textAlign(CENTER, CENTER);

  if (isMobile == false) {
    pg.text('click here for fullscreen', width / 2, (40));
  }

  if (isAndroid == true && width < height) {
    pg.text('click here for fullscreen', width / 2, (40));
  }

  if (isAndroid == true && height < width) {
    pg.text('click here for fullscreen', width / 2, (40));
  }


  pg.textAlign(CENTER, CENTER);






  if (isMobile == false) {

     pg.textSize(20);
     pg.text('n o i s e', width / 2, height/2 - 50);
     pg.textSize(14);
     pg.text('Wesley Dowling', width / 2, height/2 - 20 );



    pg.text('click button to start', width / 2, (height  - 20));

    pg.text('mouse click to reset', width / 2, (height/2 + 70));

  } else {

    pg.textSize(20);
    pg.text('n o i s e', width / 2, height/2 - 50);
    pg.textSize(14);
    pg.text('Wesley Dowling', width / 2, height/2 - 20 );

    pg.text('tap button to start', width / 2, (height  - 20));

    pg.text('touch to reset', width / 2, (height/2 + 70));



  }

}
