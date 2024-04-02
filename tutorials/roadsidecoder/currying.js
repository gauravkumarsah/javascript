function curried(cb) {
  return function curriedFn(...args) {
    if (args.length >= cb.length) {
      return cb(...args);
    } else {
      return function (...nextArgs) {
        return curriedFn(...args, ...nextArgs);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const curried = curry(sum);

console.log(curried(3)(4)(6));
console.log(curried(3, 4, 6));
console.log(curried(3)(4, 6));
console.log(curried(3, 4)(6));

console.log('currying');
