const express = require('express');
const app = express();
const router = express.Router();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')

// Database 연동
var db_connect = require('../db/db_connect');
var db_sql = require('../db/db_sql');

router
    .get("/", (req, res) => { //127.0.0.1/item 라고 호출했을 때 "/"가 호출됨
        res.render('index', {'center':'item/list'});
    })
    .get("/add", (req, res) => { //127.0.0.1/item 라고 호출했을 때 "/"가 호출됨
        res.render('index', {'center':'item/add'});
    })
    .post("", (req, res) => {

    });

module.exports = router;