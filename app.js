const express = require('express'); //chamar o express
const app = express() // criar a variavel que usa o express
const http = require('http') //Modulo para escutar as requisições
const server = http.createServer(app)//cria o servidor com a variavel usada para instanciar o express
const {Server} = require('socket.io')
const io = new Server(server)
io.on('connection',(socket)=>{
    //console.log('usuario conectado')
    /*socket.on('disconnect',()=>{
        console.log('Usuario desconectado')
    })*/
    socket.on('chat',(msg)=>{
    console.log('Mensagem: '+msg)
     })
    socket.on('chat',(msg) =>{
        io.emit('chat',msg)
    })
})
app.get('/', (req,res)=>{
   // res.send('olá mundo')
   //console.log(__dirname)
   res.sendFile(`${__dirname}/cliente/index.html`)
})
server.listen(3000, ()=>{
    console.log('Servidor conectado em http://localhost:3000')    
}) //define a porta onde o servidor vai ser escutado