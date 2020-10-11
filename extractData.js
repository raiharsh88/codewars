function extractIds(data) {
  let ids = [];
  if (Array.isArray(data)) {
    for (let arr of data) {
      if (Array.isArray(arr)) {
        ids = ids.concat(extractIds(arr));
      } else {
        ids.push(...extractIds(arr));
      }
    }
  } else {
    for (let [key, value] of Object.entries(data)) {
      if (key == "id") {
        ids.push(value);
      } else if (key == "items") {
        ids = ids.concat(extractIds(value));
      }
    }
  }
  return ids;
}
