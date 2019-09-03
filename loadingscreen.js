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
    if (isMobile == true && width < height){
      pg.rect(40,60, 30,30);
      }else{
        pg.rect(40,40, 30,30);
}

  }else{
     pg.noStroke();
  pg.fill(255)
  pg.rectMode(CENTER);
  if (isMobile == true && width < height){
    pg.rect(40,60, 30,30);
    }else{
    pg.rect(40,40, 30,30);
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
     pg.textSize(30);
     pg.text('Noise, 2019', 70, 100);
     pg.textSize(30);
     pg.text('Wesley Dowling', 70, 130);

     pg.textSize(18);

     pg.rectMode(CORNER);
     var s = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Erat pellentesque adipiscing commodo elit at. Tristique senectus et netus et malesuada fames ac. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Aliquam malesuada bibendum arcu vitae elementum. Odio ut sem nulla pharetra. Lorem dolor sed viverra ipsum nunc. Amet risus nullam eget felis eget nunc lobortis. Ornare massa eget egestas purus viverra accumsan in nisl. Proin nibh nisl condimentum id. Erat nam at lectus urna. Praesent tristique magna sit amet purus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Diam vel quam elementum pulvinar. Imperdiet massa tincidunt nunc pulvinar sapien et. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Accumsan tortor posuere ac ut consequat semper. Pellentesque eu tincidunt tortor aliquam nulla facilisi.'

     pg.text(s, 70, 190, width- 70, height - 140);

     pg.textSize(18);
     pg.textAlign(LEFT, LEFT);
     pg.text('mouse click to reset', 70, (height -100));


     pg.textAlign(CENTER, CENTER);
     pg.textSize(14);
     pg.text('click button to start', width / 2, (height  - 20));








  } else {


      pg.textAlign(LEFT, LEFT);

      pg.fill(0);
     pg.textSize(18);
     pg.text('Noise, 2019', 60, 100);
     pg.textSize(18);
     pg.text('Wesley Dowling', 60, 130);

     pg.textSize(12);

     pg.rectMode(CORNER);
     var s = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Erat pellentesque adipiscing commodo elit at. Tristique senectus et netus et malesuada fames ac. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Aliquam malesuada bibendum arcu vitae elementum. Odio ut sem nulla pharetra. Lorem dolor sed viverra ipsum nunc. Amet risus nullam eget felis eget nunc lobortis. Ornare massa eget egestas purus viverra accumsan in nisl. Proin nibh nisl condimentum id. Erat nam at lectus urna. Praesent tristique magna sit amet purus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Diam vel quam elementum pulvinar. Imperdiet massa tincidunt nunc pulvinar sapien et. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Accumsan tortor posuere ac ut consequat semper. Pellentesque eu tincidunt tortor aliquam nulla facilisi.'

     pg.text(s, 60, 190, width- 70, height - 100);

     pg.textSize(12);
     pg.textAlign(LEFT, LEFT);
     pg.text('mouse click to reset', 70, (height - 100));


     pg.textAlign(CENTER, CENTER);
     pg.textSize(12);
     pg.text('click button to start', width / 2, (height  - 20));




  //
  //   for (var m = (width/2 - 45-skip); m < (width/2 + 45); m += skip) {
  //         for (var n = (height/2 - 45-skip); n < (height/2 + 45); n += skip) {
  //
  //
  //     pg.fill(255,0,0,40);
  //     pg.strokeWeight(.5);
  //   pg.stroke(0,80);
  //  pg.rectMode(CENTER);
  //   pg.rect(m + (skip/3) ,n, skip/3, skip);
  //
  //   pg.fill(0,255,0,40);
  //   pg.strokeWeight(.5);
  // pg.stroke(0,80);
  // pg.rectMode(CENTER);
  //   pg.rect(m + (skip/3*2) ,n, skip/3, skip);
  //
  //   pg.fill(0,0,255,40);
  //   pg.strokeWeight(.5);
  //   pg.stroke(0,80);
  //   pg.rectMode(CENTER);
  //   pg.rect(m + (skip/3*3) ,n, skip/3, skip);
  //
  //
  //        }
  //      }
  //
  //      pg.noStroke();
  //       pg.fill(255, 150);
  //       pg.textAlign(CENTER, CENTER);
  //
  //   pg.textSize(20);
  //   pg.text('n o i s e', width / 2, height/2 - 50);
  //   pg.textSize(12);
  //   pg.text('wesley dowling', width / 2, height/2 - 20 );
  //
  //   pg.text('tap button to start', width / 2, (height  - 20));
  //
  //   pg.text('touch to reset', width / 2, (height/2 + 20));



  }

pg.pop();

}
