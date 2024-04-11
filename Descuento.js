function calcularDescuento(monto) {
    let descuento;
    if (monto > 100) {
        descuento = monto * 0.1; 
    } else {
        descuento = monto * 0.02; 
    }
    return descuento;
}


let monto = parseFloat(prompt("Ingrese el monto a pagar:"));

let descuento = calcularDescuento(monto);

alert("El descuento a aplicar es de: " + descuento.toFixed(2) + "%");
