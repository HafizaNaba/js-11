// Write a program that takes a positive integer from user & display the following in your browser.
var num = +prompt("Enter a positive decimal number:");

newNum = Math.round(num);
numNew = Math.floor(num)
Ceil = Math.ceil(num)
document.write("Number : "  +num + "<br>"+
    "Round off value : "+ newNum + "<br>" 
    + "Floor Value : " + numNew+ "<br>" +
"ceil value : " + Ceil  + "<br>" );





// Write a program that takes a negative floating point number from user & display the following in your browser. 
var num = +prompt("Enter a negative decimal number:");

newNum = Math.round(num);
numNew = Math.floor(num)
Ceil = Math.ceil(num)
document.write("Number : "  +num + "<br>"+
    "Round off value : "+ newNum + "<br>" 
    + "Floor Value : " + numNew+ "<br>" +
"ceil value : " + Ceil + "<br>" );



// Write a program that displays the absolute value of a number. 
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var absolute = -4;
newAbsolute = Math.abs(absolute);
document.write("The absolute value of  " + absolute + " is : " + newAbsolute + "<br>"  )

// Write a program that simulates a dice using random() method of JS Math class. Display the
//  value of dice in your browser.:
var diceValue = Math.floor(Math.random() * 10) + 1;
document.write("random dice value: " + diceValue + "<br>" );

//Write a program that simulates a coin toss using random()method of JS Math class. Display 
// the value of coin in your browser

var toss = Math.random()
var coin;
var text;

if(toss < 0.5){
coin = 2;
text = "random coin value: Heads"
    
}else{
    coin = 1
text = "random coin value: Tail"

}

document.write(coin+ "<br>"+ text + "<br>")


//6. Write a program that shows a random number between 1 and 100 in your browser.
var numbers = Math.floor(Math.random()*100)+1;
document.write("random number between 1 and 100 : " + numbers + "<br>" );


// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
//Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
var userInput = prompt("Enter your weight in Kilogram");
var weight = parseFloat(userInput)
document.write("The weight of user is " +weight + "  kilogram")

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to
//  input a number between 1 and 10. If the user input equals the secret number, congratulate the
//  user. 
var secretNum = prompt("Enter a number between 1 to 10");
if(secretNum === "7"){
    alert(" congratulat")
}else{
    alert("Try again")
}