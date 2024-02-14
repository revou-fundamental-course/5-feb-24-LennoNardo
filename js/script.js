document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.querySelector('.input-section input');
    const fahrenheitOutput = document.querySelector('.input-section textarea[name="Fahrenheit"]');
    const calculationOutput = document.querySelector('.input-section textarea[name="Kalkulasi"]');
    const konversiButton = document.querySelector('.my-button button:nth-child(1)');
    const resetButton = document.querySelector('.my-button button:nth-child(2)');
    const reverseButton = document.querySelector('.my-button button:nth-child(3)');
    const fahrenheitLabel = document.querySelector('.input-section label[for="input-field"]');
    const celsiusLabel = document.querySelector('.input-section:nth-child(6) label[for="input-field"]');
    const reverseLink = document.getElementById('reverse-link');
    const penjelasanKonversi = document.getElementById('penjelasan-konversi');

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function calculateAndDisplay() {
        const celsius = parseFloat(celciusInput.value);
        const fahrenheit = convertToFahrenheit(celsius);
        const calculation = `${celsius} °C × 9/5 + 32 = ${fahrenheit} °F`;

        fahrenheitOutput.value = fahrenheit;
        calculationOutput.value = calculation;
    }

    function calculateAndDisplayReverse() {
        const fahrenheitInput = fahrenheitOutput.value.trim();
        const celsiusInput = celciusInput.value.trim();

        if (fahrenheitInput) {
            const fahrenheit = parseFloat(fahrenheitInput);
            const celsius = convertToCelsius(fahrenheit);
            const calculation = `(${fahrenheit} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;

            celciusInput.value = celsius.toFixed(2);
            calculationOutput.value = calculation;
        } else if (celsiusInput) {
            const celsius = parseFloat(celsiusInput);
            const fahrenheit = convertToFahrenheit(celsius);
            const calculation = `${celsius} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;

            fahrenheitOutput.value = fahrenheit.toFixed(2);
            calculationOutput.value = calculation;
        }
    }

    konversiButton.addEventListener('click', calculateAndDisplay);

    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        fahrenheitOutput.value = '';
        calculationOutput.value = '';
    });

    reverseButton.addEventListener('click', function() {
        const tempCelsiusInput = celciusInput.value;
        const tempCelsiusLabel = celsiusLabel.textContent;

        celciusInput.value = fahrenheitOutput.value;
        fahrenheitOutput.value = tempCelsiusInput;

        celsiusLabel.textContent = fahrenheitLabel.textContent;
        fahrenheitLabel.textContent = tempCelsiusLabel;

        calculateAndDisplayReverse();

        if (penjelasanKonversi) {
            const h3 = penjelasanKonversi.querySelector('h3');
            const h4 = penjelasanKonversi.querySelector('h4');
            if (h3.textContent === "Cara Konversi Dari Celsius (°C) ke fahrenheit (°F)") {
                h3.textContent = "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";
                h4.textContent = "Suhu dalam Derajat Celcius sama dengan suhu dalam Derajat Fahrenheit dikurangi 32 dikali 5/9";
            } else {
                h3.textContent = "Cara Konversi Dari Celsius (°C) ke fahrenheit (°F)";
                h4.textContent = "Suhu dalam Derajat Fahrenheit (°F) sama dengan suhu dalam Derajat Celcius dikali 9/5 ditambah 32";
            }
        }
    });

    reverseLink.addEventListener('click', function(event) {
        event.preventDefault();
        reverseButton.click();
        reverseLink.textContent = (reverseLink.textContent === "Fahrenheit ke Celsius") ? "Celsius ke Fahrenheit" : "Fahrenheit ke Celsius";
    });
});
