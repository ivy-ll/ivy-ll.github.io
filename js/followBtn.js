var button = document.getElementById("prof-follow-btn");
var followCount = document.getElementById("prof-follow-count");

var count = localStorage.getItem("followCount") ? parseInt(localStorage.getItem("followCount")) : 0;

followCount.innerHTML = count;

button.addEventListener("click", function() {
  count++;
  followCount.innerHTML = count;

  localStorage.setItem("followCount", count)
});
