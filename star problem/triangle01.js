// let number_of_rows = 5; // the length of the grid
// let star_string = "";

// for (let row = 0; row < number_of_rows; row++){
//     for (let column = 0; column <=row; column++){
//         star_string += "*";
//     }
//     star_string += "\n";
// }
// console.log(star_string);

// let n = 5;

// let final_ans = "";
// let cst = 1;
// let csp = n-1;

// for (let row = 1; row<=n; row++){
//     //do the work for current row.
//     for (let nsp = 1; nsp  <= csp; nsp++) {
//         final_ans += " ";
//     }
//     for (let nst= 1; nst<=cst; nst++){
//         final_ans += "*";
//     }
//     //prep for the next row
//     final_ans += '\n';
//     csp--;
//     cst+= 2;
// }
// console.log(final_ans); 

const myArray = ["q","w","e","r","s","t","y"];
myArray.copyWithin(1);
console.log(myArray);