function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Changes from RGB to HSL
  colorMode(HSL);

  drawGrid(0);
  drawGrid(1);
  drawGrid(2);
  drawGrid(3);
  drawGrid(4);
}

function drawGrid(c) {
  stroke(255);
  //(0, x)
  fill("saddlebrown");
  rect(0, c * 80, 80, 80);
  //(1, x)
  if (c == 1) {
    fill("saddlebrown");
  } else {
    fill("green");
  }
  rect(80, c * 80, 80, 80);
  //(2, x)
  if (c == 2) {
    fill("saddlebrown");
  } else {
    fill("green");
  }
  rect(160, c * 80, 80, 80);
  //(3,x)
  if (c == 1) {
    fill("saddlebrown");
  } else {
    fill("green");
  }
  rect(240, c * 80, 80, 80);
  //(4,x)
  fill("saddlebrown");
  rect(320, c * 80, 80, 80);
}
