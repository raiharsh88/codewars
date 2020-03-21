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

console.log(Math.pow(5, 1 / 2));

console.log(2.236 * 2.236);
