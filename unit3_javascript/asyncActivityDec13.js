1.// Create a function that will determine if a number passed into it's funtion parameters is either positive or negative. For example, If I pass in the number 10 it should return the message,"this is a positive number", or if I type in the number -12, it should return the message, "this is a negative number. If the user types in zero, it should return the message; "this is zero".



function number(Number) {
    if (Number == "10") {
        console.log("This number is postive");
    } else if (Grades == "-9")
        console.log("This number is negative");
    else if (Grades == "-15") {
        console.log("This number is negative ");
    } else if (Grades == "11")
        console.log("This number is postive ");
    else if (Grades == "-4")
        console.log("This number is negative ")
}
Number(-9);




2. //You have been hired by netflix to help them develop a movie ticket program. You must create a function that will check the movie goers age and return the price of the movie ticket based on that person's age. Provided are the lists of age and the prices:

//10 and under should pay $5.00
// 16 and up should pay $10.00
// 20 an up should pay $15.00
// 65 and up should pay 5.00

function movieTickets(tickets) {
    if (10 > 0) {
        console.log("should pay $5.00");
    } else if (16 > 0)
        console.log("should have to pay $10.00"); 
           else if (20 > 0)
        console.log("should pay $15.00");

                 else if (65 > 0 )
            console.log("should pay $5.00");

      

}
movieTickets();





// 3. You have been hired by target to assist them with their store member discount software. The would like to make it so that shoppers who have a specific membership tier can save a certain amount of money on the products they buy. provided below are the memberships and the discount amount they should recieve:
// superShopper should recieve a 10% discount on their items
// megaShopper should recieve a 15% discount on their items
// ultraShopper should receive a 20% discount on their items



//#determine the price of the item base om the user memendership
function discountFuncation(membership){
console.log("testing,funcation works");
if (membership === "superShopper"){
    console.log("you are a super shopper,here is a 10 percent discount.")
         var discountAmount = itemPrice *0.1;
         console.log(discountAmount);
         var total = itemPrice - discountAmount;
         console.log(total);

} else if(membership == "megashopper")
console.log("you are a mega shopper,here is a 15 percent discount.");
 var discountAmount = itemPrice *0.15;
         console.log(discountAmount);
         var total = itemPrice - discountAmount;
         console.log(total);

}    else if(membership === "ultra shopper")
    console.log("you are a ultra  shopper,here is a 20 percent discount.");
else {
    console.log("error,sorry this membership doesnt exist");
}
 var discountAmount = itemPrice *0.2;
console.log(discountAmount);
var total = itemPrice - discountAmount;
console.log(total);

discountFuncation();