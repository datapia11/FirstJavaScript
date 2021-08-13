function perimetro(lado){
    return lado*4;
}


function Calcularperimetro(ladoCuadrado){
    const input = document.getElementById("InputCudrado");
    const value = input.value;
    const perim = perimetro(value);
    alert(perim);

}




