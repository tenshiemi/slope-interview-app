const { promisify } = require('bluebird');
const sqlite3 = require('sqlite3');
// import {createTables, insertUsers, insertMessages} from './methods';

const db = new sqlite3.Database('db.sqlite3');

db.get = promisify(db.get);
db.all = promisify(db.all);

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './db.sqlite'
//   }
// });

// async function initialize(){
//   await createTables(db);
//   await insertUsers(db);
//   await insertMessages(db);
//   return db.select('created_at', 'text').from('messages')
//     .then((rows) => log(rows));
// }

// initialize();
module.exports = db;
