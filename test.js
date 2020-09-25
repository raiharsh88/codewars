var count = 343;
var collection = 343;
const puppeteer = require("puppeteer");
const fs = require("fs");
let setLimit = 974;
function writeData(data) {
  let savedData = JSON.parse(fs.readFileSync("./attendees.json"));
  savedData[0].count = collection;
  savedData.push(data);
  fs.writeFileSync("./attendees.json", JSON.stringify(savedData, null, 3));
}

let extractItems = async function (page) {
  if (collection > setLimit) return;
  console.log("extractions", count, collection);
  let [button] = await page.$x(
    `/html/body/form/div[4]/div[2]/div/div[2]/div[${count}]/a`
  );

  if (!button) {
    console.log("button not found");
    return;
  }

  count++;
  collection++;
  await button.click();
  await page.waitFor(1000);

  const modal = await page.$("#exampleModalCenter");

  let [name] = await modal.$x(
    '//*[@id="DelegateList"]/section[1]/div/div/div/div/div/h5'
  );
  let [designation] = await modal.$x(
    '//*[@id="DelegateList"]/section[1]/div/div/div/div/div/p[1]'
  );
  let [company] = await modal.$x(
    '//*[@id="DelegateList"]/section[1]/div/div/div/div/div/p[2]'
  );
  let [email] = await modal.$x(
    '//*[@id="DelegateList"]/section[1]/div/div/div/div/div/p[3]'
  );

  name = await name.getProperty("textContent");
  name = await name.jsonValue();
  designation = await designation.getProperty("textContent");
  designation = await designation.jsonValue();
  company = await company.getProperty("textContent");
  company = await company.jsonValue();
  email = await email.getProperty("textContent");
  email = await email.jsonValue();

  //   console.log({ name, designation, company, email });

  await page.keyboard.press("Escape");
  await writeData({ name, designation, company, email });
  await page.waitFor(500);

  await extractItems(page);
};

async function scrapeInfiniteScrollItems(
  page,
  extractItems,
  itemTargetCount,
  scrollDelay = 1000
) {
  let items = [];
  try {
    let previousHeight;
    while (collection < setLimit) {
      await extractItems(page);
      previousHeight = await page.evaluate("document.body.scrollHeight");
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      await page.waitForFunction(
        `document.body.scrollHeight > ${previousHeight}`
      );
      await page.waitFor(scrollDelay);
    }
  } catch (e) {
    console.log(e);
  }

  return items;
}

async function main() {
  //   const browser = await puppeteer.launch({ headless: false });

  //   const page = await browser.newPage();
  //   await page.setViewport({ width: 1200, height: 720 });
  //   await page.goto("https://ciihive.in/Lounge.aspx?EventId=E000000027", {
  //     // waitUntil: "networkidle0",
  //   }); // wait until page load

  //   await page.type("#txtusername", "raiharsh2230@gmail.com");
  //   await page.type("#txtpassword", "newpassword");
  //   // click and wait for navigation
  //   await page.click("#btnlogin");
  //   await page.waitForNavigation({ waitUntil: "networkidle0" }),
  // await page.click("#B2B_Lounge");
  //   console.log(myData);

  const wsChromeEndpointurl =
    "ws://127.0.0.1:9222/devtools/browser/ad950ff7-f554-4a87-bc23-a0e144c80a10";
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsChromeEndpointurl,
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 720 });
  await page.goto("https://ciihive.in/Lounge.aspx?EventId=E000000027", {
    waitUntil: "networkidle0",
  });
  let i = 0;

  const items = await scrapeInfiniteScrollItems(page, extractItems, 975);

  // Close the browser.
  //   await browser.close();
}

main();
