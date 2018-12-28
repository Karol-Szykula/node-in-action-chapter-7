const http = require('http')
const connect = require('connect')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = ('method-override')

const app = connect()

    .use(logger('dev'))

    // .use(bodyParser.urlencoded({
    //     extended: true
    // }))

    .use(edit)
    .use(update)

http.createServer(app).listen(3000)


function edit(req, res, next) {
    if ('GET' !== req.method) return next()
    res.setHeader('Content-Type', 'text/html')
    res.write('<form method="post">')
    res.write('<input type="hidden" name="_method" value="put" />')
    res.write('<input type="text" name="user[name]" value="Tobi" />');
    res.write('<input type="submit" value="Zmień" />')
    res.write('</form>')
    res.end()
}

function update(req, res, next) {
    if ('PUT' != req.method) return next()
    res.end('User name has been changed to: ' + req.body.user.name)
}