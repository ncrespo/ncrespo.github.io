function askQuestions () {




var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + '' + lastName;
console.log('User is called ' + fullName);

var age = prompt('How old are you?');
age = parseInt (age);

if (age >= 18) {

console.log('user is an adult');
} else if (age >= 13) {
	console.log('User is a teenager');
}else {console.log('User is child');
}


if (firstName === 'General' && lastName != 'Assembly') {
	console.log('Hello General!');	
}

var faveColour = prompt("What is your fave colour?");
faveColour = faveColour.toLowerCase();

if (faveColour == 'red' || faveColour == 'green' || faveColour == 'blue') 
$('h1').css('color', faveColour);

}






// When the page loads
$(function() {

	// When the user clicks the image, ask the questions
	$('img').on('click', askQuestions);

	// When the user clicks the heading
	$('h3').on('click', function() {

	// Toggle the next element
	$(this).next().slideToggle(1000);

	});

});