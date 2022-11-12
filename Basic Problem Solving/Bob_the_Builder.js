/*3. Bob the Builder..
Problem Statement:
Bob has recently started his career as a builder. But he is always confused about the number of
bricks that will be needed at the site. To be on safer side he always orders more than the required
number of bricks. This inturn helps him in saving the transportation cost of bricks but adds an
unnecessary burden on the pockets of the client. Due to which most of the clients never call Bob
back for any new project.
Bob needs your help in deciding how many bricks are needed for constructing a wall of length L
meter, height H meter and thickness T meter if 15% of the wall is filled with mortar and the
dimension of 1 brick is 24x12x8 cm.

Input L=24, H = 8, T = 0.6
Output 42500*/

/*Explanation:
Since 15% of the wall is filled with mortar therefore the volume of the wall that needs to
be filled with brick is 85%.
Volume of 1 brick is 24x12x8 cm^3
Therefore the amount of brick needed to fill 85% of the volume of the wall is:
Number of bricks = (0.85 * 24 * 8 * 0.6 * 100^3 ) / ( 24 * 12 * 8 )*/


/*let length = 24;
let breadth = 8;
let thickness = 0.6;

let brick_volume = 24*12*8;
let mortar_percent = 15;
let wall_volume = length * breadth * thickness;

let no_bricks = Math.ceil(((100 - mortar_percent)/100)* wall_volume * (100*100*100)/brick_volume);

console.log ("Number of bricks needed to construct the wall is: ", no_bricks);*/

let length = 24;
let breadth = 8;
let thickness = 0.6;
let no_bricks = Math.ceil (0.85 * length * breadth * thickness * Math.pow(100,3)/2304)
console.log("Number of bricks needed to construct the wall is: ", no_bricks);