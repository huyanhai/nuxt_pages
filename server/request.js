var request = require("request");
var host = "http://192.168.0.108:5000/api";

function httprequest(url, data) {
    request({
        url: host + url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json"
        },
        body: requestData
    });
}