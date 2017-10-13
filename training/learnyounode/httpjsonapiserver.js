const http = require('http')
const url = require('url')
// const bl = require('bl')

const server = http.createServer((req, res) => {

  if (req.method !== 'GET') {
    res.end('Must use GET method')
  } else {
    const { pathname, query } = url.parse(req.url, true)
    const date = new Date(query.iso)
    var result

    if (pathname === '/api/parsetime') {
      result = JSON.stringify({
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      })
    }

    if (pathname === '/api/unixtime') {
      result = JSON.stringify({
        'unixtime': date.getTime()
      })
    }

    if (result) {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(result)
    } else {
      res.writeHead(404)
      res.end()
    }


    
  }
})

server.listen(process.argv[2])