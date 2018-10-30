/*function bubbleSort(arr) {
    for(let i = 0,l=arr.length;i<l-1;i++) {
        for(let j = i+1;j<l;j++) {
            if(arr[i]>arr[j]) {
                console.log(arr[i] + '   i')
                console.log(arr[j] + '   j')
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}
let arr1 = [15,456,564,2]
console.log(bubbleSort(arr1));*/



function quickSort(arr) {

    if(arr.length<=1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for(let i = 1,l=arr.length; i<l; i++) {
        if(arr[i]>q) {
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}
let arr1 = [15,456,564,2,456,1238,6,89754,1,56,84,643,2]
console.log(quickSort(arr1))