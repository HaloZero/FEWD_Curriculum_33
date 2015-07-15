var bankBalance = 1000;

function checkBalance() {
    console.log("Bank Balance is "+bankBalance);
}

function buyCoffee() {
    bankBalance = bankBalance - 5;
    console.log("Bought Coffee!");
}

checkBalance();