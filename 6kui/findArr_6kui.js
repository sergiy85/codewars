/* ================ Find the unique number ====================
* 6kui

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique

*/

const arr = [];
function findUniq(arr) {
    
    arr.sort(function(a,b){
        return a-b;
    });  
    
    for(i=0; i<arr.length; i++){
        if((arr[i] != arr[i-1]) && (arr[i+1] != arr[i]) ){
            return arr[i];
        }
    }  
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 0, 1, 1]));
console.log(findUniq([1, -1, 1, 1, 1]));