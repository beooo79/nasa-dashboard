const https = require("https");
const open = require("open");

const api_key = "api_key=8jvqiN7K1YbEgDhXLccMWCYrxYrxrEwcUiRgcimk";

const options = {
  hostname: "api.nasa.gov",
  port: 443,
  path: "/planetary/apod?" + "count=1&" + api_key,
  method: "GET",
};

function getRandomAstroPicOfDayFromNASA() {
  var req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log("headers:", res.headers);
    res.on("data", (data) => {
      let json = JSON.parse(data);
      (async () => {
        // Opens the URL in the default browser.
        await open(json[0].hdurl);
      })();
    });
  });

  req.on("error", (e) => {
    console.error(e);
  });

  req.end();
}

getRandomAstroPicOfDayFromNASA();
