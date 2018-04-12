function Bubble(x1, y1, x2, y2) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.lifespan = 842;
	
	this.display = function() {
	  stroke(0);
		fill(0, this.lifespan);
		line(this.x1, this.y1, this.x2, this.y2);
	}
	
	this.isFinished = function() {
	  if (this.lifespan < 0) {
		  return true;
		} else  {
		  return false;
	 }
	}
	
	this.update = function() {
	  this.x1 = this.x1;
	  this.y1 = this.y1;
	  this.x2 = this.x2;
	  this.y2 = this.y2;
		this.lifespan = this.lifespan - 1;
	}
	
}

  function keyPressed()
{
 looping = !looping;
 if(looping)
   noLoop();
 else  {
   loop();}
}
