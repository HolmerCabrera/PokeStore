
function CalcularPrecioConDescuento(ValorProducto, ValorDescuento){


    const ValorConDescuento =  ValorProducto-(ValorProducto*ValorDescuento/100);

    return ValorDescuento 


}



function onClickCalcularDescuento() {
    
    const ValorProducto = document.getElementById("ValorProducto").value;
    const ValorDescuento = document.getElementById("ValorDescuento").value;
    const ValorConDescuento = CalcularPrecioConDescuento(ValorProducto,ValorDescuento);
    console.log(ValorConDescuento);

}


