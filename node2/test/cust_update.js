
var db_connect = require('../db/db_connect');
var db_sql = require('../db/db_sql');

conn = db_connect.getConnection();

let id = 'id04';
let pwd = 'pwd44';
let name = '홍겸';
let acc = '66666';
let values = [pwd, name, acc, id];

conn.query(db_sql.cust_update, values, (e, result, fields) => {
    if (e) {
        console.log('Update Error');
        console.log('Error Message:', e);
    } else {
        console.log('Update OK !');
    }
    db_connect.close(conn);
});