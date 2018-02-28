var express = require('express'),
    request = require('request'),
    cors = require('cors');

var app = express();  

// Forward all requests from /api to http://foo.com/api
app.use('/api', cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), function(req, res) {
  console.log(req.url);
  req.pipe(request("https://public-api.adsbexchange.com/VirtualRadar" + req.url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
