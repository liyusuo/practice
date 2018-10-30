let arr = [];
for (let i = 0 ; i<100;i++){
    arr.push(i)
}


function shuffle(arr) {
    return arr.sort(()=>Math.random() - .5)
}

let a = shuffle(arr)
console.log(a)
