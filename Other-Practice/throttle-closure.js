const throttle = (fn, ms) => {
  let inThrottle;
  return () => {
    if(!inThrottle) {
      fn();
      inThrottle = true;
      setTimeout(() => inThrottle = false, ms);
    }
  };
}

const fn = () => {
  console.log('Hello');
}

const f = throttle(fn, 4000);

f();
f();
f();
f();
f();
f();
//3s later
setTimeout(() => {
  f();
  f();
  f();
  f();
  f();
  f();
}, 3000);
