
const arr = [1,2,3,4,5,6,7,8,9]

// ------------ IndexOf ---------- //
arr.indexOf(7) // 6 ---> la posicion donde se encuentra el elemento.

// -------- find ---------//
arr.find((num) => {
	return num === 5
}) // ----> Se recorrera todo el arreglo hasta encontrar la coincidencia.

// --------- findIndex ---------//
arr.findIndex((num) => {
	return num === 3
})  // Se recorrera todo el arreglo hasta encontrar el indice indicado.