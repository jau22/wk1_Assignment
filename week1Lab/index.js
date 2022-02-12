
//create a variable to hold the quantity of available plane seats left on a flight
var quantityPlaneSeats = 10;
		
//create a variable to hold the cost of groceries at checkout
var groceryCost = 33.95;

//create a variable to hold a person's middle initial
var middleInitial = "H";

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = false;
//create a variable to hold a customer's first name
var customerFirstName = "James";

//create a variable to hold a street address
var streetAddress = "555 Main Street";

//print all variables to the console
console.log(quantityPlaneSeats);
console.log(groceryCost);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
console.log(quantityPlaneSeats -= 2);

//impulse candy bar purchase, add 2.15 to the grocery total
console.log(groceryCost += 2.15);
//costOfGroceries = costOfGroceries + 2.15;


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "S";

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = true;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + " " + middleInitial + " " + "Au";

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Our customer's name is " + fullName + ". He/She lives at " + streetAddress + ".");

console.log(groceryCost + "30");

console.log(groceryCost == 36.1);

console.log(groceryCost == "36.1");

console.log(groceryCost === "36.1");

var nothing;

console.log(groceryCost + nothing);

console.log(nothing);