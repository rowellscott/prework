// Rover Object Goes Here
// ======================
var rover={
  direction: ["N", "S", "E", "W"],
  x: 0,
  y: 0,
  travelLog: [],
  currentDirection: 0,
  name: 'Green Rover',
};

var rover1={
  direction: ["N", "S", "E", "W"],
  x: 0,
  y: 1,
  travelLog: [],
  currentDirection: 0,
  name: 'Red Rover'
};

var rover2={
  direction: ["N", "S", "E", "W"],
  x: 0,
  y: 2,
  travelLog: [],
  currentDirection: 0,
  name: 'Blue Rover'
};

// ======================
var board=  [
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
[null, null, null, null, null, null, null, null , null, null],
];

var names=[rover, rover1, rover2];
var z = 0; //Array Counter

function getRandomNum(){
 return Math.floor(Math.random()*10);
}

//Creates new board with obstacles at different locations
for(var i=0; i<5; i++){
    var obstacleX= getRandomNum();
    var obstacleY=getRandomNum();

    if (board[obstacleX][obstacleY]===null){
      board[obstacleX][obstacleY]="O";
    }
    else{
	      var obstacleX= getRandomNum();
        var obstacleY=getRandomNum();
        board[obstacleX][obstacleY]="O";
      }
}


function commands(commandString){

  var currentDirection = names[z].direction[0];
  var x= names[z].x;
  var y = names[z].y;
  var travelLog = names[z].travelLog;

//Validate command string. Only contains r, f, l, or b.
for(var j=0; j<commandString.length; j++){
  if(commandString[j]==="r" || commandString[j] ===
'l' || commandString[j]==="f" || commandString[j]==="b" ){
  continue;
}
else{console.log("Woops. Please enter r, l, f, or b");
  return null; }
}

//Prints which rover's turn it is
console.log(names[z].name);

function turnLeft(rover){
    console.log("turnLeft was called!");

  switch(currentDirection){

  case "N":
  currentDirection= "W";
  return currentDirection;

  case "S":
  currentDirection= "E";
  return currentDirection;


  case "E":
  currentDirection= "N";
  return currentDirection;


  case "W":
  currentDirection= "S";
  return currentDirection;
}
}


function turnRight(rover){

  console.log("turnRight was called!");
  switch(currentDirection){
  case "N":
  currentDirection= "E";
  return currentDirection;

  case "S":
  currentDirection= "W";
  return currentDirection;


  case "E":
  currentDirection= "S";
  return currentDirection;


  case "W":
  currentDirection= "N";
  return currentDirection;
}
  }

function moveForward(rover){
  console.log("moveForward was called");
    switch(currentDirection){

    case "N":
      //If rovers goes off the board. Else if rover hits an obstacle. Else move one space in appropriate direction.
      //Write coordinates in console. Send coordinates to travelLog. Return new coordinate.
      if (y-1 === -1){
      console.log("Oops. Try another direction.");
      break;
      }
      else if (board[y-1][x]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
      else{y -= 1;}
      console.log("Current Cooordinates: " + x + "," + y);
      travelLog.push(x + "," + y);
      return y;

    case "S":

      if (y+1===10){
        console.log("Oops. Try another direction.");
        break;
      }
      else if (board[y+1][x]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
      else{y += 1;}
      console.log("Current Cooordinates: " + x + "," + y);
      travelLog.push(x + "," + y);
      return y;

    case "E":
      if (x+1===10){
        console.log("Oops. Try another direction.");
        break;
      }
      else if (board[y][x+1]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
      else{x += 1;}
      console.log("Current Cooordinates: " + x + "," + y);
      travelLog.push(x + "," + y);
      return x;

    case "W":
      if (x-1 === -1){
        console.log("Oops. Try another direction.");
        break;
      }
      else if (board[y][x-1]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
      else{x -= 1;}
      console.log("Current Cooordinates: " + x + "," + y);
      travelLog.push(x + "," + y);
      return x;
    }
}


function moveBackwards(rover){
  console.log("moveBackwards was called");

  switch(currentDirection){

  case "N":
      if (y+1 === 10){
      console.log("Oops. Try another direction.");
      break;
      }
      else if (board[y+1][x]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
      else{y += 1;}
      console.log("Current Cooordinates: " + x + "," + y);
      travelLog.push(x + "," + y);
      return y;

  case "S":
      if (y-1 === -1){
      console.log("Oops. Try another direction.");
      break;
      }
      else if (board[y-1][x]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
      else{y -= 1;}
      console.log("Current Cooordinates: " + x + "," + y);
      travelLog.push(x + "," + y);
      return y;

  case "E":

    if (x-1 === -1){
      console.log("Oops. Try another direction.");
      break;
      }
    else if (board[y][x-1]==="O")
      {
        console.log("Hit obstacle. Try another direction");
        break;
      }
    else{x -= 1;}
    console.log("Current Cooordinates: " + x + "," + y);
    travelLog.push(x + "," + y);
    return x;

  case "W":
    if (x+1===10){
      console.log("Oops. Try another direction.");
      break;}
    else if (board[y][x+1]==="O")
    {
      console.log("Hit obstacle. Try another direction");
      break;
    }
    else{x += 1;}
    console.log("Current Cooordinates: " + x + "," + y);
    travelLog.push(x + "," + y);
    return x;
}
}

  //Direct rover movements based on a command string.
  for(var i=0; i < commandString.length; i++){

    switch(commandString[i]){
      case 'r':
      turnRight();
      break;

      case 'l':
      turnLeft();
      break;

      case 'f':
      moveForward();
      break;

      case 'b':
      moveBackwards();
      break;
    }
  }
  //Send data to rover object
  names[z].x =x;
  names[z].y=y;
  names[z].currentDirection=currentDirection;
  names[z].travelLog=travelLog;

  //Change names array counter to use next rover
  if (z===0){
    z++;
  }
  else if (z+2 > names.length)
  {
    z=0;
  }
  else {
    z++;
  }

  //Print travelLog
  console.log(travelLog);
  return travelLog;

}
