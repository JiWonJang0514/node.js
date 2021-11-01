// 익스프레스로 웹서버 구축(npm express 인스톨 된 상태여야 함)
// 장점)
// 모듈 단위로 구축할 수 있음
// 중간에 계속 추가할 수 있다. 확장성이 있음!

const express = require('express')
const nunjucks = require('nunjucks')
const admin = require('./routes/admin')
const app = express() //재할당
const port = 3000

nunjucks.configure('template', { // 폴더 이름
    autoescape : true,  //혹시나 코드 입력 방지
    express : app
})

//바디파서 설정
app.use(express.json())  // JSON 형식으로 파싱하겠다
app.use(express.urlencoded({extended:false}))  // query-string 모듈을 사용하겠다

app.use('/upload', express.static('upload')) //이미지 쓰는 법


function testMiddleware(reg, res, next) {
    console.log('첫번째 미들웨어')
    app.locals.isGold = true  //글로벌 뷰 변수. 중간에서 값을 넘겨줌
    next()
}

function testMiddleware2(reg, res, next) {
    console.log('두번째 미들웨어')
    next()
}

// localhost:3000
app.get('/', testMiddleware, testMiddleware2, (reg, res) => {
    res.send('hello express!22223')
})

// localhost:3000/admin
app.use('/admin', admin)  // /admin 요청에는 admin을 열어라!



app.listen(port, () => {
    console.log('Express listening on port', port)
})

