function MediaArimetrica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function calcularMediaArimetrica() {
    let resultado= document.getElementById("inputResultado");

    let input = document.getElementById("input");
    let value = input.value;
   
    
    let valueArray = Array.from(value.split(','),Number)
    
    let promedio = MediaArimetrica(valueArray);

    resultado.innerText = "El promedio de los datos ingresados es: " +  promedio;
}
    




function Mediana(lista) {

    const listaOrdenada = lista.sort(function(a, b) {
        return a - b;
     
    });
    console.log("Ordernado "+listaOrdenada);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

        if (esPar(listaOrdenada.length)) {
            const elemento1 = listaOrdenada[mitadLista - 1];
            const elemento2 = listaOrdenada[mitadLista];

            const promedioElemento1Y2 = MediaArimetica([
                elemento1,
                elemento2,
        ]);

    mediana = promedioElemento1Y2;
    } else {
    mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}

function calcularMediana() {
    let resultado= document.getElementById("inputResultado");

    let input = document.getElementById("input");
    let value = input.value;
   
    
    let valueArray = Array.from(value.split(','),Number)
    
    let mediana = Mediana(valueArray);

    resultado.innerText = "La mediana de los datos ingresados es: " +  mediana;
}









