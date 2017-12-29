// background, stroke, fill

function setup() {
	createCanvas(600,400);
	background(250,250,100);
}
// Comentario
function draw() {
	//background(250,250,100);
	noStroke();
	fill(250,200,200,50);
	ellipse(mouseX,mouseY,25,25); // Coordenadas del mouse
}

function mousePressed(){
	background(250,250,100);
}