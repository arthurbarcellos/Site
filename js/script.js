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
    document.getElementById("logo-name").style.fontSize = "0";
  } else {
    document.getElementById("topnavbar").style.padding = "80px 0px";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("searchbar").style.top = "160px";
    document.getElementById("logo-name").style.fontSize = "21px";
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

// Dropdown menu
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

// Scroll to top.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Set calendar
var addM = 0;

setCalendar(addM);

var d = new Date();
var indexMonth = d.getMonth();

// Go previous month
function prevMonth() {
  if (indexMonth > 0) {
    addM--;
    setCalendar(addM);
    indexMonth--;
  }
  else {
    addM = -(d.getMonth());
    setCalendar(addM);
  }
}

// Go next month
function nextMonth() {
  if (indexMonth < 11) {
    addM++;
    setCalendar(addM);
    indexMonth++;
  }
  else {
    setCalendar(addM);
  }
}

function setCalendar(m) {
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  document.getElementById("days").innerHTML = "";

  document.getElementById("month").innerHTML = months[(d.getMonth() + m)];
  document.getElementById("year").innerHTML = d.getFullYear();

  var kalendae = new Date();
  kalendae.setFullYear(d.getFullYear(), (d.getMonth() + m) , 1);

  var weekday = kalendae.getDay();

  //Number of days in month
  function daysInMonth(month) {

    var daysInMonth = 0;

    if (months[month] == "Abril" || months[month] == "Junho" || months[month] == "Setembro" || months[month] == "Novembro") {
      daysInMonth = 30
    }
    else if (months[month] == "Fevereiro") {
      if (( d.getFullYear() % 4 == 0 && d.getFullYear() % 100 != 0 ) || (d.getFullYear() % 400 == 0)) { 
        daysInMonth = 29;
      } 
      else {
        daysInMonth = 28;
      }
    }
    else {
      daysInMonth = 31;
    }

    return daysInMonth;
  }

  var prevMonth = daysInMonth((d.getMonth() + m) - 1);

  // days out of selected month (prev)
  for(var i = (weekday - 1); i >= 0; i--) {
    document.getElementById("days").innerHTML += '<li><span class="dayout">' + (prevMonth - i) + '</li>\n';
  }

  // days of the selected month
  for(var i = 1; i <= daysInMonth((d.getMonth() + m)); i++){
    if((i == d.getDate()) && ((d.getMonth() + m) == d.getMonth())){
      document.getElementById("days").innerHTML += '<li><span class="active">' + i + '</span></li>\n';
    }
    else {
      document.getElementById("days").innerHTML += "<li>" + i + "</li>\n";
    }
    
  }

  var lastDay = new Date();
  lastDay.setFullYear(d.getFullYear(), (d.getMonth() + m), daysInMonth((d.getMonth() + m)));
  var lastWeekDay = lastDay.getDay();

  // days out of selected month (next)
  for(var i = 1; i < (7 - lastWeekDay); i++){
    document.getElementById("days").innerHTML += '<li><span class="dayout">' + i + '</li>\n';
  }

}





//JQuerry//

$(document).ready(function(){
  $(".searchbtn").click(function(){
    $("input[type=text]").slideToggle("fast");
  });
});

// Scroll smoothly to welcome
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

// Scrool smoothly to top
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scroll-top").on('click', function(event) {
    $('html, body').animate({scrollTop: 0}, 800);
  });
});
