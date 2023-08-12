const resultado = document.getElementById('resultado')
const a = Number(prompt('Ingresa primer numero'))
const b = Number(prompt('Ingresa segundo numero'))

const p = document.createElement('p')
p.textContent = `La suma de ${a}+${b} es ${a + b}`
resultado.appendChild(p)

