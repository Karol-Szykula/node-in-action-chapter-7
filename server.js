const connect = require('connect')
const bodyParser = require('body-parser');

const app = connect()
    .use(bodyPars)
app.listen(3000)

function bodyPars(req, res, next) {
    bodyParser(req, res, next)
    console.log('End')
    next()
}