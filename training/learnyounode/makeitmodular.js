const myModule = require('./myModule')

const [ dir, ext ] = process.argv.slice(2,4)

myModule(dir, ext, (err, data)=>{
  if (err) {
    console.error(err)
  } else {
    console.log(data.join('\n'))
  }
})