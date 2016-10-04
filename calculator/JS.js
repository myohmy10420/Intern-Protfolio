(function () {

  var calculator = document.getElementById("calculator"); //catch whole calculator
  var input = document.getElementById("input");  //catch all button and result text
  var isShowingResult = false;

  calculator.addEventListener("click", handleCalculatorClick, false);

  function handleCalculatorClick(event) {

    var type = event.target.getAttribute("data-type");  //catch button element
    input.value += type;

  }

})();
