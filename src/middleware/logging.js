/**
 * 클라이언트의 요청 ip와 url을 콘솔에 단순 출력하는 로그 함수
 */
exports.myLogging = async (ctx, next) => {
    let clientId = ctx.request.ip;
    console.log(`${clientId.replace("::ffff:","")} 주소에서 요청 : ${ctx.originalUrl}`);
    await next();
}