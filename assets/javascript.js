// // alert("do you eat meat?");
// var meatEater = prompt('do you like meat?')

// const b = 'smoothie';
// console.log(b);

// document.getElementById('someText').innerHTML = meatEater;

// var num1 = 10;
// console.log(5 * 10);
// num1++;
// console.log(num1);
// console.log(num1 % 5)
// function meatEater() {
//     if {
//     alert('here is a burger')
// } if {
//     alert("here is a veggie")
// }

// meatEater();
// var yourName = prompt("what is your name?");
// function greeting(yourName) {
  
//   var result = "hello" + " " + yourName;
//   console.log(result);
// }
// greeting(yourName)

// function sumNumbers(num1, num2) {
//     var result = num1 + num2;
//     console.log(result);
// }
// sumNumbers(10,10)
// while loops run forever
// var num = 0;

// while (num < 100) {
//     num += 1;
//     console.log(num)
// }

// for loops
// for (let num = 0; num < 100; num++) {
//     console.log(num)
// }

// // data types
// let yourAge = 33;
// let yourName = "Alex";
// let Name = {first: "Alex" , last: "Cooney"}; //objects
// let turth = false true // boolean
// let groceries = ["apple" , "banana" , "oranges"]; //arrau
// let random; //undefinded
// let nothing = null; //value null

// string study  /n scape line adds
// let fruit = 'banana,apple,orange,blackberry';
// let moreFruits = "banana\napple";
// console.log(moreFruits)
// console.log(fruit.indexOf('a'));
// console.log(fruit.length);
// console.log(fruit.slice(2, 5));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(',')); //split by comma 
// console.log(fruit.split('')); // split by character

// //Arrays
// let fruits = ['orange', 'banana', 'pineapples', 'grapes'];
// // let fruits = new Array ('orange', 'banana', 'pineapples', 'grapes');
// // alert(fruits[1]);
// console.log(fruits[2]); //access values in an array index 2 
// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // array methods

// console.log('heres a string', fruits.toString());
// console.log(fruits.join(' - '));
// console.log(fruits, fruits.pop(), fruits); //pop off the list
// console.log(fruits.push('cherries'), fruits); //appends and returns
// console.log(fruits[4]);
// fruits[fruits.length] = "watermellon"; //same as push
// console.log(fruits);
// fruits.shift(); //remove first item from the array
// console.log(fruits)
// fruits.unshift('pomagranet'); // add first element from array
// console.log(fruits);
// let vegtables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegtables);  // join two arrays
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

// let someNumbers = [5, 10 , 30 , 34, 33, 344, 34, 442, 433, 2323, 434, 343];
// console.log(someNumbers.sort(function(a, b) {return a-b}));
// console.log(someNumbers.sort(function(a, b) {return b-a}));  // sort in assending or decending order

// let emptyArray = new Array();
// for (let num = 0; num <= 10; num++) {
//     emptyArray.push(num);
// }
// console.log(emptyArray);

let student = {
    first: 'alex', 
    last: 'cooney', 
    age:33, 
    height: 6.00,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
};
// console.log(student.first);
// console.log(student.last);
// student.first = 'not alex';  // change value of objects
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());


//conditionals,control flows,(if else)
//18-35 is my target demo
// && and || or
// const age = prompt('what is your age?');
// if ( (age >= 18) && (age <= 35) ) {
//     status = 'target demo';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }

// switch statements 
// differtiatie between weekday and weekend
// day 0 is sunday 
// day 6 is saturday 
// day 4 is thrusday -- weekday 

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5: 
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

default:
    text = 'weekday'
}
console.log(text);