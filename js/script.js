//When click outside element
document.querySelector('body').addEventListener('mouseup', function(event){
    var overlay = document.getElementById("overlay");
    var search = document.getElementById("searchbar");
    var searchbutton = document.getElementById("searchbtn");
    if (event.target == overlay){
      closeNav();
    }
    if(event.target != searchbutton && event.target.parentNode != searchbutton && event.target != search && event.target.parentNode != search){
      //JQuerry
      $("input[type=text]").slideUp("fast");
    }
});
  
// When the user scrolls down 90px from the top of the document, resize the navbar's padding and the logo's height
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("topnavbar").style.padding = "35px 0px";
    document.getElementById("logo").style.height = "60px";
    document.getElementById("searchbar").style.top = "70px";
  } else {
    document.getElementById("topnavbar").style.padding = "80px 0px";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("searchbar").style.top = "160px";
  }
}

// Set the width of the sidebar to 0 (show it) 
function openNav() {
    document.getElementById("sidepanelbar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
  }
  
// Set the width of the sidebar to -300px (hide it)
function closeNav() {
  document.getElementById("sidepanelbar").style.left = "-300px";
  document.getElementById("overlay").style.display = "none";
}

// Dropdown 
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//JQuerry
$(document).ready(function(){
  $(".searchbtn").click(function(){
    $("input[type=text]").slideToggle("fast");
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".down-button").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});