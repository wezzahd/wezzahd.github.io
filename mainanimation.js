function noiseSetup() {
  updateDetections();
  timeLastFrame = millis();

  cols = int(width / skip);
  rows = int(height / skip);
  //  rows = int((width * capture.height / capture.width) / w);

  capture.size(cols, rows);

  particles = make2Darray(cols, rows);

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {

    particles[y][x] = new Particle(x * skip, y * skip);
    }
  }
}

function noiseDraw() {
  noCursor();
  blendMode(BLEND);
  background(0);
  blendMode(ADD);

//console.log('particle count ' + (cols*rows));
//console.log(capture.width, capture.height);

  //lfo();

  if (counter < countermax) {
    counter = counter + 1;
    lerper = constrain((lerper + 0.01),0,1);
  }

  if (counter == countermax) {
    counter = 0;
  }

if (reset == true) {
  //counter = 0;
  lerper = 0;
  reset = false;
}

//console.log(counter);

var timePassed = (millis() - timeLastFrame) / 1000.0;
  timeLastFrame = millis();

  xMove += xSpeed * timePassed;
  yMove += ySpeed * timePassed;
  zMove += zSpeed * timePassed;

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      particles[y][x].calculateForce();
      particles[y][x].display();
      particles[y][x].behaviours();
      particles[y][x].update();
    }
  }

}

function getColour() {

  capture.loadPixels();
  loadPixels();

if (gender == 'male') {
  genderhue = 240;
}else{
  genderhue = 0;
}
  //console.log(hue);

    for (y = 0; y < rows; y++) {
      for (x = 0; x < cols; x++) {

        let d = pixelDensity();
        index = 4 * ((y * d) * capture.width * d + (x * d));

      particles[y][x].setToColor(capture.pixels[index], capture.pixels[index + 1], capture.pixels[index +2], genderhue);
       }
     }
}

// calculate force from noisefield
function calculateForce(x, y, z) {
  return noise(x * scl + xMove, y * scl + yMove, z + zMove);
}

function lfo () {

if (lfotri < 1) {
  lfotri = lfotri + (frameCount/1000000);
//  console.log(lfotri);
}

if (lfotri >= 1){
  gohome = !gohome;
reset = !reset;
lfotri = 0;
console.log(gohome);
 console.log(reset);
}


}
