var signin;
var verify;
var survey;
var thanks;

var OPTION;
var OPTION1;
var OPTION2;



function preload(){
  img = loadImage("surveyimg.png");
}

function setup() {
  createCanvas(1300,850);

  database = firebase.database();

  img.loadPixels();

  signin = new Signin();
  signin.display();
}

function draw() {
  background(0,255,0);  

  image(img, 38, 42, 330, 200);
}