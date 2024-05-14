import Cardapio from "./cardapio.mjs";

export default class Bebida extends Cardapio{
    constructor(tipo,preco,tamanho){
        super(tipo,preco)
        this.tamanho = tamanho
    }

}
