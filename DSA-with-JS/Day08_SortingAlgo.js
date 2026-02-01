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

// 4 Merge Sorting

var SortArr = function(arr){
    return  MergeSort(arr)
}
function MergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    let left = MergeSort(arr.slice(0,mid));
    let right = MergeSort(arr.slice(mid));
    return merge(left,right)
}
function merge(left, right){
    let result = [];
    let i = 0,j=0
    while(i < left.length && j < right.length){
        if(left[i]< right[j]){
            result.push(left[i]);
            i++
        }else{
            result.push(right[j]);
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

let sorted = SortArr(arr);
console.log(sorted);
