/* 
오름차순, ASCII 문자 순서로 정렬된다.
첫 번째 인수가 두 번째 인수보다 작을 경우 - 값
두 인수가 같을 경우 0
첫 번째 인수가 두 번째 인수보다 클 경우 + 값 
*/
const array = [1, 5, 12, 17, 27, 31, 2, 13, 99, 30];

console.log("default", array.sort()); // default, [1, 12, 13, 17,  2, 27, 30, 31,  5, 99]
console.log(
  "asc",
  array.sort((a, b) => a - b) // asc, [1,  2,  5, 12, 13,17, 27, 30, 31, 99]
);
console.log(
  "desc",
  array.sort((a, b) => b - a) // desc,[99, 31, 30, 27, 17, 13, 12,  5,  2,  1]
);
