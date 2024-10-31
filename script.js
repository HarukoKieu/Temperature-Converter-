function Converter() {
  let inputValue = document.querySelector("section input").value;
  let conversionType = document.getElementById("Temperature").value;

  if (isNaN(inputValue) || inputValue === "") {
    return alert("Please enter a valid number.");
  }

  let result;
  if (conversionType === "celsius-fahrenheit") {
    result = (inputValue * 9 / 5) + 32;
  } else if (conversionType === "fahrenheit-celsius") {
    result = (inputValue - 32) * 5 / 9;
  }

  document.getElementById("resultBox").value = result.toFixed(1);
}

function resetConverter() {
  document.querySelector("section input").value = "";
  document.getElementById("resultBox").value = "";
  document.getElementById("Temperature").selectedIndex = 0;
}