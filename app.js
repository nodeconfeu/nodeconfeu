var path = require('path')
  , http = require('http')
  , url  = require('url')
  , stat = require('node-static')
  ;

var file = new(stat.Server)('.');

http.createServer(function (request, response) {
  console.log({method: request.method, url: request.url});
  request.addListener('end', function () {
    file.serve(request, response);
  });
}).listen(8081);


console.log('{"app": "Listening on 8081"}');