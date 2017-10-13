const map = require('through2-map')
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe( map( chunk => chunk.toString().toUpperCase() ) )
      .pipe(res)
  } else {
    return res.end('Must be a POST request.')
  }
})

server.listen(process.argv[2])