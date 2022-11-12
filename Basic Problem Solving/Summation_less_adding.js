/*7. Summation Less Adding ( 15 min )

Problem Statement:
Given two numbers A and B, You are supposed to find the sum of A and B without using the addition
operator i.e. `+`*/

/* Input A==>10;
         B==>5;
   Output ==> 15;
   
   10+5=15

   solution==>
   */

   function add (num1, num2)
   {
    while (num2!=0)
    {
        let carry = num1 & num2;
        num1 = num1 ^ num2 ;
        num2 = carry << 1;


    }
    return num1;
   }
   let num1 = 10;
   let num2 = 5;
   console.log (num1 , " + " , num2, "=", add(num1,num2));

   /*Explanation:
Bitwise and `&` operators return 0 if either of the bits are 0.
Bitwise XOR `^` operator return 1 if both the bits are different
Knowing these two, we can add two numbers on their binary by keeping the count of
sum and carry. Where sum
was performed using the bitwise xor operator, and carry was performed using bitwise.
Here Num1 will be used to store the sum result while num2 will be used as the counter to
terminate the loop
Dry Run:
Suppose we need to do 10 + 5 then in there binary form it will be
10 = 1010
5 = 101
Till the time 101 !=0 get
carry = 1010 & 101 = 0000

Sum = 1010 ^ 101 = 1111
Shiting carry to right by 1 , carry remains 0000
Since 0000 therefore we return 1111 which is 15*/
