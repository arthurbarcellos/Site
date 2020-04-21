//Open page tab (ensino)
function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "";
        tablinks[i].style.borderBottom = "none";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.color = "#26408d"; 
    elmnt.style.borderBottom = "7px solid #ffd600";
}
  
// Get the element with id="defaultOpen" and click on it (ensino)
document.getElementById("defaultOpen").click();