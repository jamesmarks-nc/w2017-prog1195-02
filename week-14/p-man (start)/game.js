// James Marks 
// April 8th, 2017
// Pac-man inspired game for "Let's code a Game" session at Niagara college.

// References to HTML elements
const restartButton = document.getElementById("restart");
const continueButton = document.getElementById("continue");

// Load canvas and context
const canvas = document.querySelector("#pacman-game");
const ctx = canvas.getContext('2d');

// configuration applicable to whole game
const unitScale = 20;
const TEXT_COLOR = "#FFFFFF";

// configuration applicable to level. (should change when a new level is loaded);
let LEVEL = undefined;
let mapData = [];
let spawnRate = 75;
let gridWidth = 20;
let gridHeight = 30;

// Player will stay the same as long as page exists.
const player = { x: 1, y: 1, score: 0, lives: 3, isGameOver: false };
// Enemies will be reinitialized each time a level is loaded.
let enemies = []; // array of { x: int, y: int, d: char } -> d is direction in ("U", "D", "L", "R")

// Constants (Arbitrarily assigned)
const NOTHING = 0;
const WALL = 1;
const FOOD = 2;
const SPAWNER = 3;
const PLAYER = 4;
const ENEMY = 5;

// Color configuration
const colors = [];
// Tile colors
colors[NOTHING] = "#000";
colors[WALL] = "#0000FF";
colors[FOOD] = "#00FF00";
colors[SPAWNER] = "#007777";
// Actor colors
colors[PLAYER] = "#FFFF00";
colors[ENEMY] = "#FF0000";


// Basic shape drawing functions.
function drawSquare( x, y, fillStyle ) {
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x*unitScale, y*unitScale, unitScale, unitScale);
}
function drawCircle( x, y, radius, fillStyle ) { // x, y = position of middle of circle
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.arc(
      x * unitScale + (unitScale / 2), // middle x
      y * unitScale + (unitScale / 2), // middle y
      radius, // radius
      0, // start of arc.
      2 * Math.PI // Equivalent of 360 degrees in radians.
  );
  ctx.fill();
}

function drawPlayer( x, y ) { // colors[PLAYER]
  drawCircle( x, y, 8, colors[PLAYER] );
}
function drawEnemy( x, y ) { // colors[ENEMY]
  drawCircle( x, y, 6, colors[ENEMY] );
}
function drawFood( x, y ) { // colors[FOOD]
  drawCircle( x, y, 2, colors[FOOD] );
}


function loadLevel(level) {

  // set LEVEL configuration to level parameter
  LEVEL = level;

  // set canvas height & width to something appropriate using scale, 
  // width and height
  canvas.width = unitScale * level.width;
  canvas.height = unitScale * level.height;

  // copy level configuration into config variables.
  gridHeight = level.height;
  gridWidth = level.width;
  spawnRate = level.spawnRate;
  player.x = level.playerStart.x;
  player.y = level.playerStart.y;
  // reset player gameover tracking, score and number of lives.
  player.score = 0;
  player.lives = 3;
  player.isGameOver = false;
  // reset enemies
  enemies = [];
  
  // Load map data -> use ES6 spread operator or Object.assign()
  mapData = [...level.mapData];

  // reset buttons
  restartButton.disabled = true;
  continueButton.disabled = true;

  // finally draw the board.
  drawBoard();
}

function drawBoard() {
  for(var y = 0; y < gridHeight; y++) {// loop through each row
    for(var x = 0; x < gridWidth; x++) {// loop through each column
      var data = getSquareData(x, y);
      // and it's color
      var color = colors[data];
      // draw squares. do special stuff for food.
      if(data === FOOD) {
        drawSquare(x, y, colors[NOTHING]);
        drawFood(x, y);
      } else {
        drawSquare(x, y, color);
      }
    }
  }

  // draw the player
  drawPlayer(player.x, player.y);

  // draw the enemies
  for(var i = 0; i < enemies.length; i++ ) {
    var current = enemies[i];
    drawEnemy(current.x, current.y);
  }
}

// getter and setter for what is stored in a given square in map data
function getSquareData(x, y) {
  return mapData[y * gridWidth + x];
}
function setSquareData(x, y, newValue) {
  mapData[y * gridWidth + x] = newValue; 
}

function tryMovePlayer(direction) {
  // start with next square where the player is
  var nextSquare = {
    x: player.x,
    y: player.y
  };
  // then based on the direction we want to go, offset next square
  switch(direction) {
    case "L":
      nextSquare.x = nextSquare.x - 1;
      break;
    case "R":
      nextSquare.x = nextSquare.x + 1;
      break;
    case "U":
      nextSquare.y = nextSquare.y - 1;
      break;
    case "D":
      nextSquare.y = nextSquare.y + 1;
      break;
  }
  // figure out the value at that square
  var nextSquareData = getSquareData(nextSquare.x, nextSquare.y);

  // if it's a good square (food or nothing), then move there.
  if(nextSquareData === NOTHING || nextSquareData === FOOD) {
    movePlayer(nextSquare);
    // if there's an enemy, tough love - game over
    if(enemyIsAt(nextSquare.x, nextSquare.y)) {
      die("Walked into enemy");
    }
  } else {
    // else if its a wall, don't change position, but trigger a move enemies anyhow (to get "bump" effect)
    movePlayer(player);
  }

}

function movePlayer(position) { // position must have an x and a y property
  // assume the given position is okay, set player to given position
  player.x = position.x;
  player.y = position.y;
  // if it's food, consume it (and update score) then do a win check
  if(getSquareData(player.x, player.y) === FOOD) {
    updatePlayerScore(player.score + 10); // Points for eating 
    setSquareData(player.x, player.y, NOTHING);
    checkWin();
  }

  // move all the enemies
  for(var i = 0; i < enemies.length; i++) {
    moveEnemy(i);
  }

  // manage spawn points. (use spawnRate)
  // Note: just have to add enemy to the enemies array and the board will include them next draw.
  for(var i = 0; i < mapData.length; i++) {
    if(mapData[i] === SPAWNER) {
      var doSpawn = Math.floor(Math.random() * spawnRate) + 1;
      if(doSpawn === spawnRate) {
        enemies.push(
          {
            x: i % gridWidth,
            y: Math.floor(i / gridWidth)
          }
        )
      }
    }
  }

  // if game is not over, draw the board.
  if(!player.isGameOver) {
    drawBoard(); 
  }
}

// Update score object, but also update scoreboard.
function updatePlayerScore(newScore) {
  player.score = newScore;
  document.getElementById("player-score").innerText = newScore;
}

function gameOver(how) {
  drawText("You Lose", how);
  player.isGameOver = true;

  restartButton.disabled = false;
}

function checkWin() {
  // check if any food is left. if not, we won this level. (Intro to Array.prototype.filter())
  // TODO... create a "food" array of only FOOD items on the map
  var food = mapData.filter(d => d === FOOD);
  if(food.length === 0) {
    winLevel();
  }
}
function winLevel() {

  // update the board (so that the food we just ate disappears)
  drawBoard();

  // if there's a next level, indicate the player can continue
  // otherwise show a game winner message.
  if(LEVEL.nextLevel) {
    drawText("Complete", "continue?");
    continueButton.disabled = false;
  } else {
    drawText("Game Over", "You win!");
  }

  // mark the level as complete (use player.isGameOver)
  player.isGameOver = true;

}

// Draws a title and an optional subtitle on the screen as a message to the user.
function drawText(title, subtitle) {

  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  
  ctx.font = "bold 40px Courier";
  ctx.fillText(title,(gridWidth * unitScale) / 2, 100);

  ctx.font = "bold 30px Courier";
  ctx.fillText(subtitle,(gridWidth * unitScale) / 2,130);

}

function continueClick() {
  // Get all food into a new array.
  var food = mapData.filter(function(data) { return data === FOOD; })
  // If the player has not eaten all the food (food length > 0) continue this level
  if(food.length !== 0) {
    enemies = [];
    player.x = LEVEL.playerStart.x;
    player.y = LEVEL.playerStart.y;
    drawBoard();
  
  // otherwise, go to next level.
  } else {
    nextLevel();
  }
}

// start next level
function nextLevel() {
  // TODO: if there is no next level, don't go anywhere.
  loadLevel(LEVEL.nextLevel);
}
// restart from first level
function restart() {
  loadLevel(level0);
}

// For kicks, we're going to take an index instead of an enemy object.
function moveEnemy(enemyIndex) {
  // and then use that index to get the enemy object.
  var enemy = enemies[enemyIndex];
  // prep some variables for later use
  var nextSquare;
  var nextSquareData = -1;

  // FINALLY another (potentially) good reason to use a do...while() loop structure
  // Check the next square until the next square is on the "nice list".
  do {
    // Initialize our next square to the enemy's current position.
    nextSquare = {
      x: enemy.x,
      y: enemy.y
    };
    // Check enemy.d (direction) and update next square object accordingly
    switch(enemy.d) {
      case "L":
        nextSquare.x -= 1;
        break;
      case "R":
        nextSquare.x += 1;
        break;
      case "U":
        nextSquare.y -= 1;
        break;
      case "D":
        nextSquare.y += 1;
        break;
    }
    // get the data at that square
    nextSquareData = getSquareData(nextSquare.x, nextSquare.y);
    // make sure the enemy is allowed to move there
    if(nextSquareData !== FOOD && nextSquareData !== NOTHING) {
      // if not, randomize which direction the enemy will go next
      var directions = getAvailableDirections(enemy.x, enemy.y);
      var index = Math.floor(Math.random() * directions.length);
      enemy.d = directions[index];
    } else if(playerIsAt(nextSquare.x, nextSquare.y)) {
      // if the player is there, it's game over time.
      die("Enemy ate player");
    }
    
  } while(nextSquareData !== NOTHING && nextSquareData !== FOOD); // Until its a square the enemy is allowed to walk on.

  // once we have a good square, apply the position to the enemy in question.
  enemy.x = nextSquare.x;
  enemy.y = nextSquare.y;
}

function die(reason) {
  player.lives -= 1
  if(player.lives === 0) {
    gameOver(reason);
  } else {
    continueButton.disabled = false;
    restartButton.disabled = false;
    drawText("You died", "continue?");
  }
}

// check if player is on a given square
function playerIsAt(x, y) {
  return (player.x === x && player.y === y);
}

// check if an enemy is on a given square
function enemyIsAt(x, y) {
  var isEnemy = false;
  // TODO: loop through enemies. 
  return isEnemy;
}

// check which directions you can go from a given position (this function is imperfect)
function getAvailableDirections(x, y) {
  var available = [];
  // if up is available 
  if(getSquareData(x, y - 1) !== WALL) available.push("U");
  // if down is available
  if(getSquareData(x, y + 1) !== WALL) available.push("D");
  // if left is available
  if(getSquareData(x - 1, y) !== WALL) available.push("L");
  // if right is available
  if(getSquareData(x + 1, y) !== WALL) available.push("R");

  return available;
}

// capture when a player presses a key on your screen and start a turn.
document.onkeydown = function(e) {
  if(!player.isGameOver) {
    switch(e.keyCode) {
      case 37: // L
        tryMovePlayer("L");
        break;
      case 38: // U
        tryMovePlayer("U");
        break;
      case 39: // R
        tryMovePlayer("R");
        break;
      case 40: // D
        tryMovePlayer("D");
        break;
    }
  }
}

// html button even handlers.
restartButton.onclick = restart;
continueButton.onclick = continueClick;

// load the first level >>> loadLevel()
loadLevel(level1);