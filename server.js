
const connect = require('connect')
const logger = require('morgan')
const cookieParser = require('cookie-session')
const connectSession = require('connect-session')

const session = connectSession.session

const app = connect()

    .use(logger('dev'))

    .use(cookieParser({
        name: 'session',
        secret: 'sec'

    }))
    .use(session())
    .use(function (req, res, next) {
       
        if (req.session.views ) {
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>Views: ' + req.session.views  + '</p>');
            req.session.views = (req.session.views || 0) + 1

            res.end();
        } else {
            req.session.views = (req.session.views || 0) + 1
            res.end('Presentation of method session(). Refresh the page!');
        }

        res.end(req.session.views + ' views')
    });

app.listen(3000);