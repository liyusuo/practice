let obj = {
    name:'liyusuo',
    age:20,
    fn:{a:10}
}
Object.prototype.aaa = function () {
    
}

function copy(obj) {
    let newobj = {};
    for (k in obj){
        console.log(k)
        if(typeof newobj[k] == 'object' ){
            newobj[k] = copy(obj[k])
        }
        else {
            newobj[k] = obj[k]
        }
    }
    return newobj
}
let obj1  = copy(obj)
console.log(obj1.fn === obj.fn )
