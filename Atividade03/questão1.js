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