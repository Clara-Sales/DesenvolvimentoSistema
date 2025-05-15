let peso = 52
let altura = 1.67

if((peso/(altura*altura))<18.5){
    console.log("Você esta abaixo do peso ideal");
}
else if((peso/(altura*altura))>18.5 && (peso/(altura*altura))<24.9){
    console.log("Parabens! Você esta no peso ideal");
}
else if((peso/(altura*altura))>25 && (peso/(altura*altura))<29.9){
    console.log("Você esta acima do peso ideal");
}
else if((peso/(altura*altura))>30 && (peso/(altura*altura))<34.9){
    console.log("Obesidade grau 1");
}
else if((peso/(altura*altura))>35 && (peso/(altura*altura))<39.9){
    console.log("Obesidade grau 2");
} 
else{
    console.log("Obesidade grau 3");
}