/*8. Nth Fibonacci 

Problem Statement:
Given the value of n, find out the nth term of the fibonacci series.
Fibonacci series is like 0,1,1,2,3,5,8,13... where the next element is always the sum of the previous two
elements and the first two elements are 0 and 1.

Input ==> 5;
output ==> 3;

Input ==> 24;
Output ==> 28657;

Explanation - 1:
Given the Fibonnaci series as 0,1,1,2,3,5,8,13.. the 5th term is 3
Explanation - 2:
Given the Fibonnaci series as 0,1,1,2,3,5,8,13.. the 5th term is 28657;
*/
function nFibb (Nth){
    let prev = 0;
    let curr = 1;
    let temp;

    if (Nth == 1)
    return prev;
    else if (Nth == 2)
    return curr;
    else
    for (let idx = 3; idx <= Nth; idx++){
        temp = prev;
        prev = curr;
        curr += temp;
    }
    return curr;
}
let Nth = 8
console.log (Nth, "th Fibonacci number is", nFibb (Nth));
/* solution explanation :
If the nth term is 1 then return 0
If the nth term is 2 then return 1
In other cases, iterate from 2 to N abd take the current and previous element and update the
current element. Finally, return the current term*/