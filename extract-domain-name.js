function domainName(url) {
  return url
    .slice(url.indexOf("//") == -1 ? 0 : url.indexOf("//") + 2)
    .split(".")
    .filter((ele) => ele != "www")[0];
}

// function domainName(url) {
//   if (url.indexOf("//") != -1) {
//     url = url.slice(url.indexOf("//") + 2).split(".");
//     if (url[0] == "www") return url[1];
//     return url[0];
//   }

//   return url.split(".").filter((ele) => ele != "www")[0];
// }

console.log(domainName("www.xakep.ru"));
