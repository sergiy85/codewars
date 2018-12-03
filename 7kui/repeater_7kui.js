/* Thinkful - String Drills: Repeater
 *7 kui

Write a class function named repeat() that takes two arguments (a string and a long integer), 
and returns a new string where the input string is repeated that many times. For example:

Repeater.repeat("a", 5)

should return

"aaaaa"


*/

function repeater(string, n){
   return string.repeat(n);
  }

 console.log(repeater('a', 5));
 console.log(repeater('Na', 16));
 console.log(repeater('Wub ', 6)); 