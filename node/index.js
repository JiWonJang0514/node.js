// const mybar = require('./myvar') //.js는 생략 당연히 js문서니까
// console.log(mybar.a) //mybar소유가 됨. 객체 생성 비슷한가...???

const resMyvar = require('./myvar') //이제 name, hello는 resMyvar 소속이 됨
const setVar = new resMyvar() //객체 생성 (자바의 new)
console.log(setVar.name)
console.log(setVar.hello)