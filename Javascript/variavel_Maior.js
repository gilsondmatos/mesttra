let x = 3
let y = 35
let z = 9

let resultado

resultado = ((x + y) >= 90) && (z != 70)
resultado = ((x + y) > 90 || (x + y) == 90) && (z != 70)     // outra possibilidade de construção do operador >= 
                                                             // utilizando o operador lógico ||
console.log(resultado);