var inpDisplay = document.getElementById("inp-display");

function inpHandler(num) {
  console.log(num);
  inpDisplay.value += num;
}

function clearAll() {
  inpDisplay.value = "";
}
function calculate() {
  var data = inpDisplay.value;
  var result = eval(data);
  //   inpDisplay.value += ` = ${result}`;
  inpDisplay.value = result;

  console.log("data===> ", data);
  console.log("result===> ", result);
}
