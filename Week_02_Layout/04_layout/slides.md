![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Layout

###Rohan Dhaimade

---

## Objectives ##

- Predict css styling that rely on inheritance
- Understand when to use classes and ids
- Utilize reset css
- Organize and use float for layout

---

##Review

Nested Selectors

---

##Selectors

Go until exercise 11, after that it's more advanced selectors

http://flukeout.github.io/

---

##CSS Inheritance

Some properties, by default will inherit from their ancestors or parent elements. Apply a font to the body, will give every element a font to that body.

Other properties that inherit:

<ul>
<li>color</li>
<li>font-weight</li>
<li>font-size</li>
<li>background-color</li>
<li>Usually any properties involving the font/text/color of things is inherited.</li>

---

##CSS Inheritance

What color will each of these be?

```
<h3>
	<a>Link 1</a>
</h3>

<a>Link 2</a>

<h3>Link 3</h3>
```

if these are the css rules:
```
a {
	color: green;
}

h3 {
	color: orange;
}
```

---

##Classes and Ids

With classes and ids, we can organize how we manipulate elements on a page.

You can add a class or an ID to any HTML tag. This can allow customized styling to that element

---

##Classes and Ids

###Ids are unique

You add an id to an item that will only be used once on a page (headers, footers, etc). This will be important for javascript and dynamic programming.


### Classes are for organizing

You can re-use classes, you can add it to any element regardless of what tag it's applied to. This becomes handy when you want to style common things (example: buttons on a page)

---

##Classes and Ids

![](../../img/unit_1/tags_attributes.png)

---

##Classes and Ids

HTML example

    <p class='slanted-paragraph'>
      We want text inside slanted paragraphs, to be italics
    </p>

CSS

    .slanted-pargraph {
      font-style: italic;
    }

This will make any element with the class 'slanted-paragraph' have italics font. But only those, it will not affect all paragraphs. So if you want multiple slanted paragraphs on a page, you only have to make one css rule.

---

### CSS Specificity

Why does my css not apply?

CSS selectors are not equal, depending on the ones you use they have more precedence.

In order of importance:

1. Inline style tags
2. Id tags
3. Classes
4. Tag selectors/Psuedo-Class
5. If two selectors have the same specificity, the later one takes over.

---
### Useful knowledge of selectors ###

https://css-tricks.com/little-css-stuff-newcomers-get-confused-about/

More about Speficity:
http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/

---

###Reset CSS

CSS Resets are used to reduce browser inconsistencies in things like line-height, font-sizes, and margins.

Usually it's best to keep your reset css in a separate file and link it BEFORE your css.

```
<link rel="stylesheet" type="text/css" href="reset.css">
```

http://meyerweb.com/eric/tools/css/reset/


---

##Floats

Float is a CSS positioning property, used to layout a web page.

![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)

Note:
Image from Chris Coyier's CSS-Tricks


---

##Floats

When you float something, you turn it into an __inline__ element. So it will become as big as it needs to be and won't cause new lines anymore.

---

##The Clear Property

clear has four properties: left, right, both, or none

It tells any elements floated to clear way and create a new line for any other floated elements.

---

##Clearfix

clearfix is a bit of misnomer. What it does it tells a container element to accomodate the height/width of all the floated elements inside of it.

```
.clearfix {
	overflow: auto;
	zoom: 1;
}
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Floating Sections


---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Grumpy Cat

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

##Fashion Blog Part 2
