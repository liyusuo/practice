let fs = require('fs');
let path = require('path')

// 异步创建文件夹
/*
function mkdir(p,callback) {
    let dirs = p.split('/');
    let index = 0
    function next() {
        if(index === dirs.length) return callback();
        let cuurentPath = dirs.slice(0,++index).join('/');
        fs.access(cuurentPath,function (err) {
            if(err){
                fs.mkdir(cuurentPath,function () {
                    next();
                });
            }else {
                next();
            }
        })
    }
    next();
}


mkdir('a/b/c',function () {
    console.log('创建完成')
})*/

//同步删除文件夹
/*let dirs = fs.readdirSync('a');
dirs = dirs.map(d=>path.join('a',d));
dirs.forEach(d=>{
    let statObj = fs.statSync(d)
    if(statObj.isDirectory()){
        fs.rmdirSync(d)
    }else {
        fs.unlinkSync(d)
    }
});
fs.rmdirSync('a')*/

// 同步 先序深度优先 删除目录
function removeDepSync(p) {
    let statObj = fs.statSync(p)
    if(statObj.isDirectory()){
        let dirs = fs.readdirSync(p);
        dirs = dirs.map(d=>path.join(p,d))
        dirs.forEach(d=>{
            removeDepSync(d);
        });
        fs.rmdirSync(p);
    }else {
        fs.unlinkSync(p)
    }
}

removeDepSync('m')



