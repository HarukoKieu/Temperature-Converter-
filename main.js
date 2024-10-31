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
  } else if (conversionType === "celsius-kelvin") {
    result = parseFloat(inputValue) + 273.15;
  } else if (conversionType === "kelvin-celsius") {
    result = inputValue - 273.15;
  } else if (conversionType === "fahrenheit-kelvin") {
    result = (inputValue - 32) * 5 / 9 + 273.15;
  } else if (conversionType === "kelvin-fahrenheit") {
    result = (inputValue - 273.15) * 9 / 5 + 32;
  }

  document.getElementById("resultBox").value = result.toFixed(2);
}

function resetConverter() {
  document.querySelector("section input").value = "";
  document.getElementById("resultBox").value = "";
  document.getElementById("Temperature").selectedIndex = 0;
}