/*
 * 6. Write a TypeScript program that converts a variable of one type 
 * to another using type assertions and type conversion functions 
 * like parseInt(). 
 * 
 */

// Using type assertion to convert a string to a number 
let str_num:string = "100"
let strToNum : number = parseInt(str_num);

console.log(`Number from assertion: ${strToNum}`);

// Using type assertion to convert a number to a string
let numValue: number = 200
let nmToStr: string = numValue.toString();
console.log(`String from assertion: ${nmToStr}`);



