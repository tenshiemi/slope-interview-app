const { promisify } = require('bluebird');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('db.sqlite3');

db.all = promisify(db.all);
db.get = promisify(db.get);

module.exports = db;
