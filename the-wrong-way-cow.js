findWrongWayCow = function (field) {
  return field;
  return field.map((f, i) => f.join("").split(".").join("")).join("");
};

var field = [
  "c..........".split(""),
  "o...c......".split(""),
  "w...o.c....".split(""),
  "....w.o....".split(""),
  "......w.cow".split(""),
];

var field2 = [
  "cow.cow.cow.cow.cow".split(""),
  "cow.cow.cow.cow.cow".split(""),
  "cow.woc.cow.cow.cow".split(""),
  "cow.cow.cow.cow.cow".split(""),
];

console.log(findWrongWayCow(field));
