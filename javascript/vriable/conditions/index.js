// const dayNumber = 3; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

// let dayName;
// switch (dayNumber) {
//   case "sunday":
//     dayName = 'Sunday';
//     break;
//   case "monday":
//     dayName = 'Monday';
//     break;
//   case "tuesday":
//     dayName = 'Tuesday';
//     break;
//   case "wednesday":
//     dayName = 'Wednesday';
//     break;
//   case "thursday":
//     dayName = 'Thursday';
//     break;
//   case "friday":
//     dayName = 'Friday';
//     break;
//   case "saturday":
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Invalid day number';
// }

// console.log(dayName);

//let rest day=3;

//case 1;
//  sunday;
//case 2;
//  monday;
//case 3; 
//  tuesday;
//case 4;  
//  wednesday;
//case 5;
//  thursday;
//case 6;
//  friday;
//case 7;
//  saturday;
//default;
//  invalid day number;

// let i;
// for (let i=0; i<10; i++) {
//   console.log(i);
// }

//let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//arrays
// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits[0]); // Output: apple
// console.log(fruits[1]); // Output: banana
// console.log(fruits[2]); // Output: orange

const fruits = ['apple', 'banana', 'orange'];
//0 , 1, 2, 3
console.log(fruits.length); // Output: 3
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let greet = (name)=>{
    console.log("hello"+""+name);
    console.log(callback,"callbackcalled");
    callback()};
    
let aftergreet = () => {
    console, log("have a nice day");
    
};
greet("Evan", aftergreet);