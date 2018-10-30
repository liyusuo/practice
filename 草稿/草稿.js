/*let arr = [
            {price:5,count:10},
            {price:2,count:10},
            {price:3,count:10},
            {price:10,count:10},
            {price:20,count:10},
          ]
Array.prototype.myReduce = function (callback,prev) {
    for (let i = 0 ; i<this.length; i++){
        if(typeof prev !== "undefined" ){
            prev = callback(prev,this[i],i,this)
        }else {
            prev = callback(this[i],this[i+1],i,this)
            i++
        }
    }
    return prev
}
console.log(arr.myReduce(function (prev,next) {
    console.log(prev ,next)
    return prev+next.price*next.count
},0))*/





/*let quchong = function(arr) {
    let hashTable = {};
    let data = [];
    for(let i=0,l=arr.length;i<l;i++) {
        console.log(hashTable[arr[i]])
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data
}
console.log(quchong([1,1,1,2,1,3,4,5,6,1,8,7]))


let a = {
    1:undefined,
    2:undefined,
}*/
/*console.log(!a[2])*/



/*function findMaxDuplicateChar(str) {
    if(str.length == 1) {
        return str;
    }
    let charObj = {};
    for(let i=0;i<str.length;i++) {

        if(!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        }else{
            charObj[str.charAt(i)] += 1;
        }
    }
    console.log(charObj)
    let maxChar = '',
        maxValue = 1;
    for(var k in charObj) {
        console.log(k)
        if(charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar;
}
findMaxDuplicateChar("liyusuolllluuuuu")*/

//取一个字符串里面出现最多的字母
/*function fn1(str) {
    let obj = {};
    for (let i = 0 ; i<str.length ; i++){
        if(!obj[str.charAt(i)]){
            obj[str.charAt(i)] = 1
        }else {
            obj[str.charAt(i)] += 1
        }
    }
    let maxval = '',sum = 1;
    let arr = [];
    for (k in obj){
        if (obj[k]>=sum){
            maxval = k
            sum = obj[maxval]
            if(obj[k] = sum){
                arr.push(k)
            }
        }
    }
    console.log(obj)
    console.log(maxval)
    console.log(sum)
    console.log(arr)
}
fn1("asdaaa")*/

let obj = {};
let arr = [];
let stu = [
    {name:'Vince',label:'lively'},
    {name:'Bob',label:'sunshine'},
    {name:'Liysuo1',label:'happy'},
    {name:'Liysuo2',label:'happy'},
    {name:'Liysuo3',label:'happy'}
    ]
for (let i =0  ; i<stu.length; i++){
    if(!obj[stu[i].label]){
        obj[stu[i].label] = stu[i]
    }else {

        arr.push(stu[i])
        obj[stu[i].label] = arr
    }
}
console.log(obj)
/*for (let i =0  ; i<stu.length; i++){
   if(!obj[stu[i].label]){
       obj[stu[i].label] = 1;
   }else {
       obj[stu[i].label] += 1;
       arr.push(stu[i])
   }
}
for (k in obj){
    if (obj[k]>1){
        obj[k] = arr
    }
}
console.log(obj)*/


