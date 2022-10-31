// using map and simple function
let numbers = new Map();
function fibonacci(n) {
  let value;
  if (numbers.has(n)) {
    value = numbers.get(n);
  } else {
    if (n <= 1) {
      value = n;
    } else {
      value = fibonacci(n - 1) + fibonacci(n - 2);
    }
    numbers.set(n, value);
  }
  return value;
}

function fibonacci2(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.time("Memoized Version");
console.log(fibonacci(8));
console.timeEnd("Memoized Version");

// using object and modulepattern
let fibonacci3 = (function () {
  let value = {};
  function f(n) {
    let num;
    if (value[num]) {
      num = value[num];
    } else {
      if (n <= 1) {
        num = n;
      } else {
        num = f(n - 1) + f(n - 2);
      }
      value[num] = num;
    }
    return num;
  }
  return f;
})();

console.time("Memoized Version Using Object and Module Pattern");
console.log(fibonacci3(8));
console.timeEnd("Memoized Version Using Object and Module Pattern");

console.time("Not Memoized Version");
console.log(fibonacci2(8));
console.timeEnd("Not Memoized Version");
