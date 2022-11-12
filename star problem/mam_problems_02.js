let n = 5;
 
let nr = n*2 -1;

let ts = 1;

let final_ans = "";

for (let row = 1; row <= nr; row++){
    for (let cst = 1; cst <= ts; cst++){
        final_ans +="*";
    }
    final_ans += '\n';
    if (row <= nr/2){
        ts++;

    }else{
        ts--;
    }
}
console.log(final_ans);
// *
// **
// ***
// **
// *
