// Faça um programa que leia 3 numeros inteiros e apresenteo menor deles.
/*              Exercícios sobre funções
05. Elabore uma função e verifique se o numero é impar ou par

06. Faça uma funão para determina se o numero é impar ou par

07. Faça uma função para verificar o salario de um trabalhad-
or e o emprestimo, verifique se o emprestimo é ate 20% do sa-
lario do trabalhador, se for, o emprestimo deve ser aprovado,
caso contrario, deve ser rejeitado.
*/
let n1 = 5
let n2 = 8
let n3 = 6
let numero

if(n1>n2 && n1>n3){
    numero=n1
}
else if(n2>n1 && n2>n3){
    numero=n2
}
if(n3>n2 && n3>n1){
    numero=n3
}

console.log(`O numero maior é: ${numero}`);