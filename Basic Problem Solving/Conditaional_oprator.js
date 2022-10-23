/*Create a program which gives output for 
children to go out in park 
if the temperature is between 20 degrees Celcius to 25 degree celcuis and 
if it is not raining outside, ask them to be in play school 
if the temperature is between 18 to 20 Degree celcuis and raining outside, 
then they should not step out of home. */


let temp = 44;
let isRaining = true;

if((temp >= 20 && temp <= 25) && isRaining == false) {
	console.log("Yay! You can go out and play");
}else if ((temp >= 18 && temp <= 20) && isRaining == true) {
	console.log("Stay inside the play school");
}else{
	console.log("Go home and stay there");
}
