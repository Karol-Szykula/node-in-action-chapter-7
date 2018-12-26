const http = require('http')
const connect = require('connect')
const bodyParser = require('body-parser')

const app = connect()
    .use(bodyParser({
        limit: '64kb',
        type: 'application/x-www-form-urlencoded'
    }))
    .use(bodyParser({
        limit: '32kb',
        type: 'application/json'
    }))
    .use(bodyParser({
        limit: '2mb',
        type: 'image'
    }))
    .use(bodyParser({
        limit: '300mb',
        type: 'video'
    }))
    .use(hello)

http.createServer(app).listen(3000)

function hello(req, res, next) {
    console.log('Hello')
}