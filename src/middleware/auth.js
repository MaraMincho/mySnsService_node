const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

exports.verify = async (ctx, next) => {
    var token = ctx.request.headers['token'];
    jwt.verify(token, process.env.APP_KEY, (error, decoded) => {
        if(error) {
            ctx.body = '로그인을 해야 합니다';
            return;
        }
        next();
    })
}