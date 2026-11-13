const textbox = document.getElementById("textbox");
const CtoF = document.getElementById("CtoF");
const CtoK = document.getElementById("CtoK");
const FtoC = document.getElementById("FtoC");
const FtoK = document.getElementById("FtoK");
const KtoC = document.getElementById("KtoC");
const KtoF = document.getElementById("KtoF");
const result = document.getElementById("result");
let temperature;

function convert (){
    temperature=textbox.value;
    temperature = Number(temperature);
    if (CtoF.checked){
        temperature = (temperature * 9 / 5) +32;
        result.textContent = `${temperature} F`;
    }
    else if (CtoK.checked){
        temperature = temperature +273.15;
        result.textContent = `${temperature} K`;
    }
    else if (FtoC.checked){
        temperature = 5/9 * (temperature-32);
        result.textContent = `${temperature} C`;
    }
    else if (FtoK.checked){
        temperature = (temperature-32) * 5/9 +273.15;
        result.textContent = `${temperature} K`;
    }
    else if (KtoC.checked){
        temperature = (temperature -273.15);
        result.textContent = `${temperature} C`;
    }
    else if (KtoF.checked){
        temperature = (temperature-273.15)*9/5 +32;
        result.textContent = `${temperature} F`;
    }
    else {
       result.textContent= `Please select a unit conversion`;
    }
}