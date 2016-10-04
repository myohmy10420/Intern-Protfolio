(function () {

  var calculator = document.getElementById("calculator"); //catch whole calculator
  var input = document.getElementById("input");  //catch all button and result text
  var isShowingResult = false;

  calculator.addEventListener("click", handleCalculatorClick, false);

  function handleCalculatorClick(event) {

    var type = event.target.getAttribute("data-type") || "";  //catch button element
    var isTypeWithoutSpace = !! type.match(/[\d\.]/);  //is number or sign

    if ("" === type) {
      return;
    }

    if("ce" === type) {
      input.value = input.value.slice(0, -1);
      return;
    }

    input.value += isTypeWithoutSpace ? type : (" " + type + " ") ;

  }

})();
