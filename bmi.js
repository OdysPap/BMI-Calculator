const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bmi = weight / (height * height);
    document.getElementById("bmiNumber").textContent = bmi;
    document.getElementById("result").style.display = "block";
    if (bmi < 18.5) {
        document.getElementById("underweight").style.display = "block";
        document.getElementById("normal").style.display = "none";
        document.getElementById("overweight").style.display = "none";
        document.getElementById("obese").style.display = "none";
    }else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("normal").style.display = "block";
        document.getElementById("underweight").style.display = "none";
        document.getElementById("overweight").style.display = "none";
        document.getElementById("obese").style.display = "none";
    }else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("overweight").style.display = "block";
        document.getElementById("underweight").style.display = "none";
        document.getElementById("normal").style.display = "none";
        document.getElementById("obese").style.display = "none";
    }else if (bmi >= 30) {
        document.getElementById("obese").style.display = "block";
        document.getElementById("underweight").style.display = "none";
        document.getElementById("normal").style.display = "none";
        document.getElementById("overweight").style.display = "none";
    }
});
