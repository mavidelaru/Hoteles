let hoteles = [];


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

    cargarhoteles();

    $('#addModal').modal('toggle');

}


//Función que añade los nuevos hoteles en el select.

function cargarhoteles(){

    var sel = document.getElementById("selectHoteles"); 
    var opt = document.createElement('option');
    opt.innerHTML = hoteles[hoteles.length-1].nombre;
    opt.value = hoteles[hoteles.length];
    sel.appendChild(opt);
    
}


function borrarHotel() {


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

    deleteSelect();

    $('#deleteModal').modal('hide');
}



function deleteSelect() {
    var list = document.getElementById("selectHoteles");
    list.removeChild(list.childNodes[hoteles.length]);
  }



function verHotel() {

  
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

    $('#addModal').modal('toggle');

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
    
   
    
    $('#addModal').modal('toggle');



}





