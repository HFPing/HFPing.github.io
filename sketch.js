var pointX={
	x:100,
	y:50
};

var col={
	r:255,
	g:0,
	b:0
};

function setup() {
	createCanvas(600,400);
	background(0);
}

function draw() {
	pointX.x=random(0,600);
	pointX.y=random(0,400);
	col.r=random(100,255);
	col.g=0;
	col.b=random(100,190);
	noStroke();
	fill(col.r,col.g,col.b,100);
	ellipse(pointX.x,pointX.y,24,24); 
}
