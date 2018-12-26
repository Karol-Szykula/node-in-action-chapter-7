const http = require('http')
const connect = require('connect')
const bodyParser = require('body-parser')

const app = connect()
    .use(bodyParser({
        limit: '32kb'
    }))
    .use(hello)

http.createServer(app).listen(3000)

function hello(req, res, next) {
    console.log('Hello')
}