/*9. 60 a Factor 
#180DaysofPurposeBED-Class
Problem Statement:
Given a number A you are supposed to take the digits of that number, and find a permutation such
that 60 becomes a factor of that permutation. If there exists such permutation then return 1 else 0.*/

/*Input--> 2340;
Output -->1

example:
   Input --> 24
   OUTPUT--> 0;

   Explanation-1:
Given 2340, a possible permutation of its digit which is divisible by 60 can be 4320. This
is equivalent to 60*72 therefore the result is 1.
Explanation-2: 
Given 24, There isn't any permutation of the digit whose factor is 1, as there permutations
are 42, 24. therefore the result is 0  */

function isDivisibleBy60 ( num ) {
    if (num % 10 == 0)
    return 1;

    sum = 0;
    last = false;
    secondLast = false;
    while (num!= 0){
        i = num % 10;
        num=parseInt (num/10);
        if (i%2==0 && (i>0 || last))
        secondLast = true;
        if(i==0)
        last = true;
        
        if(sum%3==0 && last && secondLast)
        return 1;
        return 0;
        }
    }
        let number = 24;
        console.log(isDivisibleBy60(number));

        /*
Explanation:
60 is a composite number and any number which is divisible by composite numbers is supposed to be
divisible by the prime number raised to the highest power. Which in case of 60 are 4*5*3.
So any number that is divisible by 3,4,5 will be divisible by 60.
1. Now for number to be divisible by 5, last digit is supposed to be 0 or 5
2. Number is divisible by 4 if its last two digits are divisible by 4.
On combining the above two points, we can conclude that any number which needs to be divisible by
both 4,5 needs to have 0 as the last digit and that second last digit as even.
Finally to check if the number is divisible by 3, we need to sum the digits and see if it
goes by 3.
Using all these 3 we can come up with the solution to figure out if there exists a digit
permutation which is divisible by 60*/