function leaderboardSort(leaderboard, changes) {
  for (let change of changes) {
    let [player, number] = change.split(" ");
    let idx = leaderboard.indexOf(player);
    leaderboard.splice(idx, 1);
    if (number.charAt(0) == "-") {
      leaderboard.splice(
        Math.abs(parseInt(number.split("-")[1]) + idx),
        0,
        player
      );
    } else if (number.charAt(0) == "+") {
      leaderboard.splice(
        Math.abs(parseInt(number.split("+")[1]) - idx),
        0,
        player
      );
    }
  }
  return leaderboard;
}

console.log(
  leaderboardSort(
    ["John", "Brian", "Jim", "Dave", "Fred"],
    ["Dave +1", "Fred +4", "Brian -1"]
  )
);
