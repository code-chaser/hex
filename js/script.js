(function (window, document) {})(window, document);

function check1() {
  var x = document.getElementsByClassName("input");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.borderColor = document.getElementById("color-box").value;
  }

  document.getElementById("value-box").value =
    document.getElementById("color-box").value;
}

function check2() {
  var x = document.getElementsByClassName("input");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.borderColor = document.getElementById("value-box").value;
  }

  document.getElementById("color-box").value =
    document.getElementById("value-box").value;
}

function copyToClipboard() {
  const copyHex = document.getElementById("value-box");
  copyHex.addEventListener("change", updateValue);
  function updateValue(e) {
    copyHex.setAttibute("value", e.target.value);
  }
  const copyCode = copyHex.value;
  navigator.clipboard.writeText(copyCode);

  const tooltip = document.getElementById("copyTooltip");
  tooltip.textContent = "Copied!";
  tooltip.classList.add("slide-out-bck-center");
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboard);
