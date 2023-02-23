var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, welcome , end, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("Img/track.jpg");
  car1_img = loadImage("Img/Eevee.png");
  car2_img = loadImage("Img/jolteon.png");
  car3_img = loadImage("Img/umbreon.png");
  car4_img = loadImage("Img/vaporeon.png");
  ground = loadImage("Img/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
