//module.exports.a = 'hello a'

function myvar() {
    //const a = 'apple'  일반 변수는 소유권이 정해지지 못함
    
    //this: 호출한 쪽을 중심으로 소유권이 이전되는
    this.name = 'My instance' 
    this.hello = 'My instance hello'
}

module.exports = myvar //내보내기
