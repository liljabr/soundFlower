var t = 1;
var b = 1;
var x1, y1, x2, y2, x3, y3, x4, y4;
var NUM_LINES = 1;

var mic, fft, peakDetect;
var looping = false;
var strokeSize = 0.1;
var ellipseWidth = 10;

/*function preload(){
  sound = loadSound('https://www.openprocessing.org/sketch/524719/files/Between_Mountains_-_Into_the_Dark.mp3');
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(40);
	
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9, 512); // (smoothing, range)
  fft.setInput(mic);
	
  peakDetect = new p5.PeakDetect(4000, 5000, 0.2);
}

function draw() {
  stroke(0);
  strokeWeight(strokeSize);
	
	translate(width/2, height/2);
	
	var spectrum = fft.analyze();
	var maxSpectrum = 300;
	peakDetect.update(fft);

	  if ( peakDetect.isDetected ) {
    ellipseWidth = 300;
  } else {
    ellipseWidth *= 0.95;
  }
	  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);

	for (var j = 0; j < spectrum.lenght; i++) {
		var amp = spectrum[j];
		var y = map(amp, 0, 255, height, 0);
	}
	
	for (var l = 0; l < maxSpectrum; l+=1) {
    for (var i = 0; i < NUM_LINES; i++) {

	var size = spectrum[l]*1.6;
	   line(x1, y1, x2, y2);
	//line(x3, y3, x4, y4);
			
	x1 = sin(t/10) * 100;
	y1 = cos(t/10) * 100;
        x2 = sin(size/10) * 10;
        y2 = cos(size/10) * 10;
			
		//x3 = sin(b/10) * size;
	        //y3 = cos(b/10) * size;
        	//x4 = sin(size/10) * 10;
        	//y4 = cos(size/10) * 10;
		
 }
	}
  t += 0.2;
	//b += 0.8;
	}


  function keyPressed()
{
 looping = !looping;
 if(looping)
   noLoop();
 else
   loop();
}
