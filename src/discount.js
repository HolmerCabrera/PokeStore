function CalcularPrecioConDescuento() {

    // Se crean variables para guardar un elemento con cierto ID en HTML
    // Se usa .value para obtener el valor que tiene ese elemento
    const ValorProducto = document.getElementById("ValorProducto").value;
    const ValorDescuento = document.getElementById("ValorDescuento").value;
    const Resultado = document.getElementById("Resultado");
    
    // Se hace el calculo de lo que el usuario debe pagar despues de aplicar el descuento
    const ValorConDescuento =  ValorProducto-(ValorProducto*ValorDescuento/100);
    
    // Se escribe en la etiqueta que tiene el ID Resultado
    Resultado.innerText = "El precio con descuento es $" + Math.ceil(ValorConDescuento) + " COP";
}
