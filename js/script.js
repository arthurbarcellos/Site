//When click outside element
document.querySelector('body').addEventListener('mouseup', function(event){
    var sidepanel = document.getElementById("sidepanelbar");
    var search = document.getElementById("searchbar");
    var searchbutton = document.getElementById("searchbtn");
    if(event.target != sidepanel && event.target.parentNode != sidepanel){
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

  function scrollWelcome() {

    if(window.matchMedia("(max-width: 728px)").matches) {
      /* The viewport is less than, or equal to, 700 pixels wide */
      window.scroll({
        top: 1920,
        left: 0,
        behavior: 'smooth'
      })
    }
    else if(window.matchMedia("(max-width: 1024px)").matches) {
      window.scroll({
        top: 1330,
        left: 0,
        behavior: 'smooth'
      })
    }
    else {
      window.scroll({
        top: 990,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  //JQuerry
  $(document).ready(function(){
    $(".searchbtn").click(function(){
      $("input[type=text]").slideToggle("fast");
    });
  });