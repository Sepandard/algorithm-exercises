/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring(*') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6]
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8|
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
**/

function findLongestSubstring(){
  var max = 0, currentString = "", i, char, pos;

  for (i = 0; i < string.length; i += 1) {
      char = string.charAt(i);
      pos = currentString.indexOf(char);
      if (pos !== -1) {
          currentString = currentString.substr(pos + 1);
      }
      currentString += char;
      max = Math.max(max, currentString.length);
  }
  return max;
}
