function openMenuOption(evt, menuOption) { 
  var i;
  var x = document.getElementsByClassName("menu-option");
  var tablinks
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablink");

  for (i=0; i < x.length; i++) {
    // deactivates current all tabs
    tablinks[i].className = tablinks[i].className.replace(" menu-option-active", "")
  }

  // activate clicked tab and display its contents
  document.getElementById(menuOption).style.display = "block";
  evt.currentTarget.className += " menu-option-active"
}