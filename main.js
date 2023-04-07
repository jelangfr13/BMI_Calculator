function calculateBMI() {
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;

    if (berat == "" || tinggi == "") {
        alert("Silahkan isi berat dan tinggi badan Anda!");
        return;
    }

    var bmi = berat / ((tinggi / 100) ** 2);
    var status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Normal weight";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your BMI is <b>" + bmi.toFixed(1) + "</b> which means You are <b>" + status + "</b>";
}