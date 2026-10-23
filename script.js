// MODULE 1-6 TASKS

console.log("Hello, World!");
console.log("harini");
let ename="dance"
let lname="singing";
const price=150;
console.log(ename);
console.log(lname);
console.log(price);
let dat=78;
console.log(dat);
console.log(Number("12")+3);
console.log(String(25));
console.log(Boolean(0));
console.log("12"+3);
console .log("12"-3);
let age=25;
let seatsleft=5;
if (age>=18 && seatsleft > 0){
    console.log("you can register");
}
else{
    console.log("registration successsful");
}
for(let i=0;i<=5;i++){
    console.log(i);
}
console.log("harini", "cyber security");
console.log(11197545728);
//Create variables for an event name, ticket price and seats left. Print them.

let eventName="tech fest";
console.log(eventName);
let ticketPrice=200;
console.log(ticketPrice);
//Calculate the total price for 3 tickets and check whether it exceeds 500.

let seatsLeft=200;
console.log(seatsLeft);
let t1=260;
let t2=100;
let t3 =200;
if(t1+t2+t3 >500)
{
    console.log("tickets sold");

}
else{
    console.log("tickets not sold");
}
//Use if...else to print whether a number is positive, zero or negative
let num= -7;
if(num>0){
    console.log("positive");

}
else if(num<0){
    console.log("negative");

}
else{
   console.log("Zero");
}
//Use a loop to print even numbers from 2 to 10.

for(let i=0;i<=10;i++){
    console.log(i);
}


// MODULE 6-7 PRACTICE TASKS
 

//Write calculateTotal(price, quantity) that returns the total
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(150, 2));
// Write a function that accepts a name and prints a greeting
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Harini");

// Create an array of five event names and print its length
const events = ["Tech Fest", "Music Night", "Art Expo", "Hackathon", "Sports Day"];
console.log(events.length);

// Use filter() to keep numbers greater than 10
const numbersGreaterThanTen = [5, 12, 8, 20, 10, 15].filter(number => number > 10);
console.log(numbersGreaterThanTen);

// Use map() to create a new array with each number doubled
const doubledNumbers = [1, 2, 3, 4, 5].map(number => number * 2);
console.log(doubledNumbers);

// Use reduce() to total [20, 30, 40]
const numbersTotal = [20, 30, 40].reduce((total, number) => total + number, 0);
console.log(numbersTotal);

// module 8-9 practice tasks

//arrow function 
//arrow function 
const add=(a,b)=>{
    return a+b;
}
console.log(add(5,10));
//create a book obj with the title,author,price.update its price

function calculateTotal(price, quantity) {
    return price * quantity;
}

const book = {
    title: "Alchemist book",
    author: "Paulo Coelho",
    price: 250
};

book.price = 300;
console.log(book);

//create a nested user obj and print the city
const user = {
    name: "Harini",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

console.log(user.address.city);
//create an array of three product objects and each product name
const products = [
    { name: "Laptop", price: 800 },
    { name: "Headphones", price: 100 },
    { name: "Keyboard", price: 50 }
];

products.forEach(product => console.log(product.name));




//use spread to copy an array and combine 2 arrays
const numbers = [1, 2, 3];
const numbersCopy = [...numbers];
console.log(numbersCopy);

const moreNumbers = [4, 5, 6];
const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers);
//write a function that rest parameters to add any number of values
function addValues(...values) {
    return values.reduce((total, value) => total + value, 0);
}

console.log(addValues(1, 2, 3, 4));
//use optional chaining and?? to safely read a missing users city and provide a fallback
const missingUser = {};
const city = missingUser.address?.city ?? "City not provided";
console.log(city);

