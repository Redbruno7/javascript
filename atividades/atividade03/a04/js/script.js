function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Testar com 30°C
let fahrenheit = converterCelsiusParaFahrenheit(30);
console.log("30°C em Fahrenheit é:", fahrenheit, "°F");
