// ATT 1

let num 
let soma = 0

while (num!==0) {
  num = Number(prompt("insira um número"))
  console.log(num)
  soma += num
}

console.log(soma)

// ATT 2


let num1 = Number(prompt("insira um número"))

for(let i = 0; i<=num1; i++){
  console.log(i)
}

//ATT 3


let numeros = [1, 3, 5, 7, 9, 11, 13]

for(let i = 0; i<numeros.length; i++){
  console.log(`seu número do índice ${i} é ${numeros[i]}`)
}

// ATT 4

let usuario 

while(usuario !== "A"){
  usuario = prompt("informe seu tipo de usuário (A,B ou C)").toUpperCase()
  console.log("Acesso negado")
}
console.log("Boas-vindas, admin!")