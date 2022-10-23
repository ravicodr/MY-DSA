/*frequently used to perform various actions based on the various condition being passed 
Syntax : switch ( expression ) {

    case 1:
        code 
    case 2:
        code 
    case 3:
        code 
      break 
    default;            
}*/

/*Create a program to find if the number is positive or negative or zero.*/

const checked_number = 5;

let x = 4 

switch(true) {
    case ( x > 0):
        text = "The number is positive";
        break;
    case (x===0):
        text = "The number is negative";
    case (x < 0):
        text = "No value found";
}
console.log(text);