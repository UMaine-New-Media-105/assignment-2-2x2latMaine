function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  //Parameters to just fill the canvas
  drawHeart(200, 197, 1.25);
}

function drawHeart(x, y, size){
   //Cosmetic Code
  fill("pink");
  strokeWeight(10);
  stroke("white");
  
  push();
  translate(x, y);
  scale(size);
  push();
  translate(-200, -200);
  //Shape Code
  beginShape();
  vertex(125, 50);
  vertex(200, 100)
  vertex(275, 50);
  vertex(325, 125);
  vertex(200, 350);
  vertex(75, 125);
  vertex(125, 50);
  endShape();
  pop();
  pop();
}
