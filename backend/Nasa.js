const https = require("https");
const open = require("open");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const api_key = "api_key=8jvqiN7K1YbEgDhXLccMWCYrxYrxrEwcUiRgcimk";

app.use(cors());

app.get("/apod", (req, res) => {
  const options = {
    hostname: "api.nasa.gov",
    port: 443,
    path: "/planetary/apod?" + "count=1&" + api_key,
    method: "GET",
  };
  httpRequest(options, null).then(
    (data) => res.send(data[0]),
    (err) => res.status(404).send(`no data retrieved: ${err}`)
  );
});

app.get("/search", (req, res) => {
  let options = {
    hostname: "images-api.nasa.gov",
    port: 443,
    path: "/search?q=" + req.query.query,
    method: "GET",
  };
  httpRequest(options, null).then(
    (data) => res.send(data),
    (err) => res.status(404).send(`no data retrieved: ${err}`)
  );
});

function httpRequest(params, postData) {
  return new Promise(function (resolve, reject) {
    var req = https.request(params, function (res) {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }
      // cumulate data
      var body = [];
      res.on("data", function (chunk) {
        body.push(chunk);
      });
      // resolve on end
      res.on("end", function () {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
    // reject on request error
    req.on("error", function (err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
    });
    if (postData) {
      req.write(postData);
    }
    // IMPORTANT
    req.end();
  });
}

app.listen(port, () =>
  console.log(`${module.filename}       listening on port ${port}!`)
);
