const axios = require("axios");

const fs = require("fs");
const url =
  "https://bff.oyorooms.com/v1/menu_items?client_type=Android%20App&additional_fields=ab_service_data,anonymous_user&user_mode=Consumer_Guest&version=20351&partner_app_version=20351&android_id=8879480a2e622e7e&idfa=&sid=1595103472897";

async function getData() {
  const res = await axios.get(url, {
    headers: {
      access_token:
        "QmpDZlRxZWo2UkZ5M3pSeHZ5NW46bi13NHN0ZTV5V1I1aGpCUVVHOUM6a3Z6OGlYMzhDb210eTV4YWduQTQ6ODA4MDA2MjgwMw==",
    },
  });

  fs.writeFileSync(
    "./hack.json",
    JSON.stringify(
      res.data.data.menu_widgets[6].data.content_list[0].action_url,
      null,
      2
    )
  );

  console.log(
    res.data.data.menu_widgets[6].data.content_list[0].action_url
    //   .split("//")[2]
    //   .split("/in?")
  );
}

getData();

// axios
//   .get(url, {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
