/* ================ String incrementer (5 kui)======================

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


*/

function incrementString (str) {
    if(str != null){
        if(str !== ''){
        
        let re = /\D+/ig;
        let r = +str.replace(re, '');
        let i = ++r;
        let res = /[a-z]+/gi;
        let matches = str.match(res);
        let s = matches.join('') + i;
        
        if(s.length >= str.length) { 
            return s;
            }
        else if(s.length < str.length){
            let strNewRes = '0';
            let n = str.length - s.length;
            return matches.join('') + strNewRes.repeat(n) + i;
        }
        else{
            return matches.join('') + '1';
          }
        
        }
        else{
            return '1';
        }
    }
    else{
        return '1';
    }

}

  console.log(incrementString (''));
  console.log(incrementString ('foo99'));
  console.log(incrementString ('foo000'));
  console.log(incrementString());




//   function incrementString(strng) {
//     let baseString = strng;
//     let substring;
//     let substringLength;
//     let substringIndex;
//     let regexMatch;
//     let incrementedSubString;
//     let extractNumsRegEx = /([0-9])+/;
//     let extractZeroesRegEx = /([0])/;
  
//     if (!baseString.match(extractNumsRegEx)) {
//       return baseString + 1;
//     } else {
//       regexMatch = baseString.match(extractNumsRegEx);
//       substring = regexMatch[0];
//       substringLength = regexMatch[0].length;
//       substringIndex = regexMatch.index;
//     }
  
//     //split string in array to remove nums
//     baseString = baseString.split('');
//     for (let i = 1; i <= substringLength; i++) {
//       baseString.pop();
//     }
  
//     //wrote separate function to increment number
//     incrementedSubString = incrementSubString(substring, substringLength);
//     return baseString.join('') + incrementedSubString;
//   }
  
//   function incrementSubString(str, len) {
//     let numToIncrement = +str;
//     numToIncrement += 1;
//     if (numToIncrement.length === len) {
//       return "" + numToIncrement;
//     } else {
//       //the else statement adds the leading zeroes
//       numToIncrement = numToIncrement.toString();
//       while (numToIncrement.length < len) {
//         numToIncrement = 0 + numToIncrement;
//       }
//       return numToIncrement;
//     }
//   }


