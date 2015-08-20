![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Animations

###Rohan Dhaimade

---


## Objectives

* Webkit animations
* jQuery animations

---

## Using Webkit Animations

```
	/// the animation
	@keyframes move-down {
	    from {
		    top: 0px;
		 }
	    to {
	    	top: 200px;
	    }
	}
```

New css ability! @keyframes

You can specify "from" as and write as many rules as you want
You can specify "to" and it will animate any of those changes

---

```
	// element to apply the animation to
	div {
	    width: 100px;
	    height: 100px;
	    background-color: red;
	    animation-name: move-down;
	    animation-duration: 4s;
	}
```

When you want to add a specific animation to any element we can just add the property animation-name & add a duration.

---

```
	/// the animation
	@keyframes move-down-right {
		0% {
			top: 0px;
		}

		50% {
			top: 200px;
			left: 0px;
		}

		100% {
			top: 200px;
			left: 200px;
		}
	}
```

You can specify %s as well. So if the duration is 4s
It will take 2s to move it to 200px and left: 0px;
From 2s -> 4s it will move it top 200px and left 200px;

---

```

	// element to apply the animation to
	div {
	    width: 100px;
	    height: 100px;
	    background-color: red;
	    animation-name: change-color;
	    animation-duration: 4s;
	    animation-iteration-count: 5;
	}
```

Animation-iteration count allows us to repeat the animation.
It's possible values can be any type of number or the word infinite

---


```
// element to apply the animation to
div {
	animation-name: change-color;
	animation-duration: 4s;
	animation-iteration-count: infinite;
	animation-direction: normal;
}
```

Animation-direction allow us specify the direction of the animation
Possible values include:

* normal
* reverse
* alternate
* alternate-reverse

Alternate and Alternate-reverse only work when you have more than one iteration count

---


## Lab Animation Exercise 1

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

Finish the questions in Exercise 1 css

---


## Easing Functions

You can produce different animation functions. By default it's "linear"

```
	animation-timing-function: ease;
```

The easing functions are:

* ease-in
* ease-out
* ease-in-out
* step-start
* step-end

Let's see how they work

---

## Delays

```
	animation-delay: 1s;
```

Allows you to add delays to the animation start

---

## Transforms

You can also do some interesting fun little transforms

```
	transform: translate(50px, 100px);
```

The options available to you are:

* translate
* rotate
* rotateX
* rotateY
* scale
* skewX
* skewY

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

Exercise 2

---


## Using Animations to do interactivity

Let's put our shake animation code into a separate class

```
	.shake {
		animation-name: shake;
		animation-duration: 0.5s;
		animation-iteration-count: 5;
	}

	@keyframes shake {
		0% {
			left: 5px;
		}

		50% {
			left: -5px;
		}

		100% {
			left: 0px;
		}
	}
```

Now we can add a class to any element and that'll cause it to shake!


---

## Using Animations to do interactivity

```
	$(".box_1").click(function () {
		$(".box_1").addClass("shake");
	});
```

This allows us to shake the button! Every time you click box 1, it adds our class which triggers the animation.

---

## Using Animations to do interactivity

We can't do it again though, it only shakes once :(

How do we know if the animation has ended? Let's use Javascript to remove the class.

```
	$(".box_1").click(function () {
		$(".box_1").addClass("shake");
		$(".box_1").one(
			"animationend",
			function () {
			$(".box_1").removeClass("shake");
			}
		);
	});
```

jQuery.one allows us to trigger an function on an event only once.
First argument is the events you want to listen to
Second is the function you want to execute

---

## Using Animations to do interactivity

Important: You'll note for all of this, all the javascript does add and remove classes! All the animation and changes are in CSS.

This makes your code into separate parts.

HTML is structure
CSS is styling
Javascript is interaction & logic

---

## More Resources

http://tympanus.net/codrops/category/playground/