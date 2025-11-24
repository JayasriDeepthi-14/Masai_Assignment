// L1 - Multi-Level Array and Object Destructuring
const formatPeople = (people) => {
  return people.map(({ name, address: { city, street: { name: streetName } } }) =>
    `${name} lives in ${city} on ${streetName}`
  );
};
const people = [
  { 
    name: "Alice", 
    address: { 
      city: "New York", 
      street: { name: "Broadway", number: 123 } 
    } 
  },
  { 
    name: "Bob", 
    address: { 
      city: "Los Angeles", 
      street: { name: "Sunset Boulevard", number: 456 } 
    } 
  }
];
console.log(formatPeople(people));