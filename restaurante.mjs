import Avaliacao from './avaliacao.mjs';
import Cardapio from './cardapio.mjs';

let restaurante = []

 export default class Restaurante{

    #nome;
    #categoria;
    #ativo;   
    #avaliacao;
    #cardapio

    constructor(nome,categoria){
        this.#nome = nome;
        this.#categoria = categoria;
        this.#ativo = false;
        this.#avaliacao = [];
        this.#cardapio = []

    }
    notaClassificacao(cliente,nota){
        if(nota <= 5 && nota >= 0){
            let teste = new Avaliacao(cliente,nota)
            this.#avaliacao.push(teste.rate)
        }else{
            return'Nota Invalida'
        }
        
    }
    media(){
        if(this.#avaliacao.length !== 0){
            const result = this.#avaliacao.reduce((acumulador,atual)=>  atual + acumulador,0)
            const media = result / this.#avaliacao.length
            return media
        }else{
            return 'Restaurante sem Avaliacao'
        }
        
    }
    trocarStatus(){
        this.#ativo = !this.#ativo
    }
    addCardapio(item){
        if(Cardapio.prototype.isPrototypeOf(item)){
            this.#cardapio.push(item)
        }
    }
    get showCardapio(){

       this.#cardapio.forEach((element)=> console.log(`Nome:${element.tipo} preco: ${element.preco}`))
            
    }
    #objeto(){
        return({
        nome: this.#nome,
        categoria: this.#categoria,
        ativo: this.#ativo,
        media: this.media()
    })}
    get objeto(){
        return this.#objeto
    }
}
