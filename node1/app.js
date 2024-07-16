// Package 선언부
require('dotenv').config(); //.env를 config로 사용하겠다
const express=require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')   //body parser 추가 1
const app = express(); //app객체로 express를 사용하겠다
const port = process.env.SERVER_PORT || 3000; // .env의 포트 번호를 가져옴, 안되면 3000으로 가져옴

//HTML파일 위치 views(views를 html에 넣겠다고 한 부분)
nunjucks.configure('views',{ // 화면에 관련된걸 views에 넣겠다
    express:app, //끝났는지 아닌지 모르니 ;찍기
});

// Html 환경설정, post, public 디렉토리 설정
app.set('view engine', 'html'); //view엔진을 html로 화면 구성하겠다
app.use(bodyParser.urlencoded({extended:false})); //post방식 확인
app.use(express.static('public')); //public: image, css
//선언부 끝

//Controller - 화면 요청 시 동작하는 부분(요청을 받아서 처리)
//127.0.0.1:3000/ 이걸 치면 get가 받아서 처리
app.get('/', (req,res)=>{
    res.render('index'); //index가 얘는 메인
})

//info 
app.get('/info', (req,res)=>{
    res.render('info',{'id':'id01','name':'이말숙'})
})

//login
app.get('/login', (req,res)=>{
    res.render('login')
})

//loginimpl
//loingipl로 요청을 하면서 req로 들어감
app.post('/loginimpl', (req,res)=>{
    let id = req.body.id;
    let pwd = req.body.pwd;
    console.log('ID: ' + id);
    console.log('PWD: ' + pwd);
    res.render('loginok', {'loginid':id});
})

app.listen(port,()=>{
    console.log(`server start port:${port}`)
})