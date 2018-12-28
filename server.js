const http = require('http')
const connect = require('connect')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = connect()
    .use(logger())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(function (req, res) {
        res.end(JSON.stringify(req.body))
    })

http.createServer(app).listen(4000)
