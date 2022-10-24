/* Iterative statement 
Problem --> Write a program to find or HCF or GCD of two integers..
 ans will be in the range (1, min(a,b));
*/
let hcf_value;
// take input 
const first_number = 16;
const second_number = 8;

//looping from 1 to number 1 and number2
for (let iterator = 1; iterator<= first_number && iterator
     <= second_number; iterator++){
        // check if is factor of both integers
        if( first_number % iterator == 0 && second_number % iterator == 0) {
         hcf_value = iterator;   
        }
     } 
     //display the hcf
     console.log(`HCF of ${first_number} and ${second_number} is ${hcf_value}.`);