var bubbles = [];
var t = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
	
function mousePressed() {
	var b = new Bubble(mouseX, mouseY);
	bubbles.push(b);
}
	
function draw() {
  background(255);
			translate(width / 2, height / 2);
	for (var i = bubbles.length - 1; i >= 0; i--)  {
	  bubbles[i].update();
		bubbles[i].display();
		if (bubbles[i].isFinished())  {
		  bubbles.splice(i, 1);
	}
 }
}
