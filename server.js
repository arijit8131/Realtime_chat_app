const express = require('express')
const app = express()
// const http = require('http').createServer(app)

const PORT = process.env.port || 3000

// app.listen(PORT, () => {

//     console.log(`Listening on port ${PORT}`)
// })

// app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html')
     res.send("backend server")
})



//socket


const io = require('socket.io')( http)

io.on('connection',(socket) =>{
    console.log('connected...')
    socket.on('message',(msg) =>{
       socket.broadcast.emit('message', msg)
    })
    
})


app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`)
})