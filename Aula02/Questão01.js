// 01)Faça um progrma que imprima os numeros de 150 a 300
let cont = 150
do{
    console.log(cont);
    cont++;  
} while(cont <= 300)
// OU
for(let i = 150; i <= 300; i++){
    console.log(i);
}
// 02)Faça um programa que imprima a soma de 1 até 1000
let soma = 0
for(let i = 1; i <= 1000; i++){
    soma = soma + 1;
}
console.log(`A soma é:${soma}`);

// 03) Faça um programa que imprima todos os multiplus de 3, entre 1 e 100;
for(let i = 1; i <= 100; i++){
    if( i%3==0){
        console.log(i);  
    }
}

// 04) Faça um progrma que verifica e exibe todos os numeros pares entre 1 e 100;
for(let i = 1; i <= 100; i++){
    if(i%2==0){
        console.log(i);
    }
}
