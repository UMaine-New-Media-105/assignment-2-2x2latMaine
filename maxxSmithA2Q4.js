//Maxx Keoni Smith ... MKS ... Madagascar Kiribati Sweeden

//Advanced option setup

canvasWidth = 600;
canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);

  //Madagascar Flag
  drawMadagascar();

  //Kiribati Waves
  drawKiribati(0);
  drawKiribati(1);
  drawKiribati(2);
  drawKiribati(3);
  drawKiribati(4);
  drawKiribati(5);
  drawKiribati(6);
  drawKiribati(7);
  
  //Sweeden Strip
  drawSweeden();
  
}

function drawMadagascar() {
  push();
  
  noStroke();
  
  //Top-right red
  fill(251, 0, 6);
  rect(0, 0, canvasWidth, canvasHeight / 2);
  
  //Bottom-right green
  fill(18, 140, 0);
  rect(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);
  
  //Left white
  fill(255);
  rect(0, 0, canvasWidth / 3, canvasHeight);
  
  pop();
}

function drawSweeden() {
  push();
  
  noStroke();
  rectMode(CENTER);
  
  //Blue vertical stripe
  fill(10, 86, 153);
  rect(canvasWidth / 3, canvasHeight / 2, canvasWidth / 5.5, canvasHeight);
  
  //Blue horizontal stripe
  rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasWidth / 5.5);
  
  //Yellow vertical stripe
  fill(253, 197, 10);
  rect(canvasWidth / 3, canvasHeight / 2, canvasWidth / 8, canvasHeight);
  
  //Yellow horizontal stripe
  rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasWidth / 8);
  pop();
}

function drawKiribati(waveNum) {
  
  //Variable for spacing
  let verticalSpacing = canvasHeight / 8;
  let horizontalSpacing = canvasWidth / 10;
  
  //Variables for color
  let flagBlue = color(47, 55, 94);
  let flagWhite = color(255);
  
  push();
  
  noStroke();
  
  //Sets color of wave
  if (waveNum % 2 != 0) {
    fill(flagBlue);
  } else if (waveNum % 2 == 0) {
    fill(flagWhite);
  }
  
  //Translates wave into place based on waveNum
  translate(0, waveNum * verticalSpacing / 2);
  
  push();
  
  //Moves wave up to center
  translate(0, - 3 * verticalSpacing);
  //Creates wave
  beginShape();
  vertex(0, canvasHeight);
  curveVertex(0, canvasHeight - verticalSpacing);
  curveVertex(horizontalSpacing, canvasHeight - verticalSpacing / 2);
  curveVertex(2 * horizontalSpacing, canvasHeight - verticalSpacing);
  curveVertex(3 * horizontalSpacing, canvasHeight - verticalSpacing / 2);
  curveVertex(4 * horizontalSpacing, canvasHeight - verticalSpacing);
  curveVertex(5 * horizontalSpacing, canvasHeight - verticalSpacing / 2);
  curveVertex(6 * horizontalSpacing, canvasHeight - verticalSpacing);
  curveVertex(7 * horizontalSpacing, canvasHeight - verticalSpacing / 2);
  curveVertex(8 * horizontalSpacing, canvasHeight - verticalSpacing);
  curveVertex(9 * horizontalSpacing, canvasHeight - verticalSpacing / 2);
  curveVertex(10 * horizontalSpacing, canvasHeight - verticalSpacing);
  vertex(canvasWidth, canvasHeight);
  endShape(CLOSE);
  
  pop();
  
  pop();
}
