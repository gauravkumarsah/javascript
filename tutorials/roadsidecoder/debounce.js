const btn = document.querySelector('.increment_btn');
const btnPressed = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_count');

let triggered = 0;
let pressed = 0;

function myDebounce(fn, delay) {
  let timer;

  return function () {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() =>{
      fn.call()

    }, delay);
  }
}



function myThrottle(fn, delay) {
   let start = 0;

   return function () {
    let now = new Date().getTime();

    if(now - start > delay){
      fn.call()
      start = now;
    }
   }
}




const debounced = myDebounce(() => {
  triggered += 1;
  count.innerHTML = triggered;
}, 400);

const throttled = myThrottle(() => {
  triggered += 1;
  count.innerHTML = triggered;
}, 400);

btn.addEventListener('click', () => {
  btnPressed.innerHTML = ++pressed;
    debounced();
  // throttled();
});
