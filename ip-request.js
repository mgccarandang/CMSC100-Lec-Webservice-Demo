const request = require("request");

request.get(
  "http://ip-api.com/json",
  (err, response, body) => {
    console.log(body);
    console.log(typeof(body));

    const data = JSON.parse(body);
    console.log(data.city);
    console.log(data.country);
  }
)