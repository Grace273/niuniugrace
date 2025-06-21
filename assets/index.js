function openMenuOption(menuOption) {
  var i;
  var x = document.getElementsByClassName("menu-option");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(menuOption).style.display = "block";
}