![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Advanced jQuery

###Rohan Dhaimade

---


##Agenda

* Review of jQuery
* Creating HTML
* Event Objects
* Traversing


---

##Review

You can target a tag, ID, or class. Remember, the selector goes at the beginning of your jQuery statement:

```
$("#id-here")
$(".class-here")
$("tag")
```


---

##Useful Functions##

If you wanted to add an attribute to an element, you would use .attr:

```
  $("li.menu").attr("class", "open");
  $("img").attr("src", "grumpy-cat.jpg");
```

The syntax when using .attr is: .attr("attributename", "value");

--- 

## Creating HTML in jQuery ##

You can create some basic HTML elements in jQuery!

You can then put it into your HTML by using .append();

```
var anchorTag = $("<a>").text('Hello');
$("body").append(anchorTag);

```

Note: The use of the <> tells jQuery that you want to create a new Element!

---

##Bookmarks

![GeneralAssemb.ly](../../img/icons/code_along.png)

---

## Event Target ##

The function that you pass into click gives you access to an event object

```
$("#some-id").click(function(event) {
  $(event.target).text("Hello");
});
```

So in this case $(event.target) will be $(#"some-id");


---

##Nature Images

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

Objectives: Learn to use $(event.target) to make your functions easier.

---


## Traversing the Tree ##

The first method of traversal is using .prev() and .next().

This looks at the first selector you declared and then selects the next tag or previous tag from the one you've selected

---

## Traversing the Tree ##

For instance your HTML is

```
<ul>
  <li class="menu-item">Something</li>
  <li>Something else</li>
</ul>
```

```
  $(".menu-item").prev(); // returns nothing
```

```
  $(".menu-item").next(); // returns <li>Something Else</li>
```	

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Changing Color ##

Objectives:

* Use our knowledge of tree traversal to modify the container
* Utilize our knowledge of event.target to determine what color to change it to!

---

## Event Propogation ##

You can stop an event from continuing on it's normal practice.

```
#("a").click(function(event) {
  event.stopPropogation();
}
```

What do you use it for:

* Stopping links from going to different URLs (HTML fallback)
* Stopping forms from submitting

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Trello Lab ##

Objectives:

* Use the structure of the HTML and our knowledge of DOM Traversal to make one function that works on both lists. 
* 



