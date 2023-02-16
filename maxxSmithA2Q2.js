function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  
  //Cosmetic Code
  fill("pink");
  strokeWeight(10);
  stroke("white");
  
  //Shape Code
  translate(0, -50)
  beginShape();
  vertex(125, 100);
  vertex(200, 150)
  vertex(275, 100);
  vertex(325, 175);
  vertex(200, 400);
  vertex(75, 175);
  vertex(125, 100);
  endShape();
}
