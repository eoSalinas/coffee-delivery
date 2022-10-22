import arabe from './assets/coffees/arabe.svg'
import cafeComLeite from './assets/coffees/cafe-com-leite.svg'
import capuccino from './assets/coffees/capuccino.svg'
import chocolateQuente from './assets/coffees/chocolate-quente.svg'
import cubano from './assets/coffees/cubano.svg'
import expressoAmericano from './assets/coffees/expresso-americano.svg'
import expressoCremoso from './assets/coffees/expresso-cremoso.svg'
import expressoGelado from './assets/coffees/expresso-gelado.svg'
import expressoTradicional from './assets/coffees/expresso-tradicional.svg'
import havaiano from './assets/coffees/havaiano.svg'
import irlandes from './assets/coffees/irlandes.svg'
import latte from './assets/coffees/latte.svg'
import macchiato from './assets/coffees/macchiato.svg'
import mocaccino from './assets/coffees/mocaccino.svg'

interface Coffee {
  id: number
  coffeeName: string
  tags: Array<string>
  details: string
  price: number
  coffeeImg: string
}

export const coffeesDB: Coffee[] = [
  {
    id: 1,
    tags: ['Tradicional'],
    coffeeName: 'Expresso Tradicional',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    coffeeImg: expressoTradicional,
  },
  {
    id: 2,
    tags: ['Tradicional'],
    coffeeName: 'Expresso Americano',
    details: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    coffeeImg: expressoAmericano,
  },
  {
    id: 3,
    tags: ['Tradicional'],
    coffeeName: 'Expresso Cremoso',
    details: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    coffeeImg: expressoCremoso,
  },
  {
    id: 4,
    tags: ['Tradicional', 'Gelado'],
    coffeeName: 'Expresso Gelado',
    details: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    coffeeImg: expressoGelado,
  },
  {
    id: 5,
    tags: ['Tradicional', 'Com leite'],
    coffeeName: 'Café com leite',
    details: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    coffeeImg: cafeComLeite,
  },
  {
    id: 6,
    tags: ['Tradicional', 'Com leite'],
    coffeeName: 'Latte',
    details: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    coffeeImg: latte,
  },
  {
    id: 7,
    tags: ['Tradicional', 'Com leite'],
    coffeeName: 'Capuccino',
    details: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    coffeeImg: capuccino,
  },
  {
    id: 8,
    tags: ['Tradicional', 'Com leite'],
    coffeeName: 'Macchiato',
    details: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    coffeeImg: macchiato,
  },
  {
    id: 9,
    tags: ['Tradicional', 'Com leite'],
    coffeeName: 'Mocaccino',
    details: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    coffeeImg: mocaccino,
  },
  {
    id: 10,
    tags: ['Especial', 'Com leite'],
    coffeeName: 'Chocolate quente',
    details: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    coffeeImg: chocolateQuente,
  },
  {
    id: 11,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    coffeeName: 'Cubano',
    details: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    coffeeImg: cubano,
  },
  {
    id: 12,
    tags: ['Especial'],
    coffeeName: 'Havaiano',
    details: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    coffeeImg: havaiano,
  },
  {
    id: 13,
    tags: ['Especial'],
    coffeeName: 'Árabe',
    details: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    coffeeImg: arabe,
  },
  {
    id: 14,
    tags: ['Especial', 'Alcoólico'],
    coffeeName: 'Irlandês',
    details: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    coffeeImg: irlandes,
  },
]
