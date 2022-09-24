//Use setInterval to append a red 200px by 200px onto the body of a webpage every half second.
setInterval(function () {
  document.body.innerHTML += "<div></div>";
}, 500);
