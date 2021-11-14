/*
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 
홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
*/

const dist = "try hello world";

function solution(s) {
  const distArr = s.split(" ");
  return distArr
    .map((v) => {
      let newWord = "";
      for (let i = 0; i < v.length; i++) {
        if (i % 2) {
          newWord += v.charAt(i).toLowerCase();
        } else {
          newWord += v.charAt(i).toUpperCase();
        }
      }
      return newWord;
    })
    .join(" ");
}

console.log(solution(dist));
