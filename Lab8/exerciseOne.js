const isPrime = function (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) reject({ prime: false });
      resolve({ prime: num > 1 });
    }, 500);
  });
};

const primeAsync = async (num) => {
  try {
    let result = await isPrime(num);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

console.log("start");
primeAsync(4);
console.log("end");

// Output:
// start
// end
// { prime: true }
