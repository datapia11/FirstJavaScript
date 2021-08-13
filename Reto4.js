//Moda
const lista = [ 1, 3, 4, 5, 8, 10, 2, 3, 4, 8, 4, 6, 4, "daniel", "daniel" ];

const lista1Count = {};

lista.map(
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;

        }else{
            lista1Count[elemento] = 1;

        }
    }
)
const toArray = Object.entries(lista1Count).sort(
    function(a,b){
        return a[1]-b[1];
    }
)
const moda = toArray[toArray.length-1];











