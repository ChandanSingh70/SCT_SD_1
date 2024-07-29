function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputTemperature').value);
    const fromUnit = document.getElementById('inputUnit').value;
    const toUnit = document.getElementById('outputUnit').value;
    let convertedTemp;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            convertedTemp = temp + 273.15;
        } else {
            convertedTemp = temp;
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            convertedTemp = ((temp - 32) * 5/9) + 273.15;
        } else {
            convertedTemp = temp;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            convertedTemp = temp - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            convertedTemp = ((temp - 273.15) * 9/5) + 32;
        } else {
            convertedTemp = temp;
        }
    }

    document.getElementById('result').innerText = `Result: ${convertedTemp.toFixed(2)} ${toUnit}`;
}
