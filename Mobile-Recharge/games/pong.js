// Variables for the ball
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;

// Variables for the paddle
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;

var started = false;
var score = 0;

function setup() {
  createCanvas(windowWidth * 0.7, windowHeight * 0.7);
}

function draw() {
  background(0);
  
  // Ball bounces off walls
	xBall += xBallChange;
	yBall += yBallChange;
	if (xBall < diameter/2 || 
      xBall > windowWidth*0.7 - 0.5*diameter) {
		xBallChange *= -1;
  }
	if (yBall < diameter/2 || 
      yBall > windowHeight*0.7 - diameter) {
    yBallChange *= -1;
	}
  
  // Detect collision with paddle
  if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter/2) >= yPaddle)) {
    xBallChange *= -1;
    yBallChange *= -1;
    score++;
  }
  
  // Draw ball
	fill(255, 0, 255);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  
  // Update paddle location
  if (!started) {
    xPaddle = windowWidth * 0.35;
    yPaddle = windowHeight - 300;
    started = true;
  }
  
  // Draw paddle
  fill(0, 255, 255);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  
  // Draw score
  fill(0, 255, 255);
  textSize(24);
  text("Score: " + score, 10, 25);
  if(score==50){
    alert('YOU HAVE WON 50 RS')
    score=0
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}