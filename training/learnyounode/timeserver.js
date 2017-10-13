const net = require('net')

const port = process.argv[2]

const server = net.createServer(socket=>{

  const addZero = val => +val < 10 ? '0' + val : val

  const date = new Date()
  const year = date.getFullYear()
  const month = addZero(date.getMonth()+1)
  const day = addZero(date.getDate())
  const hour = addZero(date.getHours())
  const minutes = addZero(date.getMinutes())

  socket.end(`${year}-${month}-${day} ${hour}:${minutes}\n`)

})

server.listen(port, ()=>{
  console.log(`Server created on port ${port}`)
})