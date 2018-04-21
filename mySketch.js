var bubbles = [];
var t = 1;
var x1, y1, x2, y2;
var looping = false;
var mic, fft, peakDetect;
var peakTop = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
	
	//mic og FFT setup
	mic = new p5.AudioIn();
  fft = new p5.FFT(0.9, 512); // (smoothing, range)
  fft.setInput(mic);
	//peakDetect = new p5.PeakDetect(20, 2000, .5, 5);
	
	mic.start();
}

function draw() {
  background(0);

	fill(255);
	rect(120, 0, 2000, height);
	translate(width / 2, height / 2);
	
	// analize fft
	var spectrum = fft.analyze();
	var maxSpectrum = 50;
	
	fft.analyze();
	//peakDetect.update(fft);
	
		/*if ( peakDetect.isDetected ) {
    peakTop = 300;
  } else {
    peakTop *= 0.9;
  }*/
	
	for (i = 0; i < maxSpectrum; i++) {
	var size = spectrum[i]*2.6; }
	
	//teikna hringinn
	var b = new Bubble(x1, y1, x2, y2);
	bubbles.push(b);
	
	x1 = sin(t/20) * size;
	y1 = cos(t/20) * size;
  x2 = sin(size/100) * 4;
  y2 = cos(size/100) * 4;
	
	t += 0.3;
		
	//fade out
	for (var i = bubbles.length - 1; i >= 0; i--)  {
	  bubbles[i].update();
		bubbles[i].display();
		if (bubbles[i].isFinished())  {
		  bubbles.splice(i, 1);
	}
 }
}
