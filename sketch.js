let angle=0;

function setup() {
	createCanvas(400,300,WEBGL);
}

function draw() {
	background(175);
	rectMode(CENTER);
	noStroke();
	fill(0,0,255);
	translate(mouseX-width/2,mouseY-height/2);
	rotateX(angle);
	rotateY(angle*0.3);
	rotateZ(angle*0.3);
	//rect(0,0,150,100);
	//box(100,150,50);
	torus(80,10);
	angle+=0.07;
}
