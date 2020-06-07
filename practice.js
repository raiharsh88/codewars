// D R U L

//D = X, Y+1
//R = X+1 ,Y

//D = X, Y-1
//R = X+1 ,Y

//Neighbours - (X+1 , Y) (Y+1 ,X) ( X,Y-1) (X-1 ,Y)

// Rules
// if (X < ar.length -1) or if(Y < ar[0].length)
//open set is collection of places not yet visited
//

let openSet = [];
let visited = [];
let stack = [];

let steps = 0;

let cordX = 0;
let cordY = 0;
function pathFinder(maze) {
  maze = maze.split("\n");

  console.log(maze.reduce((acc, current) => current + acc));
  maze = maze.map((element, i) => {
    element = element.split("");

    element = element.filter((e) => e != " ");

    element.forEach((e, j) => {
      openSet.push(j.toString() + i.toString());
    });

    return element;
  });

  console.log(maze);
  let maxY = maze.length - 1;
  let maxX = maze[1].length - 1;

  openSet.length > 0 || (cordY != maxY && cordX != maxX);
  // D R U L
  while (openSet.length > 0) {
    if (down(cordX, cordY, maze)) {
      cordY++;
      let block = cordX.toString() + cordY.toString();
      steps++;

      visited.push(openSet.splice(openSet.indexOf(block), 1));

      stack.push(block);
    } else if (right(cordX, cordY, maze)) {
      cordX++;
      let block = cordX.toString() + cordY.toString();
      steps++;

      visited.push(openSet.splice(openSet.indexOf(block), 1));

      stack.push(block);
    } else if (up(cordX, cordY, maze)) {
      cordY--;
      let block = cordX.toString() + cordY.toString();
      steps++;

      visited.push(openSet.splice(openSet.indexOf(block), 1));

      stack.push(block);
    } else if (left(cordX, cordY, maze)) {
      cordX--;
      let block = cordX.toString() + cordY.toString();
      steps++;
      visited.push(openSet.splice(openSet.indexOf(block), 1));

      stack.push(block);
    } else {
      let lastVisited = stack.pop();
      steps--;
      cordY = parseInt(lastVisited.split("")[1]);
      cordX = parseInt(lastVisited.split("")[1]);
    }

    if (stack.length < 1) break;
    if (cordY == maxY && cordX == maxX) break;
  }
  return stack.length > 0 ? steps : false;
}

function down(x, y, maze) {
  if (maze[y + 1] == undefined) return false;

  let block = (y + 1).toString() + x.toString();
  if (maze[y + 1][x] == "." && isOpen(block)) {
    return true;
  } else {
    return false;
  }
}

function right(x, y, maze) {
  let block = y.toString() + (x + 1).toString();
  if (maze[y][x + 1] == "." && isOpen(block)) {
    return true;
  } else {
    return false;
  }
}

function up(x, y, maze) {
  if (maze[y - 1] == undefined) return false;

  let block = (y - 1).toString() + x.toString();
  if (maze[y - 1][x] == "." && isOpen(block)) {
    return true;
  } else {
    return false;
  }
}

function left(x, y, maze) {
  let block = y.toString() + (x - 1).toString();
  if (maze[y][x - 1] == "." && isOpen(block)) {
    return true;
  } else {
    return false;
  }
}

function isOpen(block) {
  if (openSet.indexOf(block) != -1) return true;

  console.log("not available");

  return false;
}

console.log(
  pathFinder(`......
......
......
......
......
......`)
);

// Progressing
//Check directions  Move to next and mark traversed
