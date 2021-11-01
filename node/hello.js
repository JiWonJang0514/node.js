// console.log('hello Node.js')

//변수 이름으로 내보내고 싶을 때
// module.exports.변수 = 데이터
// module.exporst.apple = 'red'

//함수로 내보내고 싶을 떄
// module.exports = 함수
// module.exports = function () {

// }

//변수 이름으로 불러올 때
// 변수 = require('')

// 노드로 웹서버 구축
const http = require('http')
http.createServer((request, response) => { // 파라미터:(리퀘스트, 리스폰스)
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    response.write('Hello yydh Server!')
    response.end()
}).listen(3000) //구축할 서버 포트
