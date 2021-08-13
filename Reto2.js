function resultadoDescuento(precio, descuento){
    return (precio*(100- descuento))/100;
}
function opendesc(){
const inputPrecio = document.getElementById("precio");
const PrecioValue = inputPrecio.value;
const inputDescuento = document.getElementById("descuento");
const DescuentoValue = inputDescuento.value;
const result = resultadoDescuento(PrecioValue,DescuentoValue);

const MostrarPrecioFinal = document.getElementById("mostrardesc");
MostrarPrecioFinal.innerText = "El precio a pagar es $" + result;
}

