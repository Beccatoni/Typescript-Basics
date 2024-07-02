/*
2. Write a TypeScript program that declares variables using let, 
const, and var. Then, describe how each declaration type behaves
with respect to scoping and mutability.  
*/

const var1:string = 'constant';
let var2: string = 'reassigned only';
var var3: string = 'reassigned and redeclared';


// using let (Block-scoped)

let myVariable1: number = 5;

if(true){
    let myVariable1: number = 10; // this is a different variable within the block scope.
}

console.log(myVariable1); // output: 5 (the outer variable)

const myVariable2: string ='Hello';

//myVariable = 'World'; // Error: Cannot reassign a const variable

// Using var (Function-scoped, mutable)

function exampleFunction(){
    var myVariable3: boolean = true;
    if(myVariable3){
        var  myVariable3: boolean = false; //This redeclares the same variable within the function scope.
        console.log(myVariable3);
        
    }
}
exampleFunction();
