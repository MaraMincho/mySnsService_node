const jwt = require("jsonwebtoken");
const SECRET_KEY = 'my-secret-key';
const {register, login} = require('./query');
const crypto = require('crypto')

/** 해당 id의 회원정보를 */
exports.info = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}


// 회원가입 처리 모듈
exports.register = async (ctx, next) => {
    let {email, password, name} = ctx.request.body
    //let result = crypto.pbkdf2Sync(password, process.env.APP_KEY, 50, 254, 'sha512')
    //let {affectedRows} = await register(email, result.toString('base64'), name);
    let {affectedRows} = await register(email, password, name);

    if (affectedRows > 0) {
        ctx.body = await generateToken({name});
    } else {
        ctx.body = {result : "fail"};
    }
}

// 로그인 모듈
exports.login = async (ctx, next) => {
    // let id = ctx.request.body.id;
    // let pw = ctx.request.body.pw;    
    let { email, password } = ctx.request.body;
  //  let result = crypto.pbkdf2Sync(password, process.env.APP_KEY, 50, 255, 'sha512')

//    let item = await login(email, result.toString('base64'))

    let item = await login(email, password)
    if (item == null) {
        ctx.body = {result : "fail"}
    }
    else {
        let token = await generateToken({name : item.name})
        ctx.body = token
    }
    // let token = await generateToken({name: 'my-name'});
}

/**
 * jwt 토큰 생성
 * @param {object} payload 
 * @returns {string} jwt 토큰 string
 */
let generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.APP_KEY, (error, token) => {
            if(error) { reject(error); }
            resolve(token);
        })
    })
}