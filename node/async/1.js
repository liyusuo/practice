function add(sum) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(sum*3)
        },1000)
    })
}

async function a() {
   let zhi1 = await add(30);
   let zhi2 = await add(30);
   let zhi3 = await add(30);
   console.log(zhi1);
   console.log(zhi2);
   console.log(zhi3);
}
a()