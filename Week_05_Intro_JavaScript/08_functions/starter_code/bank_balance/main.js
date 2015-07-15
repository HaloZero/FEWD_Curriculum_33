var bankBalance = 1000;

function checkBalance() {
    console.log("Bank Balance is "+bankBalance);
}

function buyCoffee() {
    bankBalance = bankBalance - 5;
    console.log("Bought Coffee!");
}

checkBalance();

// Step 1: Buy a coffee and then check the balance.
// Make sure the balance has changed. Try buying multiple coffees.

// Step 2: Create a new function that lets you buy laundry detergent for 10
// Make sure it works by buying detergent and then checking the balance

// Step 3: Create a new function that lets you buy a bed frame for 125
// Make sure it works by buying a bed frame and then checking the balance

// Step 4: Reduce the starting balance to 100

// Step 5: Let's make sure that you can never buy something if you can't afford it
// If somebody tries to buy an object that they can't afford.
// Print out "You can't buy that!";

// Step 6: Utilize our knowledge of functions to reduce repeatable code.