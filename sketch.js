let capture
let ready = false;
let detecting = false;
let detections = [];
let cnv;
var varboxx, varboxy, boxwidth, boxheight;
var emotion;
var express, score, age, gender, genderprob
var blocks = [];
var pg;

//loads models for face detection
async function pre() {
  console.log('loading models')
	await faceapi.nets.tinyFaceDetector.loadFromUri('models'),
  await faceapi.nets.faceLandmark68TinyNet.loadFromUri('models'),
//await faceapi.nets.faceLandmark68Net.loadFromUri('models'),
//  await faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//  await faceapi.nets.faceExpressionNet.loadFromUri('/models'),
await faceapi.nets.ageGenderNet.loadFromUri('models')

//	await faceapi.loadSsdMobilenetv1Model(url)
  ready = true
  console.log(faceapi.nets)
  console.log('loaded models')
}

async function updateDetections() {
	//if(detecting) return;
  if(!ready) return;
   if(!capture.elt) return;
  capture.elt.removeAttribute('crossorigin')
  capture.elt.setAttribute('autoplay', '')
  capture.elt.setAttribute('playsinline', '');
 //console.log('updating detections', detecting, ready, capture.elt)
 detecting = true;
//const detections = await faceapi.detectAllFaces(capture.elt, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()
const useTinyModel = true
const detections = await faceapi.detectAllFaces(capture.elt, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(useTinyModel).withAgeAndGender()
//const detections = await faceapi.detectAllFaces(capture.elt, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withAgeAndGender()

//console.log(detections);
 const canvas = document.getElementById('mycanvas')  //id required for p5 canvas
 const displaySize = { width: capture.width, height: capture.height }
// //console.log(canvas)
//faceapi.matchDimensions(mycanvas, displaySize) //CRASHES CANVAS with SAFARI
 const resizedDetections = faceapi.resizeResults(detections, displaySize);
console.log(resizedDetections);
//
// //Face detection for rect
//
for (var i = 0; i < resizedDetections.length; i++) {
//
 varboxx = resizedDetections[i].alignedRect._box._x
varboxy = resizedDetections[i].alignedRect._box._y
//
 boxwidth = resizedDetections[i].alignedRect._box._width
 boxheight = resizedDetections[i].alignedRect._box._height

////Get expressions and sort by prob score - highest first.

//var expression = resizedDetections[i].expressions

// keysSorted = Object.keys(expression).sort((a, b) => expression[b]-expression[a])
// .reduce((obj, key) => ({
//          ...obj,
//          [key]: expression[key]
//        }), {})
// express = Object.keys(keysSorted)[0];
// score = Object.values(keysSorted)[0];

age = resizedDetections[i].age
 gender = resizedDetections[i].gender
 genderprob = resizedDetections[i].genderProbability

 console.log(genderprob)

if (resizedDetections.length> 0){
blocks[i] = new Block(varboxx,varboxy,boxwidth,boxheight,gender,genderprob);
}
 if (resizedDetections.length < blocks.length){
 	blocks.shift();
}
//
}
// //console.log(blocks);

}


// function preload() {
// 	pre();
//
// }


function setup() {
pre();
  cnv = createCanvas(320, 240);
	cnv.id('mycanvas');
  capture = createCapture(VIDEO);

  capture.size(width, height);
  capture.hide();
  pg = createGraphics(width,height);
}

function draw() {
  background(220);
//	if(!ready) text('loading model...', width/2, height/2)
// if(detecting) text('detecting...', width/2, height/2)
//image(capture,0,0);
updateDetections();
  //
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].display();
	}

 //drawDetect();
 //pg.background(0);
 //pg.tint(255,150);
   image(pg,0,0, width,height);
   tint(255,150);
   image(capture,0,0,width,height);

  // fill(0);
  // rect(10,10,40,40);

}

function drawDetect() {
  pg.background(0);
	pg.noFill();
	pg.stroke(255,0,0);
	pg.noFill();
	pg.rect(varboxx,varboxy,boxwidth,boxheight);
	pg.noStroke();
	pg.fill(255,0,0);
	pg.textSize(16);
	pg.text(express, ((varboxx+boxwidth+ 10)- ((varboxx+boxwidth+ 10)/2)), (varboxy+boxheight +10));
	pg.text(int(score*100)+"% confidence", ((varboxx+boxwidth+ 10)- ((varboxx+boxwidth+ 10)/2)), (varboxy+boxheight +30));
	pg.text("age:"+ int(age), ((varboxx+boxwidth+ 10)- ((varboxx+boxwidth+ 10)/2)), (varboxy+boxheight +50));
	pg.text(gender, ((varboxx+boxwidth+ 10)- ((varboxx+boxwidth+ 10)/2)), (varboxy+boxheight +70));

}
