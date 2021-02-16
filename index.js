// Pop up

// $(function () {
//     var overlay = $('<div id="overlay"></div>');
//     overlay.show();
//     overlay.appendTo(document.body);
//     $(".popup").show();
//     $(".close").click(function () {
//       $(".popup").hide();
//       overlay.appendTo(document.body).remove();
//       return false;
//     });

//     $(".x").click(function () {
//       $(".popup").hide();
//       overlay.appendTo(document.body).remove();
//       return false;
//     });
//   });

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


