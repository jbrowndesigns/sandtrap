"use strict"
// Menu JS


// Collapsable Menu
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// Add the NEW tag where .new class is used

function addNewPrefix() {
  const dtElements = document.querySelectorAll('dl dt.new');

  for (const dtElement of dtElements) {
    dtElement.textContent = 'New: ' + dtElement.textContent;
  }
}

// Capitalize first letter function
function capitalizeWords(){
  const dtElements = document.querySelectorAll('.capitalized dt');
  
  dtElements.forEach(dt => {
    const originalText = dt.textContent;
    const words = originalText.split(' ');
    
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    const capitalizedText = capitalizedWords.join(' ');
    dt.textContent = capitalizedText;
  });
  /******
  In this JavaScript code, the querySelectorAll('.capitalized dt') method selects all the <dt> elements within the element with the class "capitalized".

  For each <dt> element, it splits the text content into words using the .split(' ') method. Then, it capitalizes the first letter of each word using the .charAt(0).toUpperCase() + word.slice(1) technique.

  Finally, it joins the capitalized words back into a single string and sets the text content of the <dt> element to the newly capitalized text.
  */
}



capitalizeWords();
addNewPrefix();
