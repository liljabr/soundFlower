function Bubble(x1, y1, x2, y2) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.lifespan = 255;
	
	this.display = function() {
	  stroke(0, this.lifespan);
		fill(0);
		//ellipse(this.x1, this.y1, 48, 48);
		line(this.x1, this.y1, 1, 1);
	}
	
	this.isFinished = function() {
	  if (this.lifespan < 0) {
		  return true;
		} else  {
		  return false;
	 }
	}
	
	this.update = function() {
		//this.x1 = this.x1;
		//this.y1 = this.y1;
	  this.x1 = this.x1;
	  this.y1 = this.y1;
	  this.x2 = this.x2;
	  this.y2 = this.y2;
		this.lifespan = this.lifespan - 1;
	}
	x1 = sin(t/20) * 100;
	y1 = cos(t/20) * 100;
  x2 = sin(t/10) * 10;
  y2 = cos(t/10) * 10;	
	
t += 0.4;
}
