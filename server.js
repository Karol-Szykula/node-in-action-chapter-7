const connect = require('connect');
const cookieParser = require('cookie-parser')

const app = connect()
    .use(cookieParser('tobi is super animal'))
    .use(function (req, res) {
        console.log(req.cookies);
        console.log(req.signedCookies);
        res.end('hello\n');
    }).listen(3000);