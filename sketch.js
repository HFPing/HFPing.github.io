let Stars=[];
cant=200;
let speed=0;
function setup() {
	createCanvas(700,700); 
	for(let i=0;i<cant;i++){
		Stars[i]=new Star();
	}
}

function draw() {
	speed=map(mouseX,0,width,0,20);
	background(0);
	translate(width/2,height/2);
	for(s of Stars){
		s.update();
		s.show();
	}
		
}

class Star{
	constructor(){
		this.x=random(-width/4,width/4);
		this.y=random(-width/4,height/4);
		this.z=random(width/2);
		this.pz=this.z;
	}
	
	update(){
		this.z=this.z-speed;
		if(this.z<1){
			this.x=random(-width/4,width/4);
			this.y=random(-width/4,height/4);
			this.z=width/2;
			this.pz=this.z;
		}
	}
	
	show(){
		fill(255);
		noStroke();
		let sx=map(this.x/this.z,0,1,0,width/2);
		let sy=map(this.y/this.z,0,1,0,height/2);
		let r=map(this.z,0,width,4,0);
		ellipse(sx,sy,r,r);
		stroke(255);
		let px=map(this.x/this.pz,0,1,0,width/2);
		let py=map(this.y/this.pz,0,1,0,height/2);
		line(px,py,sx,sy);
		this.pz=this.z;
	}
}