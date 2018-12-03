/* ================ Reverse a Number (7kui) =====================

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1

*/



function reverseNumber(n) {
    let str = String(n); // преобразуем число к строке   
    let arr = str.split(''); //преобразуем строку в массив
    
        if(arr[0] !== '-'){
            arrRev = arr.reverse(); // полученный массив перевернем наоборот            
            result = arrRev.join(''); //склеим массив обратно в строку    
            return +result; //и вернем результат, преобразовав к числу(чтобы избежать нулей вначале)!
        }else{
            arrRev = arr.reverse(); 
            result = arrRev.pop() + arrRev.join(''); // удаляем минус из конца массива и переносим его вначало 
            return +result;
        }               
  }
  
  console.log(reverseNumber(123));
  console.log(reverseNumber(-123));
  console.log(reverseNumber(456));
  console.log(reverseNumber(11000));


//Альтернативное решение - №1

//   function reverseNumber(n) {
//   let isNegative = n < 0;  
//   let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
//   let result = Number(reverseAsString);
  
//   return isNegative ? -result : result;
// }

//Альтернативное решение - №2
// reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')