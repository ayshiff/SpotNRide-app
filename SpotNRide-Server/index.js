let express = require('express')
let bodyParser = require('body-parser')
let apiRoutes = require('./apiRoutes').router

let server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1> Home </h1>')
})

server.use('/api/', apiRoutes)

server.listen(8080, function(){
    console.log('Server launched')
})