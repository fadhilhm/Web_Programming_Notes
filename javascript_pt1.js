let a = 12;
let b = 20;

console.log(a == b);

let str1 = 'Hello world1'; // single quoted string
let str2 = "Hello world2"; // double quoted string 
let str3 = `Hello world3`; // template string, can use ${}

let concat = `${str1} ${str3}`
let res = `${a * b}`

console.log(res);
console.log(concat);

let arr = [[1,10,9,3], [3,4]]

console.log(arr[0][1]);
console.log(arr[0].length);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    bodyHeight: 176,
    bodyWeight: 72
};

for (let attr in person) {
    console.log(attr);
} 

console.log(person)