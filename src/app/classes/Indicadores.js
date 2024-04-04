//Para almacenar los diferentes tipos de indicadores que ya tenemos usamos esta clase
//Cada vez que se añada un indicador nuevo esta clase sera la encargada de procesar dicho
//...indicador
export class Indicadores {
   _indicador = "";
   _elementos = []
   _listIndicadores = [];
   _agenciaSede = {};
   _agenciaAlcaide = {};
   _agenciaBata = {};

    constructor(nuevoIndicador, elementos) {
        this._indicador = nuevoIndicador;
        this._listIndicadores.push(nuevoIndicador);
        this._elementos = elementos

        //Establecemos el monto y el total clientes de la sede
        this._agenciaSede["monto"] = 0;
        this._agenciaSede["numCliConcedidos"] = 0;
        
        //Establecemos el monto y total clientes de alcaide
        this._agenciaAlcaide["monto"] = 0;
        this._agenciaAlcaide["numCliConcedidos"] = 0;

        //Establecemos el monto y total clientes de alcaide
        this._agenciaBata["monto"] = 0;
        this._agenciaBata["numCliConcedidos"] = 0;
    }
    /* 
    Los indicadores son: Tipo Persona, Tipo producto, sexo...
    si quiero añadir un indicador nuevo entonces:
    let nuevoIndicador = {
        nombre: 'barrio',
        elementos: ["Semu", "Banapa"]
        agenciaSede: {
            monto: 0,
            totalClientes: 0
        },
        agenciaAlcaide: {
            monto: 0,
            totalClientes: 0
        },
        agenciaBata: {
            monto: 0,
            totalClientes: 0,            
        }
    }
    listaIndicadores.push(nuevoIndicador)
    
    */


    //Si queremos sumarle un nuevo monto al indicador
   operacionEnSede(indicadorBuscado) {
    if( this._indicador == indicadorBuscado ) {
        var numCliTotal = this._agenciaSede.numCliConcedidos;
        var monto = this._agenciaSede.monto;

        numCliTotal += 1;
        monto += 1;

        this._agenciaSede.numCliConcedidos = numCliTotal;
        this._agenciaSede.monto = monto;

    }
    return 0;
   }

   operacionEnAlcaide(indicadorBuscado) {
    if( this._indicador == indicadorBuscado ) {
        var numCliTotal = this._agenciaAlcaide.numCliConcedidos;
        var monto = this._agenciaAlcaide.monto;

        numCliTotal += 1;
        monto += 1;

        this._agenciaAlcaide.numCliConcedidos = numCliTotal;
        this._agenciaAlcaide.monto = monto;

    }
    return 0;
   }
   operacionEnBata(indicadorBuscado) {
    if( this._indicador == indicadorBuscado ) {
        var numCliTotal = this._agenciaBata.numCliConcedidos;
        var monto = this._agenciaBata.monto;

        numCliTotal += 1;
        monto += 1;

        this._agenciaBata.numCliConcedidos = numCliTotal;
        this._agenciaBata.monto = monto;

    }
    return 0;
   }

   //Si queremos añadir un indicador
   agregarNuevoIndicador(indicador, nuevoElementos) {
    if(!this._listIndicadores.includes(indicador)) {
        this._listIndicadores.push(indicador)
    }
   }

   //Si queremos añadir un elemento
   agregarElementos(nuevoElemento) {
    if(nuevoElemento !== null) {
        this._elementos.push(nuevoElemento)
    }
   }

   //GETTERS
    _getIndicador() {
       return this._indicador;
    }
    _getListIndicadores() {
       return this._listIndicadores;
    }
    _getElementos() {
        return this._elementos;
    }
}