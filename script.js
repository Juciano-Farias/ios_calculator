const input = document.querySelector("#input")
const c = document.querySelector("#c")
const maisMenos = document.querySelector("maisMenos")
const porcentagem = document.querySelector("#porcetagem")
const divisor = document.querySelector("#divisor")
const ponto = document.querySelector("#ponto")
const igual = document.querySelector("#igual")
const mutiplicador = document.querySelector("#mutiplicador")
const soma = document.querySelector("#soma")
const menos = document.querySelector("#menos")
const um = document.querySelector("#um")
const dois = document.querySelector("#dois")
const tres = document.querySelector("#tres")
const quatro = document.querySelector("#quatro")
const cinco = document.querySelector("#cinco")
const seis = document.querySelector("#seis")
const sete = document.querySelector("#sete")
const oito = document.querySelector("#oito")
const nove = document.querySelector("#nove")
const zero = document.querySelector("#zero")
let valor1, indicador

um.onclick = function(){
    input.value += 1
}

dois.onclick = function(){
    input.value += 2
}

tres.onclick = function(){
    input.value += 3
}

quatro.onclick = function(){
    input.value += 4
}

cinco.onclick = function(){
    input.value += 5
}

seis.onclick = function(){
    input.value += 6
}

sete.onclick = function(){
    input.value += 7
}

oito.onclick = function(){
    input.value += 8
}

nove.onclick = function(){
    input.value += 9
}

zero.onclick = function(){
    if(input.value) return input.value += 0
}

c.onclick = function(){
    input.value = ''
}

soma.onclick = function(){
    valor1 = parseFloat(input.value)
    input.value = ''
    indicador= '+'
}

menos.onclick = function(){
    valor1 = parseFloat(input.value)
    input.value = ''
    indicador= '-'
}

mutiplicador.onclick = function(){
    valor1 = parseFloat(input.value)
    input.value = ''
    indicador= '*'
}

divisor.onclick = function(){
    valor1 = parseFloat(input.value)
    input.value = ''
    indicador= '/'
}

porcentagem.onclick = function(){
    input.value = parseFloat(input.value)/100
}

ponto.onclick = function() {
    if(!input.value.includes(".")) {
        input.value += '.'
    }
}

igual.onclick = function(){
    console.log(indicador)
    if (indicador === "+") input.value = parseFloat(input.value) + parseFloat(valor1)
    if (indicador === "-") input.value = parseFloat(input.value) - parseFloat(valor1)
    if (indicador === "*") input.value = parseFloat(input.value) * parseFloat(valor1)
    if (indicador === "/") input.value = parseFloat(input.value) / parseFloat(valor1)
    console.log(input.value, valor1)
}