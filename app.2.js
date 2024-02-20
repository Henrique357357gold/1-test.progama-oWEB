var http = require('http')

http.createServer(function(req, res){
    res.end("Mensagem direcionada naquele modelo!s")
}).listen(8082)

console.log("Console está ativo! O que voce deseja fazer?" )       