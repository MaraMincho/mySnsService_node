const {pool} = require('../../data/index')


exports.register = async (email, password, name) => {
  const query = `INSERT INTO user
  (email, password, name)
  VALUES (?, ?, ?)`;

  return await pool(query, [email, password, name]);
}