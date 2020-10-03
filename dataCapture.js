const axios = require("axios");

const fs = require("fs");
const url = "";

async function getData() {
  const res = await axios.get(url, {
    headers: {
      access_token: "",
    },
  });

  let lastData = JSON.parse(fs.readFileSync("./dataCapture.json"));
  //   console.log(lastData.length);

  lastData.push({
    url: res.data.data.menu_widgets[6].data.content_list[0].action_url,
  });

  fs.writeFileSync("./dataCapture.json", JSON.stringify(lastData, null, 2));

  //   console.log(
  //     res.data.data.menu_widgets[6].data.content_list[0].action_url
  //     //   .split("//")[2]
  //     //   .split("/in?")
  //   );
}

setInterval(function () {
  getData();
}, 5000);
