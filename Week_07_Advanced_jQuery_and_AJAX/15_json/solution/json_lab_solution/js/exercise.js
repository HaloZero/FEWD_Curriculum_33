/*
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

var myJSON = {
	'images': ['image1.jpg', 'image2.jpg', 'image3.jpg'],
	'slideshow_name' : 'Pac-Mam',
	'image_specific_classes' : [
		{'class_to_add' : 'super-pac-man'}, 
		{'class_to_add' : 'dot'}, 
		{'class_to_add' : 'dot'}
	]
}
/**
 * Question 1
 * Get the array from myJSON with key 'images'. Store it into q1
 */

var q1 = myJSON['images'];

/**
 * Question 2
 * There's a typo in myJSON with the key 'slideshow_name', correct it to be 'Pac-Man'
 * Store q2 the newly modified value of the key 'slideshow_name'
 */

myJSON['slideshow_name'] = 'Pac-Man';
var q2 = myJSON['slideshow_name'];

/**
 * Question 3
 * Get the first image name from the array value of the key 'images'
 */

var q3 = q1[0];	

/**
 * Question 4
 *  Get the value of 'image_specific_classes'
 *  What is it?
 */

var q4 = myJSON['image_specific_classes'];

/**
 * Question 5
 * Get the first element from q4, store it into q5.
 * What is it? 
 */

var q5 = q4[0];

/**
 * Question 6
 * Using q5, now get the value of the key 'class_to_add' from q5
 */

 var q6 = q5['class_to_add'];

// I promise if you do Q7, Q8 and Q9 there's something cool at the end

 /**
 * Question 7
 * Set the 3 images on the page to the images in q1
 */

 $("img").eq(0).attr('src', q1[0]);
 $("img").eq(1).attr('src', q1[1]);
 $("img").eq(2).attr('src', q1[2]);

 /**
 * Question 8
 * Change the h1 text to the value stored in q2
 */

$("h1").text(q2);


/**
 * Question 8
 * Add the class name you found in q6 to the first image
 */

 $("img").eq(0).addClass(q6);
