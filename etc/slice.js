/* 
 MDN - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 
 원본 배열은 바뀌지 않습니다.
 */

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// output: Array ["camel", "duck"]
