let weeks = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let start = 5; //Saturday on 1st Jan 1583

function mostFrequentDays(year) {
  if (year % 4 == 0) {
    return [getFirstDay(year), weeks[weeks.indexOf(getFirstDay(year)) + 1]];
  } else {
    return [getFirstDay(year)];
  }
}

function getFirstDay(year) {
  let day = 2;
  for (let i = 1583; i < year; i++) {
    if (i % 100 == 0) {
      day = i % 400 == 0 ? (day + 2) % 7 : (day + 1) % 7;
    } else {
      day = i % 4 == 0 ? (day + 2) % 7 : (day + 1) % 7;
    }
  }
  if (day == 0) {
    day = 7;
  }

  day = (day - 3) % 7;
  return weeks[day - 1];
}

console.log(mostFrequentDays(1785));
