/* 
- 문제설명
0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

- 제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 수 ≤ 9
numbers의 모든 수는 서로 다릅니다.

- 입출력 예
numbers : [1,2,3,4,6,7,8,0] , output : 14
numbers : [5,8,4,0,6,7,9] , output : 6
*/

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

/* first solution */
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    const isNum = numbers.findIndex((n) => n === i);
    if (isNum === -1) {
      answer += i;
    }
  }
  return answer;
}

/* use indexOf */
function solution2(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) answer += i;
  }
  return answer;
}

/* use includes */
function solution3(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(numbers));
console.log(solution2(numbers));
console.log(solution3(numbers));
