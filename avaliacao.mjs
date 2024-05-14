export default class Avaliacao{
    #cliente
    #rate
    constructor(cliente,rate){
        this.#cliente = cliente;
        this.#rate = rate;
    }
    get cliente(){
        return this.#cliente
    }
    get rate(){
        return this.#rate
    }
}