import Avaliacao from './avaliacao.mjs';

let restaurante = []

 export default class Restaurante{

    #nome;
    #categoria;
    #ativo;   
    #avaliacao

    constructor(nome,categoria){
        this.#nome = nome;
        this.#categoria = categoria;
        this.#ativo = false;
        this.#avaliacao = [];

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


const restaurantePraca = new Restaurante('Praca','Italiana')
const restauranteMexicano = new Restaurante('Nachos','Mexicano')

restaurantePraca.notaClassificacao('Carla',5)
restaurantePraca.trocarStatus()

restaurante.push(restaurantePraca.objeto())
restaurante.push(restauranteMexicano.objeto())
console.log(restaurante)