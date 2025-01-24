//loop- A programming construct
// that repeats a set of code instruction
// over and over until a specfic condition
// is met.


//while loops- this is a special
//type of loop that repeat code
//instructions over and over so long 
// as a specific condition is true


//function basicLoop() {
// var value = 0;
//while (value < 10) {
//      console.log("ERROR");
//  } value += 5
//}

//basicLoop()


//function basicLoop() {
//  var value = makai;
// while (value == makai) {
//console.log("ERROR");
// } value += 5
//}

//basicLoop()


function tragiclight() {
    var lightcolors = ["red", "yellow", "green"];
    var timer = 0;
    while (timer < 60) {
        console.log("this light is " + lightcolors[0]);
        timer += 1;
        if (timer == 10) {
            console.log("light is about to change");
        }

    }
}
tragiclight()