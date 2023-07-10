const http = require('http')
const os = require('os')
const url = require('url')

const   PORT = 3000


const server = http.createServer((req, res) =>{

    if(req.url === '/info' ){

        res.setHeader('Content-Type', 'application/json')
        res.hostename()
    
    }
    server.listen(PORT, ()=> {
    const objeto = {
        {Id: 1, sistem:'sistema operacional',+ os.type(server)},
        {}
    }
    })
})
