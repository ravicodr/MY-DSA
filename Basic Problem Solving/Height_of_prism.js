/*1. Height Of Prism :
Problem Statement:
Given the volume and perimeter of the triangular base of the prism, and the circumference of the
inner circle. Calculate the height of the prism*/

// let radius = 3;
// let perimeter = 15;
// let volume = 270;

// let semiperimeter = perimeter/2;
// let area = radius * semiperimeter;
// let height = volume/area;
// console.log(" height of the prism is", height, "cm");


/*LightWeight solution*/

let radius = 3;
let perimeter = 15;
let volume = 270;

let height = volume/ (radius * (perimeter/2));
console.log("Height of the prism is", height,"cm");
