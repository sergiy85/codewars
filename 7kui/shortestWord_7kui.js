/* ================= Shortest Word =======================================
*7 kui

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let str = s.split(' ');
    let shortStr = str.sort(function(a,b){
        return a.length - b.length;
    });
    
    return shortStr[0].length;
}

 console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
 console.log(findShort("turns out random test cases are easier than writing out basic ones"));
 