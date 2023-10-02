// Q1

// 1. ‐9*3                             the answer is : -27
// 2. “value is “ + 50                 the answer is : value is 50
// 3. 17 % 5                           the answer is : 2
// 4. 5 % 17                           the answer is : 5
// 5. 5/10                             the answer is : 0.5
// 6. (4 == 4)                         the answer is : true
// 7. (4 != 5)                         the answer is : true
// 8. (7 <= 8)                         the answer is : False
// 9. Math.ceil(x) ‐ Math.floor(x)    
//  Math.ceil(2.6)   the answer is : 3  Math.floor(2.6)  the answer is : 2



// Q2 : Read a number (using prompt) and display it using alert
// let number = prompt("Enter a Number ");
// alert(number);


// Q3 : Read in two numbers and display them in ascending order.
// let num = [prompt("The First" ) , prompt("The Second ")];

// if (num[0] > num[1]) {
//     alert(num[0] + " bigger than " + num[1])
// }
// else {
//     alert (num[1] + " bigger than " + num[0])
// }

// Q4: Read in two numbers and display the larger
// let num2 = [prompt("The First"), prompt("The Second ")];

// if (num2[0] > num2[1]) {
//     alert(num2[0] + " Is the larger!")
// }
// else  {
//     alert(num2[1] + " Is the larger!")
// }



// Q5: Read two numbers and display their sum.  What problem did you encounter?
// var x = parseInt(prompt("Enter the First Number"));
// var x2 = parseInt(prompt("Enter the Second Number"));
// alert(x + x2)


// Q6: If you have a “num” variable,  Your task is to print:

// - ONE, if it is equal to 1 .
// - TWO, if it is equal to 2.
// - THREE, if it is equal to 3 .
// - FOUR, if it is equal to 4.
// - FIVE, if it is equal to 5.
// - SIX, if it is equal to 6 .
// - SEVEN, if it is equal to 7.
// - EIGHT, if it is equal to 8.
// - NINE, if it is equal to 9.
// - PLEASE TRY AGAIN, if there is none of the above.

// let Q6 = window.prompt("the number ")*1;
// switch (Q6)
// {
//     case 1:
//         alert("ONE");
//         break;
//     case 2:
//         alert("TWO");
//         break;
//     case 3:
//         alert("THREE");
//         break;
//     case 4:
//         alert("FOUR");
//         break;
//     case 5:
//         alert("FIVE");
//         break;
//     case 6:
//         alert("SIX");
//         break;
//     case 7:
//         alert("SEVEN");
//         break;
//     case 8:
//         alert("EIGHT");
//         break;
//     case 9:
//         alert("NINE");
//         break;
//     default:
//         alert("PLEASE TRY AGAIN");
// }



// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
// for ( let i = 0; i <=5; i++ ) {
//     alert(i);
// }

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
// for ( let i = 0; i <=5; i++ ) {
//     alert(i);
// }
// let numbers = "";
// for (let i = 0; i <= 5; i++){
//     numbers += i;
// }
// alert(numbers);

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
// for (let i = 0; i <=20; i++) {
//     alert(i*3);
// }

// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
// var ask = prompt("Enter a Number between 0 to 100");
// while (ask < 0 || ask > 100) {
//     alert("Error Enter a number in the required range !!");
//     var ask = prompt("Enter a Number between 0 to 100");
// }

// Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available.
// let any = prompt("Enter anything but not a Number ");
// let any2 = "";
// if (isNaN(any)){
//     for (let i = any.length-1; i >= 0 ; i--){
//         any2 = any2 + any.charAt(i);
//     }
// }
// alert(any2);

// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// let number = prompt("put the number range 0-100");

// let number2 = 0;
// for (let i = 0; i <= number;i++) {
//   number2 += i;
// }
// alert(number2);

// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.
// let number = 0;
// let number2 = prompt("Enter a Number ") * 1;
// for (let i = 1; i <= number2; i++){
//     number += i;
// }
// let average = number / (number2 + 1) ;
// alert(average);