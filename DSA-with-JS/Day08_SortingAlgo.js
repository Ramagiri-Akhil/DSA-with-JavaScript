/*
    Day 07 - Sorting Algorithms
    1 Bubble Sorting
    2 Selection Sorting
    3 Insertion Sorting
*/

// 1 Bubble Sorting;
let arr = [13,24,5,24,12,3];
let n = arr.length

for(let i = 0; i < n-1 ; i ++){
    for(let j = 0 ; j < n-1-i; j++){
        if(arr[j]> arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
    }
}
console.log(arr);

// 2 Selection Sorting


for(let i = 0; i < n-1; i++){
    let minIndex = i
    for(let j = i +1; j < n ; j++){
        if(minIndex > arr[j]){
            minIndex = arr[j]
        }if(minIndex!==i){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp
        }
    }
}
console.log(arr);


// 3 Insertion Sorting
for(let i = 1; i < n ; i ++){
    let j = i -1;
    let key = arr[i];
    while(j >= 0 && arr[j]> key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key
}
console.log(arr);

