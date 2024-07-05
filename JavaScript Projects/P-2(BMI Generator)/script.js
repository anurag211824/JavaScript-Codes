function bmiCalculator() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let bmi = document.querySelector("#bmi");

    // Clear previous messages
    document.querySelector('.UnderWeight').textContent = "";
    document.querySelector('.NormalRange').textContent = "";
    document.querySelector('.Overweight').textContent = "";

    // Validate input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight');
        return;
    }

    let result = (weight / ((height * height) / 10000)).toFixed(2);
    bmi.value = result;

    if (result <= 18.6) {
        document.querySelector('.UnderWeight').textContent = "You are underweight";
    } else if (result >= 18.6 && result <= 24.9) {
        document.querySelector('.NormalRange').textContent = "You are in the normal range";
    } else {
        document.querySelector('.Overweight').textContent = "You are overweight";
    }
}
