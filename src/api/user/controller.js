const jwt = require("jsonwebtoken");
const SECRET_KEY = 'my-secret-key';
const {register} = require('./query');


/** 해당 id의 회원정보를 */
exports.info = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}

// 회원가입 처리 모듈
exports.register = async (ctx, next) => {
    let {email, password, name} = ctx.request.body

    let {affectedRows} = await register(email, password, name);

    if (affectedRows > 0) {
        let token = await generateToken({name});
        ctx.body = token;
    } else {
        ctx.body = {result : "fail"};
    }
}

// 로그인 모듈
exports.login = async (ctx, next) => {
    // let id = ctx.request.body.id;
    // let pw = ctx.request.body.pw;    
    let { id, pw } = ctx.request.body;
    let result = "";

    if(id ==="admin" && pw ==="1234") {
        result = await generateToken({ name: "abc" });
    } else {
        result = "id or pw incorrect";
    }

    // let token = await generateToken({name: 'my-name'});
    ctx.body = result;
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