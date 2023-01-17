const {pool} = require('../../data/index')


/**
 * 
 * @param {String} name 메일
 * @param {String} path 비밀번호
 * @param {String} size 이름
 * @returns 
 */
exports.register = async (email, password, name) => {
  const query = `INSERT INTO user
  (email, password, name)
  VALUES (?, ?, ?)`;

  return await pool(query, [email, password, name]);
}

exports.login = async (email, password) => {
  const query = `SELECT * FROM user WHERE
  email = ? AND password = ?`

  return await pool(query, [email, password])
  //return (result.length < 0)? null : result[0];
}