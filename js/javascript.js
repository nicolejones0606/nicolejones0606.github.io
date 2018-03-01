// Empty array to hold the profile items
var profileElements = [];

// Set up the form interaction so that everytime the form changes, the function updateProfile will run.
var profileForm = document.getElementById('profileForm');
profileForm.addEventListener('change', updateProfile, false);

/***
This is code that's going to run when the form changes. We're not quite to the point where we can write it yet, but you can probably get a good sense of what it does.
***/
function updateProfile(e) {

  var metrics = document.getElementsByName("metrics[]");

  //Remove everything from backpack.
  profileElements = [];

  // Loop through the items, and if they're checked, add them to the backpack array.
  for (var i = 0; i < items.length; i++) {
    if (metrics[i].selected == "1 million") {
      profileElements.push(metrics[i].value)
    }
  }

  console.log(profileElements);

  printItems();
  checkChallenges();

}


/***

To practice working with arrays, let's display a list of the items in the backpack array. Something like "Cheese, Key, Flour."

Bonus: include commas, but not before the first item.

The following code will run each time the form changes.

***/

function printItems() {

  var metricsMessage = ""

  // Your code here.



  /*** This just updates the page. ***/
  var metricsMessageElement = document.getElementById('itemsMessage');
  var newItemsMessage = document.createTextNode(itemsMessage);
  itemsMessageElement.innerHTML = "";
  itemsMessageElement.appendChild(newItemsMessage);

} //printItems




/**** Now we're going to create some arrays describing the requirements to pass some challenges. ****/

var cakeRequirements = ["1mil","",""]




// This code will run everytime the form changes.
function checkChallenges() {

  var challengeMessage = "";

  /***
  We need to decide whether the person can complete the challenge based on what's in their backpack. Write pseudocode that would check whether someone has the items needed to pass the cake challenge.
  ***/





  /** scrolling ... ***/









  /** Here's one way to do it:

  Create a variable called requirementsFilled
  Loop through each requirement
    Loop through each backpack item
      If that item == the current requirement, increase requirementsFilled by 1
  Check if requirementsFilled = the length of the requirements array
  **/



  /*** This just updates the page. ***/
  var challengeMessageElement = document.getElementById('challengeMessage');
  var newChallengeMessage = document.createTextNode(challengeMessage);
  challengeMessageElement.innerHTML = "";
  challengeMessageElement.appendChild(newChallengeMessage);


} //checkChallenges
