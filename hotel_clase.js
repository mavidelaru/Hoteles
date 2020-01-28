
class Hotel {

    constructor(nombre, habitaciones, plantas, superficie) {
        this._nombre = nombre;
        this._habitaciones = habitaciones;
        this._plantas = plantas;
        this._superficie = superficie;
    }

    set nombre(nombre) {       /* set nombre(nom){this._nombre=nom}*/
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set habitaciones(habitaciones) {
        this._habitaciones = habitaciones;
    }
    get habitaciones() {
        return this._habitaciones;
    }
    set plantas(plantas) {
        this._plantas = plantas;
    }
    get plantas() {
        return this._plantas;
    }
    set superficie(superficie) {
        this._superficie = superficie;
    }
    get superficie() {
        return this._superficie;
    }

    calcularManteniment(servicio) {

        servicio =  this._habitaciones / 20;

        servicio = servicio * 1500;

        return servicio;
    }

}