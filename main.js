//variabili

var resultEl = document.getElementById("result");

var percentEl = document.getElementById("percent");
var divideEl = document.getElementById("divide");
var delEl = document.getElementById("del");
var CEEl = document.getElementById("CE");
var sevenEl = document.getElementById("7");
var eightEl = document.getElementById("8");
var sixEl = document.getElementById("6");
var nineEl = document.getElementById("9");
var multiplyEl = document.getElementById("x");
var fourEl = document.getElementById("4");
var fiveEl = document.getElementById("5");
var minusEl = document.getElementById("-");
var oneEl = document.getElementById("1");
var twoEl = document.getElementById("2");
var threeEl = document.getElementById("3");
var plusEl = document.getElementById("+");
var zeroEl = document.getElementById("0");
var pointEl = document.getElementById(".");
var equalsEl = document.getElementById("=");




sevenEl.addEventListener("click", function () {
  resultEl.innerHTML += 7;
});
eightEl.addEventListener("click", function () {
  resultEl.innerHTML += 8;
});
nineEl.addEventListener("click", function () {
  resultEl.innerHTML += 9;
});
fourEl.addEventListener("click", function () {
  resultEl.innerHTML += 4;
});
fiveEl.addEventListener("click", function () {
  resultEl.innerHTML += 5;
});
sixEl.addEventListener("click", function () {
  resultEl.innerHTML += 6;
});

oneEl.addEventListener("click", function () {
  resultEl.innerHTML += 1;
});
twoEl.addEventListener("click", function () {
  resultEl.innerHTML += 2;
});
threeEl.addEventListener("click", function () {
  resultEl.innerHTML += 3;
});

zeroEl.addEventListener("click", function () {
  resultEl.innerHTML += 0;
});

pointEl.addEventListener("click", function () {
  resultEl.innerHTML += pointEl.innerHTML;
});

CEEl.addEventListener("click", function () {
  resultEl.innerHTML = "";
});

divideEl.addEventListener("click", function () {
  resultEl.innerHTML += " / ";
});

percentEl.addEventListener("click", function () {
  resultEl.innerHTML += " Best Calc Ever ";
});

delEl.addEventListener("click", function () {
  var newResult = "";
  for (var i = 0; i < resultEl.innerHTML.length - 1; i++) {
    newResult += resultEl.innerHTML[i];
  }
  resultEl.innerHTML = newResult;
});

plusEl.addEventListener("click", function () {
  resultEl.innerHTML += " + ";
});

minusEl.addEventListener("click", function () {
  resultEl.innerHTML += " - ";
});

multiplyEl.addEventListener("click", function () {
  resultEl.innerHTML += " x ";
});

equalsEl.addEventListener("click", function () {
  var firstNumber = "";
  var secondNumber = "";





  for (var i = 0; i < resultEl.innerHTML.length; i++) {
    if (!isNaN(resultEl.innerHTML[i]) || resultEl.innerHTML[i] == ".") {
      firstNumber += resultEl.innerHTML[i];
    } else if (resultEl.innerHTML[i] != "." && resultEl.innerHTML[i] != " ") {
      var sign = resultEl.innerHTML[i];
      var signPosition = resultEl.innerHTML.indexOf(sign);
      break;
    }
  }

  for (var i = signPosition + 1; i < resultEl.innerHTML.length; i++) {
    secondNumber += resultEl.innerHTML[i];
  }

  if (sign == "+") {
    resultEl.innerHTML = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (sign == "-") {
    resultEl.innerHTML = parseInt(firstNumber) - parseFloat(secondNumber);
  } else if (sign == "x") {
    resultEl.innerHTML = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (sign == "/") {
    resultEl.innerHTML = parseFloat(firstNumber) / parseFloat(secondNumber);
  }

  if (isNaN(resultEl.innerHTML)) {
    resultEl.innerHTML = "Non hai messo numeri";
  }
});
