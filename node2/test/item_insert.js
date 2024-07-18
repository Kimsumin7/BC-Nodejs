var db_connect = require('../db/db_connect');
var db_sql = require('../db/db_sql');


conn = db_connect.getConnection();

// id int auto_increment primary key,
//     name varchar(20),
//     price int,
//     imgname varchar(30),
//     regdate datetime

//db_sql에서 ?된 것만 데이터 입력
let name = '새콤짱';
let price = '500';
let imgname = '500.jpg';
let values = [name, price, imgname];

conn.query(db_sql.item_insert, values, (e, result, fields) =>{
    if(e){
        console.log('Insert Error');
        console.log(e);
    } else{
        console.log('Insert Ok!')
    }
    db_connect.close(conn);
});