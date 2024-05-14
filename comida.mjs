import Cardapio from "./cardapio.mjs";

export default class Comida extends Cardapio{
    constructor(tipo,preco,descricao){
        super(tipo,preco)
        this.descricao = descricao
    }
}


