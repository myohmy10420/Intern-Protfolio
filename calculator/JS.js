(function () {

  var calculator = document.getElementById("calculator"); //catch whole calculator
  var input = document.getElementById("input");  //catch all button and result text
  var isShowingResult = false;

  calculator.addEventListener("click", handleCalculatorClick, false);

  function handleCalculatorClick(event) {

    var type = event.target.getAttribute("data-type") || "";  //catch button element
    var isTypeWithoutSpace = !! type.match(/[\d\.]/);  //is number or sign

    if (isShowingResult) {
      input.value = "";
      isShowingResult = false;
    }

    if ("" === type) {
      return;
    }

    if("ce" === type) {
      input.value = input.value.slice(0, -1);
      return;
    }

    if ("=" ===type) {
      try {
        input.value = safeEval(input.value);
      }
      catch(err) {
        console.log("safeEval failed", err);
        input.value = "error";
      }
      isShowingResult = true;
      return;
    }

    input.value += isTypeWithoutSpace ? type : (" " + type + " ") ;

  }

  function safeEval(str) {
    return eval((str).replace(/[xX]/, "*"));
  }

})();
