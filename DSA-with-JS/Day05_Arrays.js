/*Day 05 – Array Related Problems in JavaScript
Topics covered :
    1 Print all elements of an array
    2 Sum of all elements in an array
    3 Find maximum element in array
    4 Find minimum element in array
    5 Reverse an array
    6 Finding Second Max element in a array
7 Swapping all 0's to one side and all 1's to one side
*/

//     1 Print all elements of an array

let arr = [ 10,20,30,40,50];
console.log(arr); 
for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
}


//     2 Sum of all elements in an array

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(`The sum of the elements in the array is:${sum}`); 


//     3 Find max element in array
let max =arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(`The maximum element in the array is:${max}`);


//     4 Find min element in array

let min = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log(`The minimum element in the array is:${min}`);


//     5 Reverse an array

// method 1

let temp = new Array(arr.length)
let j = 0;
for(let i = arr.length-1; i >= 0; i--){
    temp[j] = arr[i];
    j++
}
console.log(`The reversed array is:${temp}`);

//method 2

let reversedArr = [];
for(let i = arr.length-1; i >= 0; i--){
    reversedArr.push(arr[i])
}
console.log(`The reversed array is:${reversedArr}`);

// Method 3

let a =0, b = arr.length-1;

while(a != b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    a++;
    b--;
}
console.log(`The reversed array is:${arr}`);


//     6 Finding Second Max element in a array

let Max = Math.max(arr[0],arr[1]);
let secMax = Math.min(arr[0],arr[1]);

for( let i = 2; i < arr.length; i++){
    if(arr[i]>Max){
        secMax = Max;
        Max = arr[i];
    }
    else if( secMax < arr[i] && max != arr[i] ){
        secMax = arr[i]
    }
}
console.log(`The second maximumm element in the array is:${secMax}`);


// 7 Swapping all 0's to one side and all 1's to one side

let Arr = [1,1,0,1,0,1,1,0,0]
let c = 0, d =0;
while(c<Arr.length){
    if(Arr[c]==0) {
    let temp = Arr[c];
    Arr[c] = Arr[d];
    Arr[d] = temp;
    d++
    }
    c++
}
console.log(Arr);//  output : [0, 0, 0, 0, 1, 1, 1, 1, 1]


// 8 Swapping all negative elements to left and positive to right 

let sample = [-7, 14, -3, 9, -21, 5];
let e = 0, f = 0;
while(e < sample.length){
    if(sample[e] < 0){
        let temp = sample[e];
        sample[e] = sample[f];
        sample[f] = temp;
        f++
    }
    e++
}
console.log(sample);

