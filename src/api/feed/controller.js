/** 전체 피드 보기 */
// e.g. http://localhost:3000/api/feed?color=blue&size=XL

const { isNewFeed } = require('../../common/formatter/date');
const {login} = require("../user/query");
const {store, show, deletefeed, update} = require("./query");

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
exports.store = async (ctx, next) => {

    let {user_id, image_id, content} = ctx.request.body;

    let item = await store(user_id, image_id, content)

    ctx.body = item;
}

/** 피드 상세 보기 */
exports.show = async (ctx, next) => {
    let {id} = ctx.request.headers;

    let item = await show(id);

    ctx.body = item;
}

/** 피드 수정 */
exports.update = async (ctx, next) => {
    let {id, content} = ctx.request.body;

    console.log(id);

    let item = await update(id, content);

    ctx.body = item;
}

/** 피드 삭제 */
exports.delete = async (ctx, next) => {
    let {id} = ctx.request.headers;

    let item = await deletefeed(id);

    ctx.body = item;
}