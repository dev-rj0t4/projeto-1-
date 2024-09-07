function calculate() {

    var height=document.getElementById("height").value/100
    var weight=document.getElementById("weight").value
    console.log(height)
    console.log(weight)

    var imc = weight / height ** 2;
    console.log(imc)

    if(imc < 18.5) {
       window.alert("Você está muito abaixo do peso")
    }
    else if(imc < 24.9) {
        window.alert("Você está normal");
    }
    else if(imc < 29.9) {
        window.alert("Você está acima do peso");
    }
    else if(imc < 39.9) {
        window.alert("Você está com obessidade");
    }
    
}