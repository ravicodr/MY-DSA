/* Iterates from 1 - 100
- Print Relevel if divisible by 3 //-->i%3==0 && i%5 != 0
- Print Buzz if divisible by 5    //--> i%3!=0 && i%5==0
- Print MindBuzz if divisible by 15 //--> i%3 == 0 && i%5 == 0
-All above fails print the number //print number
*/
for (let i = 1; i<=100; i++){
    if (i%3==0 && i%5 !=0){
        console.log("Relevel");
    }
    else if (i%3 !=0 && i%5 ==0){
        console.log("Buzz");
    }else if(i%3==0 && i%5==0){
        console.log("MindBuzz");
    }else{
        console.log(i);
    }
}