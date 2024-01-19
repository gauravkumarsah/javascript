// Roadside coder youtube

function fnThis() {
    console.log('this regular function', this);
  
    const arrowFnInsideFn = () =>
      console.log('this arrow function inside fn', this);
    arrowFnInsideFn();
  }
  
  const arrowFnThis = () => console.log('this arrow function', this);
  
  const obj = {
      name: 'foo',
    child() {
      const name = 'child'
      const chic = () => console.log('this obj child arrow', this.name)
      chic()
  },
    objArrow: () => console.log('this obj arrow', this),
    obj: function () {
      console.log('this obj', this);
    },
  };
  
  // console.log("this global", this)
  // obj.obj()
  obj.child()
  // obj.objArrow()
  // arrowFnThis()
  // fnThis();
  