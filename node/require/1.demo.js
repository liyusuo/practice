// 先实现一个require方法
// Modoule._load 加载模块
// Moudule._resolveFilename 解析文件 把相对路径解析成绝对路径，会添加后缀
// 是否又缓存 有缓存就把exports对象返回回去
// new Module 创建一个模块
// 每一个模块上都有一个id代表的是当前的绝对路径 还有一个exports对象
// Module._cache 是用来缓存模块的 缓存的key是绝对路径
let path = require('path')
let fs = require('fs')
function Module(id) {
    this.id = id;
    this.exports = {};
}
Module._extensions = {
    '.js'(module){
        module.exports = fs.readFileSync(module.id,'utf8');
    },
    '.json'(module){
        module.exports = JSON.parse(fs.readFileSync(module.id,'utf8'));
    }
}
Module.resolveFliename = function(filename){
    let r = path.resolve(__dirname,filename)
    if(!path.extname(r)){
        let extnames =  Object.keys(Module._extensions);
        for(let i = 0 ; i<extnames.length;i++){
            let p = r  +extnames[i];
            try {
                fs.accessSync(p);
                return p
            }catch (e) {}
        }
    }
}
Module._load = function (filename) {
    let asbPath = Module.resolveFliename(filename)
    let module = new Module(asbPath)
    let ext = path.extname(module.id);
    Module._extensions[ext](module);
    return module.exports
}
function req(id) {
    return Module._load(id)
}

let r =req('./1')
console.log(r)
