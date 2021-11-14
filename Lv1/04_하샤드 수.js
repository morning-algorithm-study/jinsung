/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

/*
arr	return
10	true
12	true
11	false
13	false
*/

function solution(x) {
  let answer = true;
  const stringX = x.toString();
  let sum = 0;
  for (let i = 0; i < stringX.length; i++) {
    sum += Number(stringX.charAt(i));
  }
  const numX = Number(x);
  console.log(stringX.charAt(0), stringX.charAt(1), sum, numX);
  if (numX % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution(10));
