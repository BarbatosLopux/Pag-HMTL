/* 1. Escribe un programa que encuentre el número mayor y el número menor en una matriz de números enteros. */
function encontrarNumero(matriz){
    let menor = Math.min(...matriz.flat());
    let mayor = Math.max(...matriz.flat());
    return { mayor, menor};
}


/* matriz 2x2 */
const matrizNumeros = [
    [4,3,6],[9,8,3]
];

const busqueda = encontrarNumero(matrizNumeros);
console.log("Número mayor:", busqueda.mayor);
console.log("Número menor:", busqueda.menor);
