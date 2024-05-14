import Restaurante from "./restaurante.mjs";
import Bebida from "./bebida.mjs";
import Comida from "./comida.mjs";


const restaurantePraca = new Restaurante('Praca','Italiano')
restaurantePraca.trocarStatus()
const whisky = new Bebida('Whisky',50.00,'Dose')
const patoAssado = new Comida('Pato Assado',100.00,'Melhor Pato Assado do Universo')
restaurantePraca.addCardapio(whisky)
restaurantePraca.addCardapio(patoAssado)

console.log(restaurantePraca.objeto())
restaurantePraca.showCardapio