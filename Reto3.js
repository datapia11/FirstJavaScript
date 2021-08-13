//Promedio
/*function promedio (lista){

    const SumaLista = lista.reduce(
        function (valorAcumulado = 0 , NuevoElemento){
            return valorAcumulado + NuevoElemento;
        }
    );
    const ResultPromedio = SumaLista/ lista.length;
    return ResultPromedio;
}*/

// Mediana

const lista = [80,40,50,30,50,100000];


function EsPar(lista){
    var modulo = lista.length % 2;
    if (modulo === 0){
        return true;
    } 
    else
        return false;
}

function mediana (lista){
    const listaOrdenada = lista.sort(
        function (a,b){ return a-b}
    );
    const paridad = EsPar(listaOrdenada);
    if (paridad == 1){
        const longitud = listaOrdenada.length /2;
        return  ((listaOrdenada[longitud] + listaOrdenada[longitud-1])/2);
    }
    else{

        const longitud = parseInt(listaOrdenada.length/2) ;
        return listaOrdenada[longitud];

    }
  

}





