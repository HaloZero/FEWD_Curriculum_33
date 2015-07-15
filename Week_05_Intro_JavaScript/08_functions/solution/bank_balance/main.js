var bankBalance = 100;

function checkBalance() {
    console.log("Bank Balance is "+bankBalance);
}

function buyCoffee() {
    buyObject("Coffee", 5);
}

function buyDetergent() {
  buyObject("Detergent", 10);
}

function buyBedFrame() {
  buyObject("Bed Frame", 125);
}

function buyObject(objectName, price) {
  if (bankBalance < price) {
    console.log("You can't buy that!");
  } else {
    bankBalance - bankBalance - price;
    console.log("Bought " + objectName);
  }
}


checkBalance();

buyCoffee();
checkBalance();

buyDetergent();
checkBalance();

buyBedFrame();
checkBalance();
