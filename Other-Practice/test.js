const throttle = (fn, ms) => {
  return () => {
    fn();
  }
}

const fn = () => {
  console.log('hello');
}

const f = throttle(fn, 3000);

f();
f();
f();
f();
f();
setTimeout(() => {
  f();
  f();
  f();
  f();
  f();
}, 3000)
