
function isPrime(n)
{
for(let i=2;i<=Math.sqrt(n);i++)
{
if(n%i==0) return false;
}
return true;
}
function sumPrime(n) {
for(let i=2;i<=n/2;i++)
{
if( isPrime(i) && isPrime(n-i) )
{
console.log(i, n-i);
return;
}
}

}
let num = 15;
sumPrime(num);

/*For the range of values from 2 to A, start iterating the numbers from both the ends. Example if A is 8
then the range will be 2, 3, 4, 5, 6, 7
Since we need to find pair, Select the number `i` and `A-i`.
Check if both are prime or not. If both are prime then log the output and return.
We will iterate in the range till the middle range so as to keep position `i` <= `A-i` as comparison above.
That will just be a repetitive task.
Lets understand this by taking the above range as example:
Range = 2,3,4,5,6,7
A= 8
Let the pair be p1 and p2
Iteration-1
p1 = 2 & p2 = 6
2 is prime but 6 is not therefore continue
Iteration-2
p1 = 3 & p2 = 5
Both 3 and 5 are prime, hence log there output and return.
And to check prime, we are simply trying to find a factor of the number starting from 2 to square root
of it. If there exists a factor, then the number is not prime.*/

