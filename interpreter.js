// const instruction = ["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"];

// var interpreter = function(inst) {
//   var output = {};
//   for (var k = 0; k < inst.length; k++) {
//     var currentInst = inst[k];

//     currentInst = currentInst.split(" ");

//     if (currentInst[0] === "mov") {
//       if (Number.isInteger(parseInt(currentInst[2]))) {
//         output[currentInst[1]] = parseInt(currentInst[2]);
//       } else {
//         output[currentInst[1]] = output[currentInst[2]];
//       }
//     } else if (currentInst[0] === "inc") {
//       output[currentInst[1]]++;
//     } else if (currentInst[0] === "dec") {
//       output[currentInst[1]]--;
//     } else if (currentInst[0] === "jnz") {
//       if (output[currentInst[1]] !== 0) {
//         k = k + parseInt(currentInst[2]) - 1;
//         //var arr = inst[j];
//       }
//     }
//   }

//   return output;
// };

// var op = interpreter(instruction);

// console.log(op);

function SnakesLadders() {}

var action = [
  2,
  7,
  8,
  15,
  16,
  21,
  28,
  36,
  46,
  49,
  51,
  62,
  64,
  71,
  74,
  78,
  87,
  89,
  92,
  95,
  99
];
var consequence = [
  38,
  14,
  31,
  26,
  6,
  42,
  84,
  44,
  25,
  11,
  67,
  19,
  60,
  91,
  53,
  98,
  94,
  68,
  88,
  75,
  80
];
var GO = false;
var player1 = 0;
var player2 = 0;
var parity = true;
var left1 = false;
SnakesLadders.prototype.play = function(a, b) {
  var step = 0;

  if (parity) {
    // console.log("p1 is playing");
    if (player1 + a + b > 100) {
      player1 = 100 - (player1 + a + b - 100);
    } else {
      player1 += a + b;
    }
    var f = action.filter((e, i) => (e === player1 ? true : false));
    console.log("F is", f);
    if (f.length > 0) {
      step = consequence[action.indexOf(player1)];
      // console.log("N", player1, "a", f[0], "c", step);

      player1 = step;
    } else {
      step = player1;
    }

    if (a == b) {
      parity = true;
    } else {
      parity = false;
    }
    step = "Player 1 is on square " + step;
  } else {
    //console.log("p2 is playing");
    // Player 2
    if (player2 + a + b > 100) {
      player2 = 100 - (player2 + a + b - 100);
    } else {
      player2 += a + b;
    }
    //   setTimeout(() => {
    //     console.log("-----------P2----------", player2);
    //   }, 3000);
    var f = action.filter((e, i) => (e === player2 ? true : false));
    if (f.length > 0) {
      step = consequence[action.indexOf(player2)];

      // console.log("N", player2, "a", f[0], "c", step);

      player2 = step;
    } else {
      step = player2;
    }

    //    console.log("P2", player2, "F", f[0]);
    if (a == b) {
      parity = false;
    } else {
      parity = true;
    }
    step = "Player 2 is on square " + step;
  }

  if (GO) {
    step = "Game over!";
    return step;
  } else if (player1 === 100) {
    step = "Player 1 Wins!";
    GO = true;
    // player1 = 0;

    return step;
  } else if (player2 === 100) {
    step = "Player 2 Wins!";
    GO = true;
    // player2 = 0;
    return step;
  } else {
    return step;
  }
};
