const {pool} = require('../../data/index')

exports.create = async (name, path, size) => {
    const query = `INSERT INTO files
  (original_name, file_path, file_size)
  VALUES (?, ?, ?)`
    return await pool(query, [name, path, size]);
}

exports.update = async (id, content) => {

    const query = 'UPDATE feed set content = ? where id = ?;'
    let result = await pool(query, [content, id]);
    return (result.legnth < 0) ? null : '수정했습니다';
}

exports.deletefeed = async (id) => {
    const query = 'DELETE FROM feed WHERE id = ?'
    let result = await pool(query, [id]);
    console.log(result);
    return (result.legnth < 0) ? null : result;
}

exports.show = async (id) => {
    const query = 'SELECT * FROM feed WHERE id = ?'
    let result = await pool(query, [id]);
    console.log(result);
    return (result.legnth < 0) ? null : result;
}

exports.store = async (user_id, image_id, content) => {
    const query = `INSERT INTO feed
    (user_id, image_id, content)
    VALUES (?, ?, ?);`


    return await pool(query, [user_id, image_id, content])
}