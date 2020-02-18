const {
  app
} = require('./init')
const request = require("request");


// 测试服务端请求
app.get("/api/lists", (req, res, next) => {
  request({
      url: "http://192.168.0.161:7070/courier/invite_greenid/reg"
    },
    (err, responce, body) => {
      res.send('send test');
      next();
    }
  );
});
