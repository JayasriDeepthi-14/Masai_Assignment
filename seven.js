// Spread, Rest & Destructuring

// a
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log(merged);

// b
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log(sum(1, 2, 3, 4)); 

// c
const {
  name,
  address: { city, pin }
} = user;
console.log(name, city, pin); 