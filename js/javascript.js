// Setup variables:
var donate;
var netWorth;
var twitter;

// Create the function to process the form. This function will run when the form is submitted. You need to create this function before attaching it to the event, below

var processForm = function(event) {

	// Radio Buttons
	var radioButtons = document.getElementsByName('donate');
	for (var i = 0; i < radioButtons.length; i++) {
			if (radioButtons[i].checked) {
				donate = radioButtons[i].value;
				break; // quits the for loop once you find the option that's selected
			}
	}
	console.log("Do they donate: " + donate);


	// Select for Net Worth
	var netWorthElement = document.getElementById('netWorth');
	var netWorthValue = netWorthElement.options[netWorthElement.selectedIndex].value;
	console.log("Net Worth: " + netWorthValue);

  // Select for Twitter
  var twitterElement = document.getElementById('twitter');
  var twitterValue = twitterElement.options[twitterElement.selectedIndex].value;
  console.log("Twitter: " + twitterValue);

//what to display in the response window
if (donate == "yesDonate" && netWorthValue == "50bil" && twitterValue == "45mil") {
	var target = document.querySelector (".content .dynamic");
	var newHTML = '<h3>Bill Gates</h3> <a class="twitter-timeline" href="https://twitter.com/BillGates?ref_src=twsrc%5Etfw">Tweets by BillGates</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
	target.innerHTML = newHTML;
} else if (donate == "yesDonate" && netWorthValue == "1bil" && twitterValue == "42mil") {
		var target = document.querySelector (".content .dynamic");
		var newHTML = '<h3>Oprah Winfrey</h3> <a class="twitter-timeline" href="https://twitter.com/Oprah?ref_src=twsrc%5Etfw">Tweets by Oprah</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
		target.innerHTML = newHTML;
} else if (donate == "noDonate" && netWorthValue == "1bil" && twitterValue == "49mil") {
		var target = document.querySelector (".content .dynamic");
		var newHTML = '<h3>Donald Trump</h3> <a class="twitter-timeline" href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
		target.innerHTML = newHTML;
} else if (donate == "noDonate" && netWorthValue == "100mil" && twitterValue == "60mil") {
	var target = document.querySelector (".content .dynamic");
	var newHTML = '<h3>Kim Kardashian</h3> <a class="twitter-timeline" href="https://twitter.com/KimKardashian?ref_src=twsrc%5Etfw">Tweets by KimKardashian</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
	target.innerHTML = newHTML;
} else {
	var target = document.querySelector (".content .dynamic");
	var newHTML = '<h3>No such celebrity exists!</h3>';
	target.innerHTML = newHTML;
}

	event.preventDefault(); // Stop the form from submitting.

} // end processForm

// Find the form:
var form = document.getElementById('profileForm');

// Attach a function to the form's submit event:
form.addEventListener('submit', processForm, false);



// fun javascript for changing the visual appearance as the user moves through the form
var charityForm = document.querySelector('.charityForm');
var netWorthForm = document.querySelector('.netWorthForm');
var twitterForm = document.querySelector('.twitterForm');


var formClick = function(event) {
	document.querySelector('.charityForm').style.background = 'white';
}
charityForm.addEventListener('click', formClick, false);

var formClick1 = function(event) {
document.querySelector('.netWorthForm').style.background = 'white';
}
netWorthForm.addEventListener('click', formClick1, false);

var formClick2 = function(event) {
document.querySelector('.twitterForm').style.background = 'white';
}
twitterForm.addEventListener('click', formClick2, false);
