// 1. Template Literals + Expressions
// a
console.log("Template expression:");
console.log(`5 + 7 = ${5 + 7}`);
// b
console.log("Multi-line template (3 lines):");
console.log(`Line one
Line two
Line three`);
// c
const firstName = "John", lastName = "Doe";
console.log("Full name using template literal:");
console.log(`${firstName} ${lastName}`);

// 2. Arrow Functions & this
// a
console.log("Convert to arrow (square):");
const square = n => n * n;
console.log("square(5) =", square(5));
// b
console.log("Why undefined with arrow 'this':");
const arrowObj = {
  value: 50,
  test: () => console.log("arrow this ->", this.value) 
};
arrowObj.test();
// c
console.log("Normal function to access this correctly:");
const normalObj = {
  value: 50,
  test: function() { console.log("normal this ->", this.value); }
};
normalObj.test();

// 3. Rest, Spread & Copying Objects
// a
console.log("Shallow copy with spread:");
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);
// b
console.log("Merge two objects with spread:");
const A = { x: 1 }, B = { y: 2 };
const mergedAB = { ...A, ...B };
console.log(mergedAB);
// c
console.log("maxValue using rest:");
const maxValue = (...nums) => (nums.length ? Math.max(...nums) : -Infinity);
console.log("maxValue(3,7,2) =", maxValue(3,7,2));

// 4. Destructuring & Optional Chaining
// a
console.log("Array destructure:");
const arr = [10, 20, 30];
const [a0, b0, c0] = arr;
console.log(a0, b0, c0);
// b
console.log("Object destructure:");
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);
// c
console.log("Optional chaining safe access:");
const info = {};
console.log(info?.user?.name); 

// 5. Scoping (let/var/const)
// a
console.log("var in loop:");
for (var i = 0; i < 3; i++) {}
console.log("i after var-loop:", i); // 3
// b
console.log("\n5.b) let in loop:");
for (let j = 0; j < 3; j++) {}
try { console.log("j after let-loop:", j); } catch (e) { console.log("j after let-loop: ReferenceError"); }
// c
console.log("Why use const:");
console.log("const prevents reassignment and indicates value shouldn't change (safer semantics)");

// 6. Ternary Operator – Practice
// a
console.log("Convert to ternary (speed):");
let kmph = 70;
let speed = (kmph > 60) ? "Fast" : "Normal";
console.log("kmph", kmph, "=>", speed);
// b
console.log("Adult or Minor:");
const adultCheck = age => (age >= 18 ? "Adult" : "Minor");
console.log("age 20 ->", adultCheck(20));
// c
console.log("Positive / Zero / Negative (nested ternary):");
const sign = n => (n > 0 ? "Positive" : (n === 0 ? "Zero" : "Negative"));
console.log("sign(5) ->", sign(5), "sign(0) ->", sign(0), "sign(-2) ->", sign(-2));

// 7. Spread, Rest & Arrays
// a
console.log("Add elements 4,5 with spread:");
const nums = [1,2,3];
const numsExtended = [...nums, 4, 5];
console.log(numsExtended);
// b
console.log("Combine arrays with spread:");
const Aarr = ["x","y"], Barr = ["z"];
console.log([...Aarr, ...Barr]);
// c
console.log("printNames using rest:");
const printNames = (...names) => names;
console.log('printNames("A","B","C") ->', printNames("A","B","C"));

// 8. Object Destructuring & Shorthand
// a
console.log("Destructure:");
const user8 = { id: 101, status: "active" };
const { id, status } = user8;
console.log(id, status);
// b
console.log("Convert to shorthand:");
const idVal = 101;
const role = "admin";
const userShort = { idVal, role, greet() { return `hi ${this.role}`; } };
console.log(userShort, userShort.greet());

// 9. Template Literals (more practice)
// a
console.log("Today's date with template literal:");
console.log(`Today is ${new Date().toDateString()}`);
// b
console.log("Score template:");
const NAME = "ALICE", SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
// a
console.log("One-line arrow add:");
const add = (x,y) => x + y;
console.log("add(2,3) ->", add(2,3));
// b
console.log("isAdult arrow:");
const isAdult = age => age >= 18;
console.log("isAdult(17) ->", isAdult(17));
// c
console.log("double arrow:");
const double = n => n * 2;
console.log("double(5) ->", double(5));

// 11. Spread Operator (arrays & objects)
// a
console.log("Clone array using spread:");
const original = [1,2,3];
const clone = [...original];
console.log(clone);
// b
console.log("Add 100 to beginning:");
const with100 = [100, ...original];
console.log(with100);
// c
console.log("Merge two objects and override property:");
const obj1 = { a: 1, value: 10 };
const obj2 = { value: 20, extra: true };
const mergedObj = { ...obj1, ...obj2 }; // obj2.value overrides
console.log(mergedObj);

// 12. Optional Chaining (More Practice)
// a
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city); 

// b
console.log(user?.job?.title); 

// c
const data = {};                   
console.log(data?.user?.profile?.name);