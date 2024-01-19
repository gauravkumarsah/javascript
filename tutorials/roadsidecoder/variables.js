// scopes:

// GlobalScope,
var z = 'global z';
let x = 'global x';
const y = 'global y';
// functional Scope,

function Scope() {
  let x = 'funcational x';
  const y = 'funcational y';
  //   var z = 'funcational z';
  z = 'funcational2 z';

  console.log('function', z);
  console.log('function', y);
  console.log('function', x);
}

// Scope();

// console.log('outside function', z);
// console.log('outside function', y);
// console.log('outside function', x);

// block scope,

{
  let x = 'block x';
  const y = 'block y';
  var z = 'block z';

  //   console.log('block', z);
  //   console.log('block', y);
  //   console.log('block', x);
}

// console.log('outside block', z);
// console.log('outside block', y);
// console.log('outside block', x);

// SHADOWING

// function shadowing() {
//   let x = 'shadow x';
//   const y = 'shadow y';
//   var z = 'shadow z';

//   {
//     let x = 'not shadow x';
//     const y = 'not shadow y';
//     var z = 'not shadow z';
//     console.log('shadow', z);
//     console.log('shadow', y);
//     console.log('shadow', x);
//   }

//   console.log('not shadow', z);
//   console.log('not shadow', y);
//   console.log('not shadow', x);
// }

// shadowing()


// 
// TEMPORAL  DEAD ZONE
// 

const temporalDeadZone = () => {
  // TEMPORAL DEAD ZONE: is a place where
  // the variables are in scope but not yet defined
  console.log(' NO TEMPORAL DEAD ZONE FOR VAR', z);
  console.log('temporal dead zone', y);
  console.log('temporal dead zone', x);

  let x = 'shadow x';
  const y = 'shadow y';
  var z = 'shadow z';
};

temporalDeadZone();
