import '../style.css';
import { Card } from './card';
import { Total } from './total';
import { BasketElement } from './basket';
import { Promo } from './promo';

type Sneaker = {id: number, name: string, price: number, src: string};

const main:any = document.querySelector('.catalog');
let basketlist:any = document.querySelector('.basket-list');
let promoWrapper:any = document.querySelector('.promo-wrapper');
let totalWrapper:any = document.querySelector('.total-wrapper');

const sneakers:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage Brights', price: 650, src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: 1200, src: 'src/img/chinese.png'}, {id: 3, name: 'New Balance 373 Modern Classics', price: 800, src: 'src/img/classic.png'}, {id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: 780, src: 'src/img/chinese-brown.png'}, {id: 5, name: 'New Balance X-Racer Utility', price: 1000, src: 'src/img/racer.png'}, {id: 6, name: 'New Balance 5740 Think Colorfully', price: 940, src: 'src/img/colorfully.png'}];

let basketElements:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage<br>Brights', price: 650, src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: 1200, src: 'src/img/chinese.png'}];

const addBasketItem = (id:any, name:any, price:any, src:any) => {
    basketElements.push({id, name, price, src});
    basketlist.innerHTML = '';
    // basketElements = basketElements.filter(element => element.id !== id);
    basketRender();
    totalRender();
}

const catalogRender = () => { 
    sneakers.forEach(sneaker => {
        main.appendChild(Card(sneaker.name, sneaker.price, sneaker.src, () => addBasketItem(sneaker.id, sneaker.name, sneaker.price, sneaker.src))
    )})
}

const basketRender = () => {
    basketlist.innerHTML = '';
    console.log(basketElements);
    basketElements.forEach(sneaker => {
        basketlist.appendChild(BasketElement(sneaker.id, sneaker.name, sneaker.price, sneaker.src, () => deleteBasketItem(sneaker.id))
     )})

}

const promoRender = () => {
    promoWrapper.innerHTML = '';
    promoWrapper.appendChild(Promo());
}

const totalRender = () => {
    totalWrapper.innerHTML = '';
    let total:number = 0;
    basketElements.forEach(element => {
        total += element.price;
    })
    totalWrapper.appendChild(Total(total));
}

function deleteBasketItem(id:any) {
    basketElements = basketElements.filter(element => element.id !== id);
    basketRender();
    totalRender();
}

const render = () => {
    // aside.innerHTML = '';
    main.innerHTML = '';
    catalogRender();
    basketRender();
    promoRender();
    totalRender();
}

render();