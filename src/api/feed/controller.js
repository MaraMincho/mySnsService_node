/** 전체 피드 보기 */
// e.g. http://localhost:3000/api/feed?color=blue&size=XL

const { isNewFeed } = require('../../common/formatter/date');

exports.index = (ctx, next) => {
    // query.color;
    // query.size;
    // query.count;
    // let {color, size, count} = ctx.query;

    let query = ctx.query;
    let result = isNewFeed('2023-01-12 15:12');
    console.log(`새 글인가요 :  ${result}`);
    ctx.body = query;
}
/** 새 피드 작성 처리 */
exports.store = (ctx, next) => {
    let body = ctx.request.body;
    ctx.body = body;
}

/** 피드 상세 보기 */
exports.show = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 상세`;
}

/** 피드 수정 */
exports.update = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}

/** 피드 삭제 */
exports.delete = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}