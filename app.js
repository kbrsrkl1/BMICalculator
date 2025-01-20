const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition")

function calculateBMI() {

    const heightValue = parseFloat(document.getElementById("height").value);
    const weightValue = parseFloat(document.getElementById("weight").value);


    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
        alert("Lütfen geçerli bir boy ve kilo giriniz.");
        return;  
    }

    const heightInMeters = heightValue / 100; // Boyu cm'den metreye çevir

    const bmiValue = weightValue / (heightInMeters * heightInMeters);

    const roundedBMI = parseFloat(bmiValue.toFixed(2));

    bmiInputEl.value = roundedBMI;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Under weight"
    }else if(bmiValue >= 25  &&  bmiValue <=  29.9){
        weightConditionEl.innerText = "Overweight"
    }else if(bmiValue <= 30){
        weightConditionEl.innerText = "Obesity"
    }
}


btnEl.addEventListener("click", calculateBMI);
