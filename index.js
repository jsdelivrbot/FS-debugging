var express = require('express')
var app = express()

app.use(require("express-chrome-logger"));

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.console.log("Hello from your server :)");
  response.console.warn("Hello from your server :)");
  response.console.error("Hello from your server :)");
  response.console.info("Hello from your server :)");
  response.console.assert("Hello from your server :)");
  // response.console.time("labelA");
  response.console.group("Group1");
  response.console.log("111");
  response.console.groupEnd("Group1");
  // response.console.timeEnd("labelA");
  console.log('yupeeee');
  response.send('Hello World!')
})

app.get("/test", function(req, res) {
  res.console.log("Hello from your server with Kenneth :)");

  res.console.groupAs("Request", function () {
    res.console.dir(req);
  });

  res.console.assert(
    req.headers["user-agent"].search(/Chrome/) !== -1
    , "Not using Chrome"
  );

  res.send("");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
