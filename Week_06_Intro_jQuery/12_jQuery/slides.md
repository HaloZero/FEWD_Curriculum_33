![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - jQuery

###Rohan Dhaimade

jQuery, let's rock this.

---


##Objectives

*	Translate our current use of HTML interation with jQuery
*  Utilize jQuery to make our code simpler
*  Use jQuery selectors 

---

##jQuery


jQuery __is__ JavaScript

---


##jQuery

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

In other words, jQuery provides a way of writing DOM manipulation functions a lot easier. 


---

##jQuery

*	jquery.com - A JavaScript library that makes DOM manipulation simple.

*	"Cross browser" - works the same in all* browsers.

*	Allows:
	*	Document traversal
	*	CSS Manipulation
	*	Event Handling
	*	Animation
	*	and more!

---

##jQuery

Adding jQuery to your website

* Download the file and link it normally
* Link to a file hosted by Google: http://goo.gl/uynHR8
* Full URL: https://developers.google.com/speed/libraries/devguide#jquery


---

##jQuery

###$

The Dollar Sign

---

##jQuery

When you want to select an element with jQuery to manipulate it, you use the same *selector* as you would for CSS.

```
$(".class").click();
$("#id").toggle();
$("tag").show();
```

This works with nested selectors as well! 

```
$("nav .active").show();
```

---

##jQuery More

No more innerHTML!

```
var text = document.getElementById("mainText").innerHTML;
document.getElementById("mainText").innerHTML = 'Yeah you know me'
```

This is equivalent to what we've been doing:

```
var text = $("#mainText").text();
$("#mainText").text('Yeah you know me');
```

---

##jQuery Values

Remember how we modified input tags?

```
var value = document.getElementById("mainInput");
document.getElementById('mainInput').value = 5;
```

This is equivalent to what we've been doing:

```
var value = $("#mainInput").val();
$("#mainInput").val(5);
```

---

##jQuery onClick

```
function clickHeader() {
	console.log("You've clicked on my header");
}

$("header").click(clickHeader);

```

---

##jQuery

Everything you need to know is here:

###http://jquery.com/

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Score Keeper

Objectives

* Translate our DOM interaction with jQuery!

--- 

![GeneralAssemb.ly](../../img/icons/instr_lab.png)
## Rock Paper Scissors

Convert your Rock Paper Scissors solution to jQuery.
Remember to add jQuery script to your page.

Time: 15 minutes.

---

##JQuery Versions

1.x supports IE 6, 7, and 8.

Use 2.x when you don't have to support legacy browser, it will be faster, smaller, and better.

---

##Common Methods

```
$("section").hide();
$("section").show();
```

Show and hide allow you to make elements visible or hide them!

---

##Common Patterns 

You'll see some common patterns involving DOM manipulation.

Adding/Removing classes is pretty common to change styling. This allows us to make sure all our styling is ONLY in our css files.

```

$("a").addClass("active");
$("a").removeClass("active");

```

Common Use: When you have a series of links and the current active page one has different styling.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Black Out!

Objectives:

* Remove and add classes in order to build functionality
* Read the CSS file for an assignment in order to understand what's available to you.

* Advanced: With some functionality provided by jQuery, you can implement your click function with one line. Read the jQuery documentation and figure it out. 

---

##Debugging

There's one major caveat to using jQuery.

This will throw an error if there no element with id "wackyButton" this page.

```
document.getElementById("wackyButton").onclick = function() {
  console.log("wacky");
}
```

jQuery will fail silently. This still does nothing, but it won't throw an error anymore. If jQuery can't find any elements, it wont't tell you.

```
$("#wackyButton").click(function() {
  console.log("wacky");
})
```

---

##Chaining

You'll see in the examples that you can __chain__ multiple jQuery functions.

```
$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
```

Why can you do this? Because just like $("p") returns back the DOM element, .removeClass also returns back the DOM element. Any jQuery function without an explicit return like .text() will return back the DOM element.

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##jQuery Basic Tabs

--- 

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Citipix



