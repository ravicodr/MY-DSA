  let n = 5;

  let final_ans = "";
   let cst = 1;
   let csp = n-1;

   for (let row = 1; row <= n; row++){
     // do for current row.
     for (let nsp = 1; nsp <= csp; nsp++){
        final_ans +=" ";
     }
     for (let nst = 1; nst <= cst; nst++){
        final_ans +="*";
     }
     //prep for the next row
     final_ans +='\n';
     csp--;
     cst += 2;
   }
   console.log(final_ans);