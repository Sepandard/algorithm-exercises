/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/

function areThereDuplicates(arr = []) {
  // good luck. (supply any arguments you deem necessary.)
  if (arr.length === 0) throw Error("input is null please enter value");
  const dataSet = new Set();
  return arr.reduce((_, currentItem) => {
    if (dataSet.has(currentItem)) {
      return true;
    } else {
      dataSet.add(currentItem);
    }
    return false;
  }, false);
}

console.log(areThereDuplicates(["a", 2, 3, 4, "a"]));
