const http = require('http')
const connect = require('connect')
const qs = require('qs')

const app = connect()
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'application/json')
        console.log(req.url)
        res.end(JSON.stringify(req.url))
    })

http.createServer(app).listen(3000)

function query(req, res, next) {
    
}
