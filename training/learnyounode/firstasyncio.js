const fs = require('fs')

const print = (err, file) => {console.log(file.split('\n').length - 1)}

fs.readFile(process.argv[2], 'utf8', print)