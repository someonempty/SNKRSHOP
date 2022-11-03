import '../style.css';
import { Card } from './catalog';
import { Total } from './total';
import { Basket } from './basket';
import { Promo } from './promo';
import { main } from './catalog';


const aside:any = document.querySelector('.aside');

type Sneaker = {id: number, name: string, price: string, src: string};

const sneakers:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage Brights', price: '$ 650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200', src: 'src/img/chinese.png'}, {id: 3, name: 'New Balance 373 Modern Classics', price: '$ 800', src: 'src/img/classic.png'}, {id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780', src: 'src/img/chinese-brown.png'}, {id: 5, name: 'New Balance X-Racer Utility', price: '$ 1 000', src: 'src/img/racer.png'}, {id: 6, name: 'New Balance 5740 Think Colorfully', price: '$ 940', src: 'src/img/colorfully.png'}];

const basketElements:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage<br>Brights', price: '650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '1 200', src: 'src/img/chinese.png'}];

const addBasketItem = (id:any, name:any, price:any, src:any) => {
    basketElements.push({id, name, price, src})
    basketElements.filter(element => element.id === id)
    console.log(basketElements);
    render()
}

const render = () => {
    aside.innerHTML = ''
    main.innerHTML = ''
    sneakers.forEach(sneaker => {
        Card(sneaker.name, sneaker.price, sneaker.src, () => addBasketItem(sneaker.id, sneaker.name, sneaker.price, sneaker.src))
    }), 
    basketElements.forEach(sneaker => {
        Basket(sneaker.id, sneaker.name, sneaker.price, sneaker.src)
    }),
    Promo(),
    Total()
}

render();
