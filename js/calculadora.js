let btnCalcular= document.getElementById("btnCalcular");

btnCalcular.addEventListener("click" ,clickBtnCalcular);

function clickBtnCalcular(){
    let textPeso= document.getElementById("textPeso");

    let peso= textPeso.value;

    let textAltura=document.getElementById("textAltura");

    let altura= textAltura.value;


    let imc = peso / (altura * altura);
    alert("El IMC es:" + imc);
}

