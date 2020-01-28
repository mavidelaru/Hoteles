let hoteles = [];

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

function crearHotel() {

    let nombre = document.getElementById("nameh").value;
    let habitaciones = document.getElementById("nhab").value;
    let plantas = document.getElementById("nplan").value; 
    let superficie = document.getElementById("shot").value;
    let hotel = new Hotel(nombre, habitaciones, plantas, superficie);
    let aumento = hoteles.push(hotel);

    alert("Tu hotel se ha AÑADIDO satisfactoriamente");

    if (hoteles.length==0){
        document.getElementById("answer").innerHTML = "No tienes ningún hotel guardado";
    }else if(hoteles.length<2){
        document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hotel guardado";
    }
    else {
        document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hoteles guardados";
    }

    $('#myModal').modal('toggle');
}

function borrarHotel() {

    let name = prompt("¿Qué hotel quieres borrar?");

    for (i = hoteles.length - 1; i >= 0; i--) {
        let hotelPosition = hoteles[i];
        if (hotelPosition._nombre === name) {
            hoteles.splice(i, 1);
        }
    }

    alert("Tu hotel se ha BORRADO satisfactoriamente");

    //Div donde se muestran los hoteles que hay
    if (hoteles.length<2){
        document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hotel guardado";
    }else {
        document.getElementById("answer").innerHTML = "Hay " + hoteles.length + " hoteles guardados";
    }
}

function verHotel() {

    let name = prompt("¿Qué hotel quieres borrar?");
    let servicio = 0;
    let flag = false;

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
    }

    if (flag == false) {

        document.getElementById("showHotel").innerHTML = "Lo siento, no hemos encontrado tu hotel";
    }
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





