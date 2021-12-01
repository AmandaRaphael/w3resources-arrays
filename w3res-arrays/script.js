//q1
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("."));
//q2
let first = function (array, n) {
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([], -3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
//q3
let last = function (array, n) {
    if (n == null) return array[array.length - 1];
    //if(n>array.length)return array;
  return array.slice(Math.max(array.length - n, 0));//slice(start)=>from that start value to the rest.
};
//mathmax(-2,0)=>0
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
//q4
let array_Clone = function (array1) {
  return array1.slice(1);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
//q5
let v1 = { name: "John", age: 18 };
let v2 = ["red", "green", "blue", "yellow"];
let v3 = [1, 2, 3, 4, 5];
let v4 = null;
let nameOfbrand="NagaApparel"
console.log(Array.isArray(v1));// Returns: false
console.log( Array.isArray(v2));// Returns: true
console.log( Array.isArray(v3));// Returns: true
console.log( Array.isArray(v4));// Returns: false
console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));
console.log(Array.isArray(nameOfbrand));



   
    
   
  
