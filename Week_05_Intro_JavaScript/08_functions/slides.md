![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Functions


Conjunction junction, what's your function?


---

##Variables

What are variables?

* Programs often work with values, that we want to save and keep.
* The entity we use to store the value is called a variable.

![GeneralAssemb.ly](../img/var-syntax.png)

---

##Associations

When using Javascript you can associate certain key words and characters with certain concepts.

* ""
* 13
* document
* var

---

##DOM

Vocabulary __DOM__: Document Object Model

You can access the HTML in JS by using:
```
  document
```

---
##Functions!

Functions are the worker bees of the programming world. They are a nice object that you can put commands in, and you can fire these functions by calling them in a script.


---

##Functions!

As a general rule of thumb:

* Make your function names descriptive. It's OK if they're several words in camel case. You want to know what that function is for and you might not remember the next hour/day/week/month/year.
* Make your functions do only one thing. It will make debugging easier down the road. It's OK if you write six separate functions that do six things as opposed to one giant function that's trying to do all six things.

---

##Function Syntax

```
function nameOfFunction(){
  //What's my function doing?
}
```

Consists of major parts:

* function keyword
* name of the function (nameOfFunction in this case)
* () for arguments (we'll learn this later)
* {} anything inside the {} gets executed when you call the function

---

##Calling a Function

You fire off a function with a listener:

```
function myFunction() {
  console.log("You fired my function!");
}

document.getElementById('listener').onclick = myFunction;
```

---

## Calling a Function

You can call a function by using it's name and adding () 
This calls the function with no arguments

```
function myFunction() {
  console.log("You called my function!");
}

myFunction(); 
```


---

##Passing Arguments

Functions are a sophisticated type of container. Not only can you perform tasks with them, you can also pass *arguments* to a function so it can work with specific data.

---

##Passing Arguments

You've noticed that function names are followed by arguments:

```function myFunction()```

These parentheses are where you can pass parameters:

```function myFunction(a, b)```

--- 

##Passing Arguments

This now means that myFunction can work with some data that has been put in the a and b containers.

```
  function myFunction(a, b) {
    console.log(a);
    console.log(b);
  }

  myFunction(1, 2);
```

---

##Return in JS

Remember, a function is just a fancy container. It doesn't have to always print out the result of the function. It can hold a value too!

To hold a value, you use the *return* command:

```
function addNumbers(a, b) {
  var c = a + b;
  return c;
}

```

---

##Return in JS

In the previous example, the line   ```return c;``` simply holds the value of ```addNumber```. It doesn't automatically print it out. This is useful because I could use that value in a different function if I wanted to.

``` 
function addNumbers(a, b) {
  var c = a + b;
  return c;
}

var sum = addNumbers(1, 6);
console.log(sum); // prints 7
```


---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Review: Make a Better Score Keeper

Objectives:

* Let's restrict what the score can be: must be greater than 0 and less than 25
* How can we utilize our knowledge of functions to accomplish this?

---

##Anonymous Functions

So far, most functions you've learned about are named. This is mainly because you want to call a specific function at a specific time, especially if you have a bunch of functions written. But there is another type of commonly used function: the *anonymous function*.

It looks like this:

```
function(){
  //do something here
}
```

---

##Why Anonymous Functions?

Anonymous functions are meant to fire immediately, and they usually fire once. Often times, they're meant to fire as soon as a page is loaded.

They can also be assigned to a variable. (Remember, a function is just a giant container that can return a value).

This sometimes happens when it's not necessary to write a listener and you need the function to do only one thing.

---

##Why Anonymous Functions?

We'll cover anonymous functions more in jQuery. jQuery uses them all the time.

<br>
They're mainly used as __callbacks__.

Callbacks are functions that are called once a series of actions are done. ex. when a page is loaded, or when a AJAX request is finished and comes back with data from the server

---

##Anonymous Functions Syntax

```
document.getElementById("box").onclick = function(event) {
  console.log("Wheee");
}
```

This is equivalent to saying

```
var doStuff = function(event) {
  console.log("Wheee");
}

document.getElementById("box").onclick = doStuff;
```

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Rock Paper Scissors