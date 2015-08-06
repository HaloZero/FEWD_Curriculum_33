// Step 1)
// Take your previous lab solution and copy and paste it here (the Javascript only)
// Get that working. I've removed the example song so make sure your code hasn't broken because of it.
// If you didn't finish the lab, finish it up for Step 1

// Step 2)
// Delete the variable musicPlaylist
// now instead make an AJAX request to this url: "https://itunes.apple.com/search?term=abba"
// use the response JSON from that request to populate the page.

// Step 3)
// Now the hard part. Instead of doing a request to https://itunes.apple.com/search?term=abba
// I want you to generate the URL for the AJAX request based on the text
// inside the input element on the page.
// So if I type Journey into that input and hit submit.
// it should create the url
// https://itunes.apple.com/search?term=journey
// and do an AJAX request to that URL

// Step 4)
// We get back more songs from the API than we have!
// Use our knowledge of creating HTML in Javascript to
// show all the songs properly. The first 3 songs you can skip
// so start your loop at index = 2 instead of 0.