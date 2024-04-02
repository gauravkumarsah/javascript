// const aPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 100);
// });

// Promise.allPolyfill = function (promises) {
//   return new Promise(function (resolve, reject) {
//     let result = [];

//     let pending = promises.length;

//     if(pending === 0) {
//         resolve(result);
//         return
//     }
//     promises.forEach((promise) => {
//       Promise.resolve(promise).then((res) => {
//         result.push(res)
//         pending--

//         if(pending === 0) {
//             resolve(result);
//         }
//     }, reject);
//     });
//   });
// };

Promise.allPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let pending = promises.length;

    if(pending === 0) {
      resolve(result);
      return
    }

    promises.forEach((promise) => {
      promise.then((res) => {
        result.push(res);
        pending--;

        if(pending === 0) {
          return resolve(result);
        }
      }, reject)
    });
  });
};

const aPromise = new Promise((resolve, reject) => {
  resolve('a');
});
const bPromise = new Promise((resolve, reject) => {
  resolve('b');
});
const cPromise = new Promise((resolve, reject) => {
  resolve('c');
});
const dPromise = new Promise((resolve, reject) => {
  resolve('d');
});

Promise.allPolyfill([aPromise, bPromise, cPromise, dPromise])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error('Failed', err));
