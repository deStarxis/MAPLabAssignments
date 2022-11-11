// one way using the function logic and promise separately
// const isPrime = function (num) {
//   return new Promise((resolve, reject) => {
//     let value = true;
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//       if (num % i === 0) {
//         value = false;
//       }
//     }
//     setTimeout(() => {
//       if (value) {
//         resolve(`prime: ${value}`);
//       } else {
//         reject(`prime: ${value}`);
//       }
//     }, 500);
//   });
// };

// another way using promise directly in the logic
const isPrime = function (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) reject({ prime: false });
      resolve({ prime: num > 1 });
    }, 500);
  });
};

console.log("start");
isPrime(5)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
console.log("end");

// Output:
// start
// end
// { prime: true }
