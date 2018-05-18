let angle=0;
let modelo;
let fov;
let cameraZ;
let imagen;

function preload(){
	imagen=loadImage('piso.jpg');
	//modelo=loadModel('train-corrected.obj');
	modelo=loadModel('MikuFigure/MikuFigure.obj');
}

function setup() {
	createCanvas(400,300,WEBGL);
	fov=PI/3;
	cameraZ=(height/2.0)/tan(fov/2.0);
}

function draw() {
	background(0);
	let camZ=map(mouseX,0,width,-513,-500);
	ambientLight(255,0,255);
	directionalLight(255,255,255,0,0,1);
	camera(0,0,camZ+(height/2)/tan(PI/6),0,0,0,0,1,0);
	perspective(fov,width/height,0.01,2000);
	rotateX(angle);
	rotateY(angle*1.3);
	rotateZ(angle*0.7);
	// box(100);
	// specularMaterial(255);
	// normalMaterial();
	texture(imagen);
	model(modelo);
	angle+=0.01;
}
