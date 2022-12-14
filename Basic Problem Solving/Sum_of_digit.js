/*Problem Statement:
Given a positive number you need to write a program in javascript to find the sum of the inner digits of
that number.

Input ==> 2124;
Output ==> 3;

Explanation - 1:
The Inner digits of the number 2124 are 1 and 2 whose sum is 3
Explanation - 2:
The Inner digits of the number 70 is None therefore the output will be -1.
Note: Same is the case for number with single digit

*/

function getDigitSum (num)
{
  var sum = 0;
  if (num.toString().length < 3){
    return -1;
  }
  do {
    num = parseInt (num / 10);
     sum = sum + num % 10;

  }
  while (parseInt (num /100) != 0);
  return sum;
}
var n = 2124;

console.log (getDigitSum(n));

/*
Solution Explanation:
Since the internal digit can happen only on more than two digits, we first need to check that. If the
condition fails, we simply return -1.
Now we need to perform the addition of the middle elements. To skip the rightmost element, we are
first dividing it by 10.
So say if the number is 1234, then after dividing by ten, we are left with 123
i.e., on dividing by 10, we get rid of the leftmost digit of the number.
Therefore in iteration-1
num =1234 / 10 = 123

sum = 0 + 123 % 10 = 0+3 = 3
Since 123%100 = 3 we move to iteration 2
Iteration-2
num=123/10 = 12
Sum = 3 + 12%10 = 3+2 = 5
Now 12 %100 is 0 therefore we break the loop and return the sum. Which in this case is 5
*/
