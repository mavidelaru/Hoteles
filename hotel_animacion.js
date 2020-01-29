let hoteles = [];
let sel = document.getElementsByClassName("selectHoteles");


function crearHotel() {

    let nombre = document.getElementById("nameh").value;
    let habitaciones = document.getElementById("nhab").value;
    let plantas = document.getElementById("nplan").value;
    let superficie = document.getElementById("shot").value;
    let hotel = new Hotel(nombre, habitaciones, plantas, superficie);
    let aumento = hoteles.push(hotel);

    contadorHoteles();

    selectCargarHoteles();

    $('#addModal').modal('toggle');
    $('#addModal input').val('');

}



//Función que añade los nuevos hoteles en los select.

function contadorHoteles(){

    if (hoteles.length == 0) {
        document.getElementById("answer").innerHTML = "No tienes ningún hotel guardado";
    } else if (hoteles.length < 2) {
        document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hotel guardado";
    }
    else {
        document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hoteles guardados";
    }
}

function selectCargarHoteles() {

    var opt = [document.createElement('option'), document.createElement('option')];
    //Get elements By Class te hace un array, así que se ha de añadir las opciones a cada elemento del array.
    //Cuando lo hago en la misma línea no funciona: (

    opt[0].innerHTML = hoteles[hoteles.length - 1].nombre;
    opt[1].innerHTML = hoteles[hoteles.length - 1].nombre;

    //opt[1].onclick = "verHotel(this)";

    sel[0].appendChild(opt[0]);
    sel[1].appendChild(opt[1]);
}

//Función que elimina el hotele seleccionado en los select.

function selectEliminarHoteles(selectedHotel){
    
    for(i=0; i<hoteles.length; i++){

        if(selectedHotel == sel[i].options[sel[i].selectedIndex].text){
            sel[0].options[sel[0].selectedIndex].remove();
            sel[1].options[sel[0].selectedIndex].remove();
        }
    }
}

function borrarHotel() {

    var selectedHotel = sel[0].options[sel[0].selectedIndex].text;

    selectEliminarHoteles(selectedHotel);

    alert(selectedHotel);

    for (i = hoteles.length - 1; i >= 0; i--) {
        let hotelPosition = hoteles[i];
        if (hotelPosition._nombre === selectedHotel) {
            hoteles.splice(i, 1);
        }
    }

    alert("Tu hotel se ha BORRADO satisfactoriamente");

    //Div donde se muestran los hoteles que hay
    contadorHoteles();

    $('#deleteModal').modal('toggle');
    $('#deleteModal input').val('');
}



//function deleteSelect() {
   // var list = document.getElementById("selectHoteles");
   // list.removeChild(list.childNodes[hoteles.length]);
//}


function verHotel(something) {

    let servicio = 0;
    let flag = false;
    console.log(something.appendChild());


    for (i = hoteles.length - 1; i >= 0; i--) {
        let hotelPosition = hoteles[i];

        if (hotelPosition._nombre === name) {
            servicio = hotelPosition.calcularManteniment(servicio);
            let show = "El hotel que buscas se llama " + hotelPosition.nombre + "</br>";
            show += "El número de habitaciones es " + hotelPosition.habitaciones + "</br>";
            show += "El número de plantas es " + hotelPosition.plantas + "</br>";
            show += "Con una superficie de " + hotelPosition.superficie + " metros cuadrados</br>";
            show += "El servicio de mantenimiento es de " + servicio + " euros";
            document.getElementById("showHotel").innerHTML = show;

            flag = true;
        }

        if (flag == false) {

            document.getElementById("showHotel").innerHTML = "Lo siento, no hemos encontrado tu hotel";
        }



    }

    function close() {
        $('#seeModal').modal('toggle');
    }

    function modificarHotel() {
        let name = prompt("¿Qué hotel quieres modificar?");
        let counter = hoteles.length - 1;

        for (i = hoteles.length - 1; i >= 0; i--) {
            if (hoteles[i]._nombre == name) {
                let cambio = parseInt(prompt("Qué quieres cambiar? 1- Nombre 2- Habitaciones 3- Plantas 4- Superficie"));
                let newData = prompt("Introduce el nuevo dato")

                switch (cambio) {
                    case 1:
                        hoteles[i].nombre = newData;
                        break;
                    case 2:
                        hoteles[i].habitaciones = newData;
                        break;
                    case 3:
                        hoteles[i].plantas = newData;
                        break;
                    case 4:
                        hoteles[i].superficie = newData;
                        break;
                    default:
                        alert("Algo ha salido mal. Pruebalo de nuevo");
                }
                console.log(hoteles);
                document.getElementById("showHotel").innerHTML = "Se han realizado los cambios en el hotel " + name;

            } else {
                counter--
            }

        } if (counter == i) {
            alert("No hemos encontrado ese hotel");
            document.getElementById("showHotel").innerHTML = "Lo siento, no hemos encontrado tu hotel";

        } }
    }