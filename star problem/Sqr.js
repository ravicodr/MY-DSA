let n = 20;
// row or column count

//defining an empty string 
let string = "";

for (let i = 0; i< n; i++){
    //external loop
    for ( let j=0; j< n; j++){
        string +="^";
    }
    //newline after each row
    string += "\n";
}
//printing the string
console.log(string);