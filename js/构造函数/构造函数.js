// 单例模式
/*var person = {
    name:"张三",
    age:'李四',
    write:function () {
        console.log(this.name)
    }
}
person.write();*/

// 工厂模式

function createPerson(name,age) {
    obj={};
    obj.name = name;
    obj.age = age;
    obj.write = function () {
        console.log(this.name)
    }
    return obj
}
var p1 = createPerson("李四",18)
p1.write();

// 构造函数模式

function CreatePerson(name,age) {
    this.name = name;
    this.age = age;
    this.write = function () {
        console.log(this.name)
    }

}
var p2 = new CreatePerson("李四",18)
p2.write();
