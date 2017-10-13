const bl = require('bl')
const http = require('http')

const url = process.argv[2]

http.get(url, response => {
  response.pipe(bl((err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log(data.toString().length)
      console.log(data.toString())
    }
  }))
})