const { app } = require("./init");
const request = require("request");

// 测试服务端请求
// app.post("/api/lists", (req, res, next) => {
//     console.log("参数是", req.params);
//     request({
//             url: "http://127.0.0.1:5000/api/register",
//             method: "post"
//                 // formData:
//         },
//         (err, responce, body) => {
//             res.send(body);
//             next();
//         }
//     );
// });