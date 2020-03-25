//When click outside element
document.querySelector('body').addEventListener('mouseup', function(event){
    var sidepanel = document.getElementById("sidepanelbar");
    var search = document.getElementById("searchbar");
    if(event.target != sidepanel && event.target.parentNode != sidepanel){
      closeNav();
    }
    if(event.target != search && event.target.parentNode != search){
      closeSearchBar();
    }
  });
  
  // When the user scrolls down 90px from the top of the document, resize the navbar's padding and the logo's height
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("topnavbar").style.padding = "50px 0px";
      document.getElementById("logo").style.height = "70px";
      document.getElementById("searchbar").style.top = "100px";
    } else {
      document.getElementById("topnavbar").style.padding = "110px 0px";
      document.getElementById("logo").style.height = "200px";
      document.getElementById("searchbar").style.top = "220px";
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
  
  function openSearchBar(){
    document.getElementById("searchbar").style.border = "1px solid #ccc";
    document.getElementById("searchbar").style.height = "70px";
    document.getElementById("searchbar").style.zIndex = "2";
  }
  
  function closeSearchBar(){
    document.getElementById("searchbar").style.height = "0";
    document.getElementById("searchbar").style.border = "none";
    document.getElementById("searchbar").style.zIndex = "-1";
  }