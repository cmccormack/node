const path = require('path')
const fs = require('fs')

const [ dir, ext ] = process.argv.slice(2,4)

fs.readdir(dir, 'utf8', (err, data) => {
  console.log(data.filter( v => {
    return path.extname(v).slice(1) === ext
  }).join('\n'))
})

