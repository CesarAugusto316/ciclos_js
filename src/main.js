// @ts-check

/**
 *
 * Libro: Precalculus by Robert Blitzer 6th Edition
 * Chapter #1: Graph and Functions.
 * Example #4, page 222. Traducido del Inglés.
 *
 *
 * Encontrar el Promedio de la taza de cambio de la siguiente función:
 * f(x) = x² + 3x + 5, en las siguiente coordenadas:
 *
 *    a). x1 = 0 ,  x2 = 1
 *    b). x1 = 1 ,  x2 = 2
 *    c). x1 = -2 ,  x2 = 0
 *
 *
 * Dado el siguiente dominio:
 *
 * X = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
 *
 *
 * Formula matemática para calcular la taza de cambio (average rate of change) promedio.
 *
 *          ∆y       f(x2) - f(x1)
 *    m = ────── =  ───────────────
 *          ∆x         x2 - x1
 *
 */

/**
 *  
 * ─────────────────────────────────────────────
 * Convertimos el problema matemático a código 
 ──────────────────────────────────────────────*/

/**
 *
 *
 * # 1. Implementamos la ecuación  f(x) = x² + 3x + 5
 *
 * @param {number} x
 */
function f(x) {
  return x ** 2 + 3 * x + 5;
}

/**
 *  # 2. Implemetamos la fómula de la taza de cambio
 *
 * @param {number} x2 segunda coordenada
 * @param {number} x1 primera coordenada
 */
function m(x2, x1) {
  return (f(x2) - f(x1)) / (x2 - x1);
}

/**
 * # 3. Resolvemos el problema
 */

// problema  a). x1 = 0 ,  x2 = 1
let resultA = m(1, 0);
console.log(resultA); // 4

// problema  b). x1 = 1 ,  x2 = 2
let resultB = m(2, 1);
console.log(resultB); // 6

// problema  c). x1 = -2 ,  x2 = 0
let resultC = m(-2, 0);
console.log(resultC); // 1

/**
 *
 * La ventaja de programar es que no solo podemos resolver facilmente el problema dado,
 * sino que podemos resolver la ecuacion para todos los valores de x en TODO el
 * conjunto de los numeros reales con una sóla fórmula.
 */
const X = [-4, -3, -2, -1, 0, 1, 2, 3, 4]; // Dominio
const Y = []; // 9,  5,  3,  3, 5, 9, 15, 23, 33 // Codominio o Rango
const test = [];

for (let i = 0; i < X.length; i++) {
  let y = f(X[i]);
  Y.push(y);
}
console.log(Y);

/**
 *
 * Este ejemplo toma n unidades de distancia desde las cordenadas en el Dominio X.
 * @param {number} n
 */
function distance(n) {
  for (let i = 0; i < X.length; i++) {
    let rateOfChange = m(X[i], X[i] + n);
    test.push(rateOfChange);
  }
}
distance(5);
console.log(test);

const test2 = [];
/**
 *
 * Este ejemplo toma n unidades de distancia desde las cordenadas en el Dominio X.
 * Ahora implemntamos el problema anterior usando un While loop.
 * @param {number} n
 */
function distance2(n) {
  let i = 0;
  while (i < X.length) {
    let rateOfChange = m(X[i], X[i] + n);
    test2.push(rateOfChange);
    i++;
  }
}
distance2(2);
console.log(test2);
