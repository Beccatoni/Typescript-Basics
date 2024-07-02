// let age: number = 20;
// let company: string = 'Acme corp';
// let isPublished: boolean = true;

// let ids: number[] = [1, 2, 3, 4, 5];
// let x: any = 'pedro';
// let xArr: any[] = ['pedro', 0, true]

// const concatenateValues = (a:string, b:string) =>{
//     return a + b;
// }

// console.log(concatenateValues('5','10'));

// objects:

// interface UserInterface{
//     id: number;
//     name: string;
//     age?: number;
//     greet(message: string): void ;
// }

// const user: UserInterface = {
//     id: 2,
//     name: "Pedro",
//     // age: 22
//     greet(message){
//         console.log(message);
//     }
// }

// if(!user.age){
//     console.log("No age of the user specified");
// } else{
//     console.log(user.age);
// }
// // console.log(user.age);

// user.greet('Hi')


// unions
// type IDFieldType = string | number;

// const printID = (id: IDFieldType) => {
//     console.log(`ID: ${id}`)
// }

// printID(348455763904)

// intersections

// interface BusinessPartner {
//     name: string;
//     creditScore: number;

// }

// interface UserIdentity {
//     id: number;
//     email: string;
// }

// type Employee = BusinessPartner & UserIdentity

// const signContract = (employee: Employee): void => {
//     console.log(`Contract signed by ${employee.name} with email ${employee.email}`)
// }

// signContract({name: 'jane', creditScore: 900, id: 23, email: 'jane@gmail.com'});


// enums
//  unauthorized, use doesn't exist, wrong credentials, internal 
// enum LoginError {
// Unauthorized = 'unauthorized',
// NoUser = "use doesn't exist",
// WrongCredentials = 'wrongcredentials',
// Internal = 'internal'
// }
// const printErrorMsg = (error: LoginError) => {
// if(error == LoginError.Unauthorized){
//     console.log("User not authorized");
// } else if(error == LoginError.NoUser){
//     console.log('No user was found with that userName.');
// } else if(error == LoginError.WrongCredentials){
//     console.log('Wrong username/ password combination');
    
//  } else{
//     console.log('Internal Error');
    
//  }
   
// }

// printErrorMsg(LoginError.Unauthorized)




// generics

// class StorageContainer<T> {
//    private contents: T[]

//    constructor(){
//     this.contents = []
//    }

//    addItem(item:T):void{
//        this.contents.push(item);
//    }

//    getItem(idx:number): T | undefined{
//        return this.contents[idx];
//    }
// }


// const usernames = new StorageContainer<string>();

// usernames.addItem('becca');
// usernames.addItem('toni');
// console.log(usernames.getItem(1));


// const friendsCount = new StorageContainer<number>();

// friendsCount.addItem(34);
// friendsCount.addItem(50);
// console.log(friendsCount.getItem(1));



// read-only : defined once but will never change
interface Employee {
    readonly employeeId: number;
    readonly startDate: Date;
    
    name: string;
    department: string;
}

const employee : Employee = {
    employeeId: 123,
    startDate: new Date(),
    name: 'Becca',
    department: 'Finance'
}

employee.name = 'Nana';
console.log(employee);




