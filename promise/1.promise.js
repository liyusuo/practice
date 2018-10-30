function Promise(executor) {
    let self = this;
    // 保存成功的值和失败的原因
    self.value = undefined;
    self.reason = undefined;
    function resolve(value) {
        self.value = value;
    }
    function reject(reason) {
        self.reason = reason;
    }
    executor(resolve,reject)
}
module.exports = Promise