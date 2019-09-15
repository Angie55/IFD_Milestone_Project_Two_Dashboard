window.onload = function(){ 
    
var modal = document.getElementById("helpModal");

var btn = document.getElementById("helpBtn");

var span = document.getElementsByClassName("help_close")[0];

 btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Reset filters/charts button
var resetButton = document.getElementById("reset-btn");

resetButton.onclick = function() {
  dc.filterAll();
  dc.renderAll();
};

};