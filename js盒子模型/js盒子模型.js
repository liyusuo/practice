// 1、client系列
// clientWidth/clientHeight:内容的宽度/高度+左右/上下填充

//2、offset系列
// offsetWidth/offsetHeight:clientWidth/clientHeight+左右/上下边框

//3、scroll系列
// scrollWidth/scrollHeight:和我们的clientWidth/clientHeight一模一样（前提时没有溢出的情况）
// scrollLeft/scrollTop:滚动条卷去的高度/宽度

// 编写一个有关于操作浏览器盒子模型的方法
// 如果只传递了attr没有传递value，默认的意思是获取
// 如果都传了，意思就是“设置”
function win(attr,value) {
    if(typeof  value === "undefined"){
        return document.documentElement[attr] || document.body[attr];
    }
    document.documentElement[attr] = value;
    document.body[attr] = value;
}



