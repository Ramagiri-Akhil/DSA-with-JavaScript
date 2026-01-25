/* Day 06 Advance Arrays
    topics covered:
    1 Left rotation by 1 element
    2 Right rotation by 1 element
    3 Left rotation by k element
    4 Right rotation by k element
*/

// 1 Left rotation by 1 element


let arr  = [1,2,3,4,5]

// let copy = arr[0];
// for( let i = 0;i < arr.length-1;i++ ){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1]=copy
// console.log(arr);


// 2 Right rotation by 1 element

// let Copy = arr[arr.length-1];
// for(let i = arr.length-1 ; i > 0; i--){
//     arr[i] = arr[i-1]
// }
// arr[0]=Copy;
// console.log(arr);


// 3 Left rotation by k element

// Method 1

// let k = Number(prompt("Enter K value :"));
// k = k%arr.length
// for( let j = 0; j < k; j++){
//     let copy = arr[0];
//     for ( let i = 0; i < arr.length-1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr);

// Method 2 (Efficient alogorithm)

// let k = Number(prompt("Enter K value:"))
// k = k % arr.length;
// let temp = new Array(arr.length);
// for ( let i = 0; i < arr.length; i++){
//     temp[i] = arr[ (i+k)%arr.length]
// }
// console.log(temp);

// Method 3 (Block swap alogorithm)

// let k = Number(prompt("How many times do you want to rotate to left?"));
// k = k % arr.length;

// reverse(0 , k-1)
// reverse(k , arr.length-1)
// reverse(0 , arr.length-1)

// function reverse(i,j){
//     while( i < j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//         i++;
//         j--;
//     }
// }
// console.log(arr);


// 4 Right rotation by k element

// Method 1

// let k = Number(prompt("Enter K value :"));
// k = k%arr.length
// for( j = 0; j < k; j++){
//     let copy = arr[arr.length-1]
//     for(let i = arr.length-1; i > 0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0]= copy
// }
// console.log(arr);


// Method 2 (Efficient)

// let k = Number(prompt("Enter K value:"))
// k = k % arr.length;
// let temp = new Array(arr.length);
// for ( let i = arr.length-1; i >= 0; i--){
//      temp[ (i+k)%arr.length] = arr[i]
// }
// console.log(temp);


// Method 3 (Block swap method)
let k = Number(prompt("How many times do you want to rotate to Right?"));
k = k % arr.length;

reverse(0,arr.length-1)
reverse(0,k-1)
reverse(k,arr.length-1)

function reverse(i,j){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--
    }
}
console.log(arr);