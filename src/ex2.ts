/**
 3. Write a TypeScript program that declares variables 
 of the following data types: number, string, boolean, 
 and undefined. Assign values to them and perform basic operations.  
 */

 let a: number = 20
 let b: string = 'God is good!'
 let c: boolean = true
 let d: undefined 
 console.log(d);
 console.log(a + b)
 console.log(c);

//  solution
// declare variables
let n1: number = 42;
let str1: string = 'Hello her, TypeScripy is fun👌'
let bool1: boolean = true
let undef: undefined = undefined

// basic operations
const n2:number = 80

// addition
const sum: number = a + n2
console.log(`Sum of the two given numbers is ${sum}`);

// string concantenation
const concatenatedString = `${str1} Yeah, it seems hard but I'll know better!`
console.log(`The concantenated string is now: ${concatenatedString}`);

// Logical operation
const isTrue: boolean = bool1 && true;
console.log(`Logical AND: ${isTrue}`);

// Check if undefined
if (undef === undefined){
    console.log(`Undefined variable is undefined.`);
} else{
    console.log(`Undefined variable is defined`);
    
}
 
 