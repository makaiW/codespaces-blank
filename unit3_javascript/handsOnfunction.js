
//() curly brackets called parameters.
//this is the designated are where we
// pass im data into the function definition

//data type 
//function profileBio(name, income, debt) {
    //console.log('username:' + name)
   //console.log('net worthis:' + income)
    //let totalValue = income - debt;
    //console.log('my networth is:' + totalValue)
 //}
//profileBio('makai', 5654486, 900000);

//lesson on condition statement
//conditional statement are comprised of the
//'IF' and 'ELSE' keywords. they allow us to
// make decesion in our funcation based on the 
//data we recieve 

//function checkTVInventory(TVS) {
   // if (TVS > 0) {
   //     console.log("Tv is in stock!");
    //} else {
   //     console.log('sorry,out of stock.');
   // }
 //}// checkTVInventory(30)







//function hourToMinutes(hour){
   // console.log(hour * 60)
 //}
//hoursToMinutes(38)



function doctorPay(hour){
    if(hour <= 8){
        console.log("you will get pay normal pay for the day.");
    } else if (hour > 8 && hour < 16){
        console.log("you qualify for overtime.");
    } else if (hour > 16 && hour < 24){
        console.log("your working way too hard.");
    } else if(hour >= 24){
        console.log("you need to go home.");
    }
    
    
    
}
doctorPay(8);