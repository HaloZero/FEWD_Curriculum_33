![GeneralAssemb.ly](/reveal/img/icons/FEWD_Logo.png)

#FEWD - Chrome Inspector and Debugging

###Rohan Dhaimade

---


##Agenda

* Chrome Inspector and how to debug your code.

---

## Chrome Inspector CSS Review

You can use the chrome inspector modify a lot of css changes.

Allows you to:

* Debug and figure out what is causing errors in css styling
* Lets you make small changes to a page without having to refresh the page

More information here:
https://developer.chrome.com/devtools/docs/elements-styles

---

## Chrome Inspector Debugging - Exceptions

Let's say you have an error in the syntax in your code. Exceptions will help catch them.

It will also help catch unused variables

---

## Chrome Inspector Debugging - Breakpoints

You can use either the visual debugger to set a *breakpoint*

Or you can call debugger in your code to stop execution there.

---

## Chrome Inspector Debugging - Debugger

**Continue**: continues code execution until we encounter another breakpoint.

**Step over**: step through code line-by-line to get insights into how each line affects the variables being updated. Should your code call another function, the debugger won't jump into its code, instead stepping over so that the focus remains on the current function.

**Step into**: like Step over, however clicking Step into at the function call will cause the debugger to move its execution to the first line in the functions definition.

**Step out**: having stepped into a function, clicking this will cause the remainder of the function definition to be run and the debugger will move its execution to the parent function.

---

## Chrome Inspector Debugging - Console

```console.log``` is cool, you've been using it. It takes a string and you can print it.

```console.count``` lets you count the number of times something is executed

```
	console.count("Some text")  // prints out Some text: 1
	console.count("Some text")  // prints out Some text: 2
```

---

## Chrome Inpector - Additional Tools

Great tips and tricks:
http://www.zsoltnagy.eu/javascript-debugging-tips-and-tricks/

Chrome's Post about CSS/HTML part of Chrome Inspector:
https://developer.chrome.com/devtools/docs/dom-and-styles

Chrome's Post about Javascript part of Chrome Inspector:
https://developer.chrome.com/devtools/docs/javascript-debugging

Chrome's Post about Console API for Chrome Inspector:
https://developer.chrome.com/devtools/docs/console-api