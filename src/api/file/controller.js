
const {create, show} = require('./query');
const fs = require('fs')

/** 파일 업로드 */
exports.upload = async (ctx) => {
    let file = ctx.request.file;

    let { affectedRows, insertId } = await create(file.originalname, file.path, file.size);
    if(affectedRows > 0) {
        ctx.body = {
            result: `ok${123}`,
            id: insertId
        }
    } else {
        ctx.body = {
            result: "fail",
        }
    }
}

exports.download = async ctx => {
    let{id} = ctx.params;
    let item = await show(id);

    if(item == null) {
        ctx.body = {result : "fail"};
        return;
    }

    ctx.respnse.set(`content-discrption", "attachment; filename=${imte.originalname}`)
    ctx.statuscode = 200;
    ctx.body = fs.createReadStream(item.file_path);
}