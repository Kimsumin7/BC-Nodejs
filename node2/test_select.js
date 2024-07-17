var db_connect = require(__dirname + '/db/db_connect');
var db_sql = require(__dirname + '/db/db_sql');

//접속을 위한
conn = db_connect.getConnection();

//db_sql에 select구문을 db에 전송하겠다 | function: select를 하면 실행하겠다
conn.query(db_sql.cust_select, function (err, result, fields) {

    if (err) {
        console.log('Select Error');
        console.log('Error Message:') + err;
    } else { //데이터 찍기
        console.log(result);
        console.log(JSON.stringify(result));
    }
    db_connect.close(conn); //반드시 close

});