//Create a function that will accept a word in the function parameter and return the word in reverse order.For example, the word 'pet' should return as 'tep', the word 'book' should return as 'koob', etc.HINT - There is a built -in function that you can use to accomplish this.Please use W3 schools to research what function you'll need to use.

function reverseText(word){;
let newString =  Array.from(word);
let reverse_word = newString.reverse()
console.log(reverse_word)
}

reverseText('job')
//Create a function that uses a conditional statement to output a block of text that will tell users about a states landmarks. Your program should return the following states and their respective landmarks. For example, if a user passes in the value of south carolina, in the function parameter, your program should return the message: ' A landmark in South Carolina is Fort Sumter, where the inital shots of the' 'American Civil war took place.' WRITE A COMPLETE SENTENCE!