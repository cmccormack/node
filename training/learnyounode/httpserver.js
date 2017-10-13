const fs = require('fs')
const http = require('http')

const [ port, file ] = process.argv.slice(2,4)

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  fs.createReadStream(file).pipe(res)
})

server.listen(port)