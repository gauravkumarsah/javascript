let car1 = {
  color: 'red',
  company: 'Ferrari',
};

function purchaseCar(currency, price) {
  console.log(`I have purchased a car from ${this.company} with ${currency}`);
}


Function.prototype.myApply = function( context ={}, args=[]){
  if(typeof this !== 'function') {
    throw new Error(`${this} is not a function`)
  }

  fn = this
  fn(...args)
}

// Function.prototype.myCall = function (context={} , ...args) {
//   if(typeof this !== 'function') {
//     throw new TypeError(`${this} is not a function`)
//   }

//   context.fn = this
//    context.fn( ...args)

// }

// Function.prototype.myBind = function(context ={} || this, ...args){

//   if(typeof this !== 'function'){
//     throw new TypeError(`${this} must be a function`)
//   }

//   context.fn = this
//   return function(...nextArgs){
//     return context.fn(...args, ...nextArgs)
//   }
// }

// const text = purchaseCar.myBind(car1);
// text(400);


// purchaseCar.myCall(car1, 434);

const numArray = [11, 12, 13, 4, 5, 6, 7, 8]

const  sum = (a, b) => a + b

let res = sum.apply(0, numArray)

console.log(res)
