
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
// const pop = document.querySelector('.pop');
// const closeButton = document.querySelector('.popupCloseButton');

// closeButton.addEventListener("click", closePop);

// function closePop(){
// pop.style.display="none";
// }


