// 정규식
// regular expression

const txt = "Hello World! world!";

// g => global, i => 대소문자 구별 안한다.
const regxp = /World/gi;

// console.log(txt.replace(regxp, "JongHo"));

const str = "123abc456kkk";
const regxp1 = /[0-9]/g;

// match는 문자열에서 찾고자 하는 것을 배열로 만들어주는 함수
const result = str.match(regxp1);
// console.log(result);

const str2 = "re, green, red, gree, gen, yellow, blue";
const regxp2 = /(red|green|)/g;
const result2 = str2.match(regxp2);
// console.log(result2);

const tel = "010-3008-9614";
// 3자리 010 - 4자리 숫자 - 4자리
const regexp3 = /^(010)-\d{4}-\d{4}/;
// console.log(regexp3.test(tel));

// E-mail
// sumaoo20@naver.com
const regexp4 = /^\w+@\w+(\.\w{2,3})+$/;

console.log(regexp4.test("sumaoo20@naver.com"));
