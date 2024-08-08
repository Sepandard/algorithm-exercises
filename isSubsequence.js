/** 
Multiple Pointers - isSubsequence
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if (!str1 || !str2) throw Error("input is null please enter value");
  let response = false
  const strArr1 = str1.split("");
  const strArr2 = str2.split("");

  let indexArr1 = 0;
  strArr2.forEach((element,i) => {
    if (strArr2[i] === strArr1[indexArr1]) {
      indexArr1 = indexArr1 + 1;
      if (indexArr1 === strArr1.length) {
        response = true;
      }
    }
  });

  return response;
}

console.log(isSubsequence('abcdz', 'abracadabra'));
