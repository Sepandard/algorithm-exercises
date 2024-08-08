/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

function sameFrequency(arg1 = 0, arg2 = 0) {
  // good luck. Add any arguments you deem necessary.
  let res = true;

  const argArr2 = arg2.toString().split("");
  const argArr1 = arg1.toString().split("");

  if (argArr1.length !== argArr2.length) return false;

  const mergeArr = [...argArr2, ...argArr1];
  const counterObj = new Map();

  mergeArr.forEach((item) => {
    if (counterObj.has(item)) {
      counterObj.set(item, counterObj.get(item) + 1);
    } else {
      counterObj.set(item, 1);
    }
  });

  counterObj.forEach((value) => {
    if (value % 2 !== 0) {
      res = false;
    }
  });

  return res;
}

console.log(sameFrequency(3589578, 5879385));
