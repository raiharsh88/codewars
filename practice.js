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
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return [main(year), weeks[(weeks.indexOf(main(year)) + 1) % 7]];
    } else {
      return [main(year)];
    }
  } else if (year % 4 == 0) {
    return [main(year), weeks[(weeks.indexOf(main(year)) + 1) % 7]];
  } else {
    return [main(year)];
  }
}

function getFirstDay(year) {
  let day = 2;
  for (let i = 1583; i < year; i++) {
    if (i % 100 == 0) {
      day = i % 400 == 0 ? (day + 2) % 7 : (day + 1) % 7;
      if (day == 0) day = 7;
    } else {
      day = i % 4 == 0 ? (day + 2) % 7 : (day + 1) % 7;
      if (day == 0) day = 7;
    }
  }
  console.log(day);
  return weeks[day - 1];
}

// console.log(mostFrequentDays(1800));

function day_of_the_week(y, m, d) {
  // array with leading number of days values
  let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

  // if month is less than 3 reduce year by 1
  if (m < 3) y -= 1;

  return (y + y / 4 - y / 100 + y / 400 + t[m - 1] + d) % 7;
}

// Driver Code
function main(year) {
  let day = 1;
  let month = 1;

  return weeks[Math.ceil(day_of_the_week(year, month, day)) - 1];
}
// console.log(main(1794));

//Mc= 1
