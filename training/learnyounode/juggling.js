const http = require('http')

const urls = process.argv.slice(2)
const responses = []
var count = 0


const httpGet = index => {

  http.get(urls[index], response => {

    response.setEncoding('utf8')
    let rawData = ''

    response.on('data', data => {
      rawData += data
    })

    response.on('end', () => {
      responses[index] = rawData.toString()
      count += 1

      if ( count === urls.length) {
        console.log(responses.join('\n'))
      }
      
    })
  })
}

for (var i=0; i < urls.length; i++){
  httpGet(i)
}