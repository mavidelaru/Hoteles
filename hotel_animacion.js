

var hoteles = [];


function crearHotel() {

    var nombre = prompt("Nombre del hotel");
    var habitaciones = prompt("Número de habitaciones");
    var plantas = prompt("Número de plantas");
    var superficie = prompt("¿Cuál es la superficie del hotel?")
    var hotel = new Hotel(nombre, habitaciones, plantas, superficie);

    let aumento = hoteles.push(hotel);

    console.log(hoteles);

    alert("Tu hotel se ha CREADO satisfactoriamente");
    document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hoteles inscritos";

}

function borrarHotel() {

    var name = prompt("¿Qué hotel quieres borrar?");

    for (i = hoteles.length - 1; i >= 0; i--) {

        var hotelPosition = hoteles[i];
        if (hotelPosition._nombre === name) {
            hoteles.splice(i, 1);
        }
    }

    alert("Tu hotel se ha BORRADO satisfactoriamente");
    console.log(hoteles);
    document.getElementById("answer").innerHTML = "Hay "+hoteles.length+" hoteles inscritos";

}

function verHotel() {

    var name = prompt("¿Qué hotel quieres borrar?");

    let servicio = 0;

    let flag = false;

    for (i = hoteles.length - 1; i >= 0; i--) {

        var hotelPosition = hoteles[i];
        if (hotelPosition._nombre === name) {

            servicio = hotelPosition.calcularManteniment(servicio);
            var show = "El hotel que buscas se llama " + hotelPosition.nombre + "</br>";
            show += "El número de habitaciones es " + hotelPosition.habitaciones + "</br>";
            show += "El número de plantas es " + hotelPosition.plantas + "</br>";
            show += "Con una superficie de " + hotelPosition.superficie + " metros cuadrados</br>";
            show += "El servicio de mantenimiento es de " + servicio + " euros";
            document.getElementById("showHotel").innerHTML = show;

            flag = true;
        }
    }

    if (flag == false) {

        document.getElementById("showHotel").innerHTML = "Lo siento, no hemos encontrado tu hotel";
    }


}


function modificarHotel() {

    var name = prompt("¿Qué hotel quieres modificar?");
    var counter = hoteles.length - 1;

    for (i = hoteles.length - 1; i >= 0; i--) {

        
        if (hoteles[i]._nombre == name) {

            var cambio = parseInt(prompt("Qué quieres cambiar? 1- Nombre 2- Habitaciones 3- Plantas 4- Superficie"));
            var newData = prompt("Introduce el nuevo dato")
           
            switch (cambio) {
                case 1:
                        hoteles[i].nombre=newData;
                    break;
                case 2:
                        hoteles[i].habitaciones=newData;
                    break;
                case 3 :
                        hoteles[i].plantas=newData;
                    break;
                case 4 :
                        hoteles[i].superficie=newData;
                    break;
                default:
                    alert("Algo ha salido mal. Pruebalo de nuevo");        
            }
            console.log(hoteles);
            document.getElementById("showHotel").innerHTML = "Se han realizado los cambios en el hotel "+ name;

        
        } else {

            counter--
        }

    } if (counter == i){
        alert("No hemos encontrado ese hotel");
        document.getElementById("showHotel").innerHTML = "Lo siento, no hemos encontrado tu hotel";

    }
    
   
    



}





