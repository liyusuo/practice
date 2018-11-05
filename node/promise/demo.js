function ajax(url,type='get',dataType='json') {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload = function () {
            if(xhr.status === 200){
                resolve(xhr.response); //成功调用方法
            }else {
                reject('not found')
            }
        };
        xhr.onerror = function (err) {
            reject(err); // 失败调用方法
        };
        xhr.send();
    })
}