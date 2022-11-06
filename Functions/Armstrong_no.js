let output_value = 0;
const input_value = 153;

//create a temporary variable
let temporary_value = input_value;
while (temporary_value > 0) {
    //finding the ones digit
    let remainder_value = temporary_value % 10;

    output_value += remainder_value*remainder_value*remainder_value;

    // REMOVING LAST DIGIT FROM THE NUMBER
    temporary_value = parseInt(temporary_value/10); //CONVERT FLOAT INTO INTEGER
}
//check the condition
if (output_value == input_value) {
    console.log ( `${input_value} is an Armstrong number`);

}
else{
    console.log (`${input_value} is not an Armstrong number.`);
}