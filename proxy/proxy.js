let obj = { name: 'zfpx', age: 9,sun:{name:'zhpx2'} }

let p = new Proxy(obj, {
    get(target, key) {
        //return target[key]
        console.log(1)
        return Reflect.get(target, key)
    },
    set(target, key, value) {
        console.log(2)
        return Reflect.set(target, key, value);
    }
})


