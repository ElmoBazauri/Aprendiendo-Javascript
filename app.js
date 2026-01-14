let ingresoMensual = 1500;

let gastoAlquiler = 600;
let gastoComida = 250;


let totalGastos = gastoAlquiler + gastoComida;

let balance = ingresoMensual - totalGastos;

let tieneAhorro = true

if(balance > 700)
    tieneAhorro = true
else(
    tieneAhorro = false
)

console.log(`Ingreso mensual: S/ ${ingresoMensual}`)
console.log(`Total de gastos: S/ ${totalGastos}`)
console.log(`Balance final: S/ ${balance}`)
console.log(`Tiene Ahorro?: ${tieneAhorro}`)