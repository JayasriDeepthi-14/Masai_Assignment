// Scoping & Optional Chaining

// a

/*

code:- 
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

output:-
20
ReferenceError: x is not defined

Explanation:-
var is function-scoped, not block-scoped. so y is accessible outside the if block.
let is block-scoped. so x exists only inside the {} block

*/

// b
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone);  

// c
const data = {};
console.log(data?.user?.profile?.name); 