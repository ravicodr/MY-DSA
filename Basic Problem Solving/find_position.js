/*2. Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given)
then find the position where the Ath item will be delivered.
Note: Distribution of Items are performed at the adjacent positions starting from C.

Input 2, 5 , 1
Output 2

example 2;
Input 8,5,2
Output 4


Explanation-1:
A denotes 2 items.
Starting from position 1 i.e. C, the first item will be delivered at 1st position and 2nd item is delivered at 2nd
position therefore the output is 2
Explanation-2:
A denotes 8 items.
Starting from position 2 i.e. C, the first item will be delivered at 2st position and 2nd item is delivered at
3nd position and so on in a circle. This way the 8th item will be delivered in the 4th position.
Intuition:
Check the number of items that needs to be distributed is greater than the left out positions of the current
cycle of circle.
If no then simply calculate the number of remaining items after the completion of current cycle and return
mod of the left out items else return A+C-1.

*/
Solution:
function solve(A, B, C){
return (C + A - 1) % B;
}
A=8;
B=5;
C=2;
console.log(solve(A,B,C));


