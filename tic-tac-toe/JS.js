(function () {

  var wrapper = document.getElementById("wrapper");
  wrapper.addEventListener("click", selectPlayer, false);

  function selectPlayer (event) {
    var pick = event.target.getAttribute("data-pick") || "";
    if ( "" === pick ) {
      alert("Please select First player or Sec player to start game.");
    } else {
      console.log("here", pick);
    }
  }


})();
