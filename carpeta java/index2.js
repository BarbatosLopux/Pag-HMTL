/* 2. Escribe un programa que genere y muestre los primeros n números de la secuencia de Fibonacci,
donde n es un número entero dado. La secuencia de Fibonacci comienza con 0 y 1, 
y cada número siguiente es la suma de los dos números anteriores (0, 1, 1, 2, 3, 5, 8, ...). */

numerosFibonacci= [0,1]

for (let i = 0; i < 10; i++) {
    nuevoN = numerosFibonacci[numerosFibonacci.length - 1]+ numerosFibonacci[numerosFibonacci.length-2];
    numerosFibonacci.push(nuevoN);
    
}

console.log(numerosFibonacci)

