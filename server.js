var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  var ts = Math.round((new Date()).getTime() / 1000);
  response.write('ts is ' +ts+  '\n')
  response.end('\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
