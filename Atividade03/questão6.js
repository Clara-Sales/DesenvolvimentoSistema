let numero = -5
let mostrar
let condicao

if(numero<0){
    condicao='negativo'

    if(numero%2==0){
        mostrar='par'
    }
    else if(numero%2!=0){
        mostrar='impar'
    }
    
    console.log(`O numero é ${condicao} ${mostrar}`);
}
else{
    condicao='positivo'
    console.log(`O numero é ${condicao}`);
}

 
    
