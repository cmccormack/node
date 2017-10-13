const fs = require('fs')
const path = require('path')

const filter = (dir, ext, callback) => {
  fs.readdir(dir, 'utf8', (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data.filter( v => {
        return path.extname(v).slice(1) === ext
      }))
    }
  })
}


module.exports = filter