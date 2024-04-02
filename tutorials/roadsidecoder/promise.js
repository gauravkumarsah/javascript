
const PromisePolyfill = function (executor) {
  let value,
    onResolve,
    onReject,
    isRejected = false,
    isFulfilled = false,
    isCalled = false;

  function resolve(val) {
    value = val;
    isFulfilled = true;
    if (typeof onReject === 'function') {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(err) {
    error = err;
    isRejected = true;
    if(typeof onReject === 'function') {
        onReject(err);
        isCalled = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;

    if (isFulfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if(!isCalled && isRejected) {
        onReject(error);
        isCalled = true;
    }
    return this;
  };

  executor(resolve, reject);
};
const consolePrint = new PromisePolyfill((resolve, reject) => {
  //   setTimeout(() => resolve('resolve'), 1000)
  reject('resolve');
});

consolePrint.then((res) => console.log(res)).catch((err) => console.error(err));
