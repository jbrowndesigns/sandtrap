"use strict"
// Menu
var coll = document.getElementsByClassName("collapsible");
var i;

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



// Popup 
/***
const pop = document.querySelector('.pop');
const closeButton = document.querySelector('.popupCloseButton');

closeButton.addEventListener("click", closePop);

function closePop(){
pop.style.display="none";
}
*********/
/********* HTML
    <!-- Pop-UP -->
    <!-- <div class="pop">
      <div class="pops">
        <h1>Saint Patty's Special <i class="fas fa-beer"></i></h1>
        <h2>March 17th</h2>
        <h2>Corn Beef & Cabbage - $17.95</h2>
        <h2>Irish Nachos or Reuben Sandwich - $14.95</h2>
          <div class="popupCloseButton">&times;</div>
          <img src="img/SaintPattys.png" alt="">
      </div>
    </div>        -->

**********/

// function addNewPrefix() {
//   const dtElements = document.querySelectorAll('dl dt.new');

//   for (const dtElement of dtElements) {
//     dtElement.textContent = 'New: ' + dtElement.textContent;
//   }
// }


function capitalizeWords() {
  const parentElement = document.querySelector('.content dl.capitalize');
  const dtElements = parentElement.querySelectorAll('dt');

  for (const dtElement of dtElements) {
    const text = dtElement.textContent;
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (!isNaN(word)) continue; // Skip if the word is a number

      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }

    dtElement.textContent = words.join(' ');
  }
}



capitalizeWords();
// addNewPrefix();


