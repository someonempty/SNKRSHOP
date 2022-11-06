import '../style.css';
import { Card } from './catalog';
import { Total } from './total';
import { Basket } from './basket';
import { Promo } from './promo';

type Sneaker = {id: number, name: string, price: string, src: string};

export const wrapper:any = document.querySelector('.wrapper');
export const main:any = document.createElement('main');
export const aside:any = document.querySelector('.aside');
export const basket:any = document.createElement('div');
export const title:any = document.createElement('div');
export const titleWrapper = document.createElement('div');


const sneakers:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage Brights', price: '$ 650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200', src: 'src/img/chinese.png'}, {id: 3, name: 'New Balance 373 Modern Classics', price: '$ 800', src: 'src/img/classic.png'}, {id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780', src: 'src/img/chinese-brown.png'}, {id: 5, name: 'New Balance X-Racer Utility', price: '$ 1 000', src: 'src/img/racer.png'}, {id: 6, name: 'New Balance 5740 Think Colorfully', price: '$ 940', src: 'src/img/colorfully.png'}];

let basketElements:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage<br>Brights', price: '650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '1 200', src: 'src/img/chinese.png'}];

const render = () => {
    aside.innerHTML = '';
    main.innerHTML = '';
    sneakers.forEach(sneaker => {
        Card(sneaker.name, sneaker.price, sneaker.src, () => addBasketItem(sneaker.id, sneaker.name, sneaker.price, sneaker.src))
    }), 
    basketElements.forEach(sneaker => {
        Basket(sneaker.id, sneaker.name, sneaker.price, sneaker.src, () => deleteBasketItem(sneaker.id))
    }),
    Promo(),
    basketElements.forEach(element => {
        Total(element.price)
    });
    
};

const addBasketItem = (id:any, name:any, price:any, src:any) => {
    // basketElements = [];
    basketElements.push({id, name, price, src});
    render();
};

const deleteBasketItem = (id:any) => {
    basketElements = basketElements.filter(element => element.id !== id);
    basket.innerHTML = '';
    render();
    console.log(basketElements);
};

console.log(basketElements);
render();
console.log(basketElements);
