//  RANDOM SOLVED QUESTION =>
//       // practice question js video:-
//       // 1 -> print numbers 1 to 10 using for loop

//       // for(let i = 1; i<11; i++){
//       //   console.log(i);

//       // }

//       // 2 -> print numbers 10 to 1 using for loop

//       // for (let i = 10; i > 0; i--) {
//       //   console.log(i);
//       // }

//       // 2a ->  print numbers 10 to 1 using while loop

//       // let i = 10;
//       // while(i>0){
//       //   console.log(i);
//       //   i-- ;
//       // }

//       // 3 -> print even numbers 1 to 20 using for loop

//       // for(let i = 1; i <21; i++){
//       //   if (i%2 === 0) {
//       //     console.log(i);

//       //   }
//       // }

//       // 4 -> odd from 1 to 15
//       // let i = 1;
//       // while (i<16) {
//       //   if (i%2===1) {
//       //     console.log(i);

//       //   }
//       //   i++;
//       // }

//       // 5->
//       // for (let i = 1; i < 51; i++) {
//       //   if (i % 5 === 0) {
//       //     console.log( `${i} * 1 = ${i} `);
//       //   }
//       // }

//       // 6-> sum of numbers

//       // let sum = 0;
//       // for(let i =1 ; i<101; i++){
//       //   sum = sum +i;

//       // }
//       // console.log(sum);

//       // 7->

//       // for (let i = 1; i < 51; i++) {
//       //   if (i % 3 === 0) {
//       //     console.log(i);
//       //   }
//       // }

//       // 8->

//       // let a = prompt("enter number");
//       // a = Number(a);

//       // for (let i = 1; i <= a; i++) {
//       //   if (i % 2 === 0) {
//       //     console.log(`${i} is even`);
//       //   } else {
//       //     console.log(`${i} is odd`);
//       //   }
//       // }

//       // 8->
//       // for(let i = 1; i<101; i++){
//       //   if (i%3 ===0 && i%5===0) {

//       //     console.log(i);
//       //   }
//       // }

//       // imp question1 -> skip multiples of three

//       // for (let i = 1; i < 21; i++) {
//       //   if (i % 3 === 0) continue;
//       //   {
//       //     console.log(i);
//       //   }
//       // }

//       // imp question2 ->
//       // let count = 0;
//       // for (let i = 1; i < 100; i++) {
//       //   if (i % 2 === 1) {
//       //     count++;
//       //     console.log(i);
//       //   }
//       //   if(count === 5) break;

//       // }

//       // practice =>
//       // for(let i = 1; i <=5; i++){
//       //   if (i===3) {
//       //     break;
//       //   }
//       //   console.log(i);

//       // }

//       // let i = 1;
//       // while (i<33) {
//       //   console.log(i);
//       //   i++
//       // }

//       // for(let i = 1; i< 31; i++){
//       //   for(let j = i; j<4; j++ ){

//       //     console.log("hello");
//       //   }
//       // }

//       // let a = prompt("value?");
//       // let b = prompt("value2");
//       // a = Number(a);
//       // a = Number(b);

//       // let count = 0;

//       // while (a % b !== 0) {
//       //   count++;
//       //   b++;
//       // }

//       // console.log(count);

//       //        let i = 56;
//       //       while  (true){

//       //         if( i%55 === 0 ){
//       //           console.log(i);
//       //           break;

//       //       }
//       // i++;
//       //       }

//       // print only first prompt number
//       // let n = prompt("number");
//       // let a = prompt("number?");

//       // for(let i = 1; i <= n; i++){
//       //   console.log(i);

//       // } for(let i = 1; i <= a; i++){
//       //   if (i   ===  a) {
//       //     continue
//       //   }

//       // }

//       // let user = prompt("number?");
//       // user = Number(user);
//       // for(i = 1; i <= user; i++){
//       //   console.log("hello");

//       // }

//       // for (let i = 1; i < 101; i++) {
//       //   if (!i === 53) {
//       //     continue;
//       //   } else {
//       //     console.log(i);
//       //   }
//       // }

//       //  function getGrade(score) {
//       //     if (score < 32) return 'fail';
//       //     else if (score <= 59 ) return 'D';
//       //     else if (score <=69) return 'C';
//       //     else if (score <=79) return 'B';
//       //     else if (score <=89) return 'A';
//       //     else if (score <=100) return 'A+';
//       //     else  return 'INVALID MARKS';

//       //  }

//       //  console.log(getGrade(90));

//       // early return pattern -

//       // let a = prompt("enter age ");
//       //  a = Number(a);

//       // function getAge(a) {
//       //   if (a<18) {
//       //     console.log("you can not vote ");
//       //     return;
//       //   }
//       //   console.log("you can vote ");

//       // }

//       // getAge(a);

//       // switch
//       // let fruit = "papaya";

//       // switch (fruit) {
//       //   case "banana":
//       //     console.log("banana 30rupees ");

//       //     break;
//       //   case "mango":
//       //     console.log("mango 35 rup");

//       //     break;
//       //   default:
//       //     console.log("sorry this item is not listed here");

//       //     break;
//       // }

//       // Take a number (e.g., 1234) and print the sum of its digits (1+2+3+4 = 10).

//       // let table = 0;

//       // for (let i = 2; i < 20 ; i++) {
//       //   a = i%2;
//       //   console.log(a);

//       // }

//       // table print
//       // for (let index = 1; index <= 100; index++) {
//       //   console.log(index*2);

//       // }

//       // let count = 5;

//       // if (count-- === 5) {
//       // console.log("matched");

//       // } else {

//       //     console.log("not matched");
//       //   }

//       //   console.log(count);

//       // let loggedIn = false;
//       // let hasToken = false;

//       // let access = loggedIn || hasToken? "allow" : "deny";
//       // console.log(access);

// // // date - 2 july
// // // 1
// //  let a = prompt("number?");
// //       a = Number(a);

// //       for (let i = 1; i <=a; i++) {
// //         console.log(i);
// //   }

// //   // 2

// //  let a = prompt("number?");

// //       if (a === null) {
// //         console.log("you cancelled");
// //       } else {
// //         if (a.trim() === "") {
// //           console.log("you need to write somthing ");
// //         }else{
// // n = Number(a);
// //         if (isNaN(n)) {
// //           console.log("you need to write number only!");
// //         } else {
// //            for (let i = 0; i <= a; i++) {
// //         console.log(i);
// //       }
// //         }

// //         }
// //       }

// //       //
// //       for(let i = 5; i > 0; i--){

// //         console.log(i);

// //       }

// //       // 4

// //       let sum = 0;
// //       for(let i = 1; i<51; i++){
// //         sum = sum+i;
// //         console.log(sum);
// //       }

// // let a = prompt("age?");
// // let age = Number(a);

// // if (a.trim() === isNaN(age)) {
// //     console.log("not valid");
// // } else {
// //     console.log("valid");
// // }

// // let a = prompt("give me your name !");

// // if (isNaN(a)) {
// //   console.log(" valid!");
// // } else {
// //   console.log(" not valid");
// // }

// // let b = prompt(" your age");
// // number = Number(b);

// // if (number >= 18) {
// //   console.log("your are eligible");
// // } else if (isNaN(number)) {
// //   console.log("enter a number!");
// // } else {
// //   console.log("not eligible");
// // }
// //  let a = prompt("number?");

// //       if (a === null) {
// //         console.log("you cancelled it");
// //       } else {
// //         if (a.trim() === "") {
// //           console.log("you need to write somthing");
// //         }

// //         n = Number(a);
// //         if (isNaN(n)) {
// //           console.log("you need to write number only!");
// //         } else {
// //           console.log(a);
// //         }

// //         let x = 10;
// //       let y = 20;

// //       if (x < 15 || y < 25) {
// //         console.log("true");
// //       } else {
// //         console.log("false");
// //       }

// // class question day -> 4 july

// // let user = prompt("number?");
// // let user2 = prompt("number");
// // user = Number(user);
// // user2 = Number(user2);

// // for (let i = 1; i <= user2; i++) {
// //   if(user === i)
// //     {
// //   }else{
// //     console.log(i);

// //   }

// // let user = prompt("number");
// // user = Number(user);
// // for (let i = user; i>=0; i--){
// //   if(i%7 === 0)
// //     break;
// //   {

// //     console.log(i);
// //   }

// // }

// // class question 5 july ->

// // functions->

// // let a =prompt("a");
// // let b =prompt("b");
// // let c =prompt("c");

// // function add(v1, v2, v3) {
// //   console.log(v1 + v2 + v3);
// // }

// // add(a, b, c);

// // question2->

// // function a(val) {

// //   val();

// // }

// // a(function(){
// //   console.log("hello");

// // })

// // let a = prompt("number");
// // let b = prompt("number");
// // let c = prompt("number");
// // a = Number(a);
// // b = Number(b);
// // c = Number(c);

// // function greet(a, b, c) {
// //   console.log(a+b+c);
// // }
// // greet(a,b,c);



////////////////////////////////////////////////////////////////////////////////////////////

// question 1-> Print numbers from 1 to 10 using a for loop.

// for(let i = 1; i < 101; i++){
//   console.log(i);

// } 👍🐱

// question 2->  Print all even numbers from 2 to 20 using a while loop.

// let i = 1;
// while (i < 21) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }👍🐱

// question 3->  Print countdown from 5 to 1 using a do...while loop.

// let i = 5;
// do{
//   console.log(i);
//   i--;

// }
//   while (i>0)👍🐱

// question 4-> Find the sum of numbers from 1 to 50 using a for loop.

// let sum = 0;

// for (let i = 1; i < 51; i++) {
//   sum = sum + i;
// }
// console.log(sum); 👍🐱

// question 5->Print the multiplication table of 5  5 × 1 to 5 × 10) using while loop.

// let i = 1;
// while (i <= 10) {
//   console.log(`5 x ${i} = ${5 * i}`);

//   i++;
// }👍🐱

// question 6-> Ask the user for a number n. Print the first n odd numbers using a for loop

// let a = prompt("number?");
// let count = a;
// for(let i = 1; i<=count; i++){
//   if (i%2 === 1) {
//     console.log(i);
//     count++;
//   }
// }👍🐱

// question 7-> Ask the user to enter a password. Keep asking until they enter "sheryians" as the correct password.

// let password; // step 1: variable banaya

// do {
//   password = prompt("Enter your password"); // step 2: user se baar-baar puchhna
//   if (password !== "sheryians") {           // step 3: check kiya galat to warning
//     console.log("Wrong password, try again");
//   }
// } while (password !== "sheryians");         // step 4: jab tak galat hai, tab tak loop chale

// console.log("Access granted ✅");      👍🐱      // step 5: sahi password pe yeh chalega

// question 8-> Given a string like "hello", print each character on a new line using a for loop.

// let string = "Hello"

// for (let index = 0; index < string.length ; index++) {;
//   console.log(string[index]);

// }👍🐱

//  question 9->  : Print numbers from 20 down to 1 using a while loop.

// let i = 20;
// while(i>0){
//   console.log(i);
//   i--

// }👍🐱

//  question 10->  : Take a number (e.g., 5) and calculate its factorial using a for loop.

// let n = prompt("number?");
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact = fact * i;

//   console.log(fact);
// }👍🐱

//  question 11->Prompt the user for a number. Keep doubling it until it becomes greater than 100.Print how many times it was doubled and the final value.
//  sol-1->
// let n = prompt("number");
// n = Number(n);
// let count = 0;
// let sum = n;
// while (sum + n <= 100) {
//   sum = sum + n;
//   count++;
// }
// console.log(sum, n, count);

// sol 2 ->
// let n = prompt("Enter a number:");
// n = Number(n);

// let count = 0;

// while (n <= 100) {
//   n = n * 2;
//   count++;

// }
// console.log("Final value:", n);
// console.log("Doubled", count, "times");

//  question 12->  :Take two inputs: start and target.Keep adding 7 to start until it becomes equal to or greater than target.Count how many times the addition happened.

// sol by me->
// let start = prompt("input1");
// let target = prompt("input2");

// start = Number(start);
// target = Number(target);

// let count = 0;

// let i = target;
// while (i>= start) {
//   start = start + 7;
//   i++;
//   count++;
//   if (start >= target) {
//     break;
//   }
// }
// console.log( `final value ${start} added ${count} times `);

// sol by chatgpt->
// let start = prompt("input1");
// let target = prompt("input2");

// start = Number(start);
// target = Number(target);

// let count = 0;

// while (start < target) {
//   start = start + 7;
//   count++;
// }

// console.log(`final value ${start}, added ${count} times`);

// question 13-> take a number as input. Print all the numbers in reverse order from that number to 1, but skip numbers divisible by 5

// let input = prompt("number?");
// input = Number(input);

// for (let i = input; i > 0; i--) {
//   if(i%5 === 0 )continue;
//   console.log(i);

// }

// question 14-> Print the sum of all even numbers between 1 and that number (inclusive).Use a loop.

// let input = prompt("number");
// input = Number(input);

// let sum = 0;
// for(let i = 1; i <= input; i++ ){
// if(i%2===0){

//   sum = sum + i;
// }

// }
// console.log(sum);

// question 15 -> Take a number as input.Check how many digits are in that number (don’t convert to string).For example, 1256 → 4 digits

// let n = prompt("number");
// n = Number(n);

// let count = 0;

// while(n>0){
//  n = Math.floor (n/10);
//   count++;

// }
// console.log(count);

// nhi aya !

// Take a number.Keep dividing it by 2 until it becomes less than 1.Count how many times the division was done.

// let input = prompt("number");
// input = Number(input);

// let count = 0;

// while (input >= 1) {
//   input = input / 2;

//   count++;
// }
// console.log(input, count);

// Take two inputs: base and target Multiply the base with itself repeatedly (base^1, base^2, …) until the result crosses target.Count how many multiplications it took.
// using while

// fnc declaration=>
// or
// fnc statement=>

// function book() {
//   console.log("harry potter");
// }

// book();

// fnc expression =>

// let book = function () {
//   console.log("harry potter");
// };

// book();

// fat arrow fnc=>

// let book = () => {
//   console.log("harry potter");
// };
// book();

// practice of parameters and arguments =>

// function dance(val1,val2,val3,val4) {
//   console.log(`${val1} nach rha hai ${val2} ke sath `);

// }

// dance("robot" , "apni gf","apne dost" , )
// dance("parth" ,"apni gf")
// dance("ghoda", "apni ghodi")
// dance("mai", "khud")

// default parameters =>
// function greet(name= "not given") {
//   console.log(name);
// }

// greet("parth");

// rest operator =>
// ham jitne arguments de utne parameter na banane pade isliye rest operator ka use karte hai function ke parameter space me ...__ lagake __ isme kuch bhi likh skte hai

// function abcd(...val) {
//   console.log(val);

// }

// abcd(1,2,3,4,5,6,7,8,9,10);

// return value =>

// matlab jaha se aya hai vhi chala jaega->

// function lalala(uncle) {
//   return 100/uncle;
// }

// let val = lalala(50);
// console.log(val);

// first class function=>

// SAMAJH NHI AYA-------------------------------------------------------------------

// function abcd(v1) {
//   v1();
// }

// abcd(function () {
//   console.log("parth");

// });

// function abcd() {
//   return function () {
//     console.log("hey");

//   }
// }

// abcd()();

// closures ===>

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// abcd()();

// lexical scopipng=>

// function abcd() {
//   let a = 12;
//   function defg() {
//     let b = 13;
//     function ghij() {
//       let c = 14;
//     }
//   }
// }

// question=>

// diff between function declaration and expression in terms of hoisting=>

// fnc declaration=>
//  ham ise banne se pehle hi call kar sakte hai :

// abcd();

// function abcd() {
//   console.log("hey");
// }

// vs

// fnc expression=>
// diff ye hai ki isko chalane pe error aa rha hai kyuki ham fnc expression banake usko banne se pehle call nhi kar sakte:

//   efgh();

// let efgh = function () {
//   console.log("heyy");
// }

// convert fnc into arrow fnc =>

// let multiply = (a, b) => {
//   return a * b;
// };

// question=> use rest parameter to accept any number of scores and return the total=>

// function score(...val) {
//   let total = 0;
//   val.forEach(function (value) {
//     total = total + value;
//   });
//   return total;
// }

// console.log(score(1, 2, 3, 4, 5, 6, 7));

// question=> use return :

// function checkAge(age) {
//   if (age < 18) return "you can't vote";
//   return "you can";
// }

// console.log(checkAge(9));

// question=>

// function f(){
//   return;
// }
//  console.log(f());    output = > undefined

//

// first class citizen means

// 1. ham function ko value ki tarah treat kar skte hai
// 2. use variable me store kar sakte hai
// 4. function me pass kar skte hai
// 3. use return kar skte hai

// question = > assign a funtion to a variable and call it =>

// let abcd = function () {
//   console.log("heys");
// };

// abcd();

// question=> pass a funtion into another funtion and execute it

// function abcd(value) {
//   value();
// }
// abcd(function () {
//   console.log("heydfv");

// })

// question => what is a higher order function=>

// jab bhi koi function kisi doosre function ko accept karta hai ya use function return karta hai use higher order fnc kehte hai
//  inpe se koi bhi ek situation pass hone pe vo fnc higher order fnc hoga :

// question=> lexical

//   function ancd() {
//  let a = 12;
//  function defg() {
//   let b = 13;
//   function ghij() {
//     let c = 14;
//   }
//  }
// }

// closures=>

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// abcd()();
// write a                         calculator=>

// function bmi(weight, hight) {
//   return weight / (hight * hight);
// }
// console.log(bmi(54, 1.4).toFixed(2));

// percent calculator=>
// function percentCalculator(number, percent) {
//   return (percent = (number * percent) / 100);
// }

// console.log(percentCalculator(100, 20));

//  reusable discount calculator =>

// function discountCalculator(discount) {
//   return function (paise) {
//     return ` your discount is ${paise - paise * (discount / 100)} `;
//   };
// }

// let a = discountCalculator(10);
// let b = discountCalculator(20);

// console.log(a(100));
// console.log(b(100));

// night wish =>

// function greet(name) {
//   return function (time) {
//     return `good ${time}, ${name}`;
//   };
// }
// let nightGreet = greet("parth");
// console.log(nightGreet("night"));

// counter function using closures=>

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// let c = counter();
// let b = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// createw a pure fnc transforming a value =>

// function pure(val) {
//   return val*2;
// }

// console.log(pure(5));

// use IIFE to isloate variable => note => you can not access variable outside the function in IIFE.

// (function isolate() {

//   const password = "secret password"
//   console.log(password);

// })()

// day 7 july=>  (cc question)=>
// nothing happend in class

//  Array =>

// let arr = [1,2,3,4,5,];

// arr[2] = 5;

// 2=>

// map

// let prices = [100,200,500,1000];

// let gstWithPrice = prices.map(function (price) {
//   return price = price +(price*0.18);
// })

// console.log(gstWithPrice);

// filter=>

// let arr = [22, 18, 67, 17];

// let adult = arr.filter(function (age) {
//   if (age > 18) return true;
// });

// console.log(adult);

// let arr = [10, 30, 60, 90];

// let sum = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);

// console.log();

// let arr = [2, 21, 22, 32];

// let ans = arr.find(function (num) {

//   return num>20;
// });

// let arr = [2, 12, 22, 32];

// let newarr = [...arr];

// let a = ["red","blue"]

// a.splice(1,0,"yellow","green");

// let items = [1, 2, 3, 4, 5, 6];

// let newItems = items.slice(2, 5);

// let names = ["satvik", "anvi", "veda"];
//  names.sort();

// let arr = [1, 2, 3, 4];

// let newArr = arr.map(function (val) {

// return val*val;

// });

// let arr = [1,45,21,56];

// let newArr = arr.filter ((val)=>{

// return val>10;
// });

// let arr = [10,20,30,40];

// let sum = arr.reduce(function(accumulator , currentValue){

// return accumulator+currentValue;
// },0);

// let arr = [12,15,3,8,20];

// let newArr = arr.find(function(val){

// return val<10;
// });

// let arr = [45,12,67,23,87];

// let Newarr = arr.some((val)=>{

// return val<35;
// });

// let arr = [44, 1, 66, 22, 88];

// let Newarr = arr.every(function (val) {
//   return val % 2 === 0;
// });

// let names = ["parth" , "gupta"];

// let [firstname , lastname] = names;

// let arr = [1,2,3,4,5];
// let brr = [6,7,8,9,10];

// let crr = [...arr , ...brr];

// let countries = ["uk", "us"];

// countries = ["india" , ...countries];

// let arr = [1,2,3];

// let brr = [...arr];

//  day => 8 july
// function class question:>
// nothing much happend

// recall of some topics

//day => 9july
// nothing much happend
// recall of fcf,hof

// day => 10 july

// task 1. => complete object from video, question and practice of function,array,object.
// tast 2. => revise all the topics from js video 1.
// task 3. => start video 2 from youtube of js for dom and also take a view from sheryians app for js.

// task 4. => start doing tailwind from shery website.

// MUST BE DONE ANYHOW*!

// object start at 12 pm

// question=>

// 1.  how to make and access object=>

// const user = {
//   name: "parth",
//   city: "bhopal",
//   pin: 402001,
//   age: 21,
//   mail: "parth@,mail.com",
// };

// for (const key in user) {
//   console.log(key,user[key]);
// }

// let arr = [23, 54, 13, 7, 76];

// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr);

// let arr = ["parth","yash","dheeraj"];

// arr.sort();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function (val) {
//   console.log(val);
// });

// let arr = [1, 2, 3, 4, 56, 7, 44];

// arr.find(function (a) {
//   return
// });

// day 10 july
// class question=>
// 1.

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   let n = prompt("number");
//   n = Number(n);
//   if (isNaN(n)) {
//     continue;
//   } else {
//     arr.push(n);
//   }
// }
// console.log(arr);

// ask user a value and close it until it becomes exit...
// let arr = [];
// let a = prompt("kuch maango");

// while (a !== "exit") {
//   arr.push(a);
//   a = prompt("kuch bhi");
// }
// console.log(arr);

// let a = [];

// a = prompt("kuch maango");

// while(a !== "exit"){
// arr.push(a);
// a = prompt("kuch maango")

// }

// console.log(arr);

// let arr = ["harsh", "parth", 1, 2, 3];

// for (let i = 0; i < 5; i++) {}

// let arr = [];
// let a = prompt("kuch maangoo");

// while (a !== "exit") {
//   arr.push(a);
//   a = prompt("kuch mango ");
// }

// console.log(arr);

// 11 july practice question

// let obj = {
//   name: "parth",
//   age:21,
//   mail:"p@mail.com"
// }

// let obj2 = {...obj};

// console.log(obj2);

// 2.=>

// let obj = {
//   student: "parth",
//   age: 21,
//   isEnrolled: true,
// };

// 3.=>
// let obj = {
//   true: "yes",
//   42: "answer",
// };
// console.log(obj[true]);

// 4=>
// const user = {
//   "first-name": "parth",
// };
// console.log(user["first-name"]);

//   const address = {
//   city: "bhopal",
//   coordinates: {
//     lat: 27.3,
//     lang: 77.4,
//   },
// };

// let {city } = address;
// let {lat} = address.coordinates;

// 4=>

// const course = {
//   title: "javascript",
//   duration: "4 weaks",
// };

// Object.entries(course).forEach(function (val) {
//   console.log(val[0] + ":" + val[1]);
// });

// practice question=>

// ek array banao or usme sabka sum print kro =>

// let arr = [1, 2, 3];

// let sum = arr.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// Ek array me se first aur last element print karo.

// let arr = [1, 2, 3, 4];

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// Check karo ki ek element array me exist karta hai ya nahi using includes.=>

// ?

// Ek array me 2 elements push karo, fir ek pop karo.

// let arr = [1,2,3,4,5,6];

// arr.push(7,8);
// arr.pop();

// Ek array me unshift se element add karo aur shift se remove karo.

// let arr = [1,2,3,4,5,6];

// arr.unshift(0);
// arr.shift();

// Ek array me 3 cities add karo. Fir last city ko remove karo aur print karo.

// let arr = ["jhansi","bhopal","indore"];

// arr.pop();
// console.log(arr);

// Array ki length print karo after push and pop.

// let arr = [1,2,3,4,5,6];
// arr.push(7);
// arr.pop();
// console.log((arr.length));

// Ek empty array banao aur usme step by step push karke 4 names daalo.

// let arr = [];

// arr.push("parth", "gupta", "is", "my", "name");

// console.log(arr);

// Ek array banao jisme 1 se 5 tak ke numbers ho, unko for loop se print karo.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }

// Ek array me se saare odd numbers print karo.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i <arr.length; i++) {
//   if (arr[i] % 2 === 1 ) {

//     console.log(arr[i]);
//   }
// }

// for...of loop se ek array ke elements ko print karo.

// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (let key of arr) {
//   console.log(key);
// }

// Ek array banao jisme students ke naam ho. Check karo agar “Parth” usme hai ya nahi.

// sum with foreach
// print 1 to 100 =>
// let arr = [];
// for (let i = 1; i < 101; i++) {
//   arr.push(i);
// }
// console.log(arr);

// =>

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(function (val) {
//   if (val % 2 === 0) {
//     console.log(val);
//   }
// });

// let arr = [11, 22, 33, 44, 55, 66, 77, 88];
// let arr2 = [];
// arr.forEach(function (val) {
//   if (val % 2 === 1) {
//     arr2.push(val);
//   }
// });

// console.log(arr2);

// practice question sent on whatsApp=>
// function getEvenNumbers(n) {
//   let result = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }

//   return result;
// }
// console.log(getEvenNumbers(20));

// let arr = [1, 2, 3, 4, "parth", "gupta"];
// let newarr = arr.filter(function (val) {
//   typeof val === "number";
//   return true;
// });

// let arr = [1, 2, 3, 4, 5, 6];

// let newarr = arr.map(function (val) {
//   return val * val;
// });

// let arr = [1, 2, 3, 4, "parth", "gupta", null, undefined];

// newarr = arr.filter(function (val) {
//   if (typeof val === "number" || typeof val === "string") return true;
//   else {
//     return false;
//   }
// });

// Ek array banao jisme students ke naam ho. Check karo agar “Parth” usme hai ya nahi.

// let arr = [1, 2, 3, 4, 5, "aman", "deepak", "parth", null, null, undefined];

// newarr = arr.filter(function (val) {
//   if (typeof val === "string" || typeof val === "number") return true;
//   else {
//     return false;
//   }
// });

// Ek array banao of prices, aur find karo sabse bada price.

// let arr = [11, 22, 33, 44, 55, 66, 77, 88];

// arr.find((val) => {
// return val>

// });
