let numberArray = []


for(let i = 0; i < 2; i++) {
    typedNumber = Number(prompt(`Digite o ${i+1}º número: `))
    numberArray[i] = typedNumber
}


alert(`A soma dos dois número: ` + (numberArray[0] + numberArray[1]))

alert(`A subtração dos dois número: ` + (numberArray[0] - numberArray[1]))
alert(`A multiplicação dos dois número: ` + (numberArray[0] * numberArray[1]))
alert(`A divisão dos dois número: ` + (numberArray[0] / numberArray[1]))
alert(`O resto da divisão dos dois número: ` + (numberArray[0] % numberArray[1]))

if(((numberArray[0] + numberArray[1]) % 2) == 0) {
    alert(`A soma dos dois números é par: ` + (numberArray[0] + numberArray[1]))
} else {
    alert(`A soma dos dois números é ímpar: ` + (numberArray[0] + numberArray[1]))
}

if(numberArray[0] != numberArray[1]) {
    alert(`Os números inseridos são diferentes.`)
} else {
    alert(`Os números inseridos são iguais.`)
}