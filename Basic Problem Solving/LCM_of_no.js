/*Given two numbers, find the possible integers that is divided by them
Input ==> 10, 5
Output ==> 10

Input ==> 12, 16
Output ==> 80

*/
function LCM (num1, num2){
if  (num1 > num2)
    greater = num1;
else 
    greater = num2;

while (true){
    if ((greater % num1 == 0) && (greater % num2 == 0)){
        LCM = greater;
        break;

    }
    greater += 1;
}
return LCM
}

num1 = 10;
num2 = 5;
console.log ("L.C.M. : ", LCM (num1 , num2))

/*
num1 = 10;
num2 = 5;
console.log("L.C.M. :", LCM(num1, num2))
Explanation:
While taking out the LCM of given two numbers, say A, B, it is obvious that the number
divisible by both the numbers will be greater or equal to the max of A, B.
Now we can iterate from max(A,B) and check if that number is divisible by A and B both
or not. If yes, that number will be our LCM.*/


/*LightWeight Solution*/
const findGCD = (num1, num2) => {
let a = Math.abs(num1);
let b = Math.abs(num2);
while (a && b && a !== b) {
if(a > b){
[a, b] = [a - b, b];
}else{
[a, b] = [a, b - a];
};
};
return a || b;
};
num1 = 10;
num2 = 5;
console.log("L.C.M. :", (num1*num2) /findGCD(num1, num2))