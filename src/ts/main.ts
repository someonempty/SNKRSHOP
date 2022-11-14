import '../style.css';
import { Card } from './card';
import { Total } from './total';
import { BasketElement } from './basket';
import { Promo } from './promo';

type Sneaker = {id: number, name: string, price: number, src: string, count: number};

const main:any = document.querySelector('.catalog');
let basketlist:any = document.querySelector('.basket-list');
let promoWrapper:any = document.querySelector('.promo-wrapper');
let totalWrapper:any = document.querySelector('.total-wrapper');

const sneakers:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage Brights', price: 650, src: 'src/img/vintage.png', count: 1}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: 1200, src: 'src/img/chinese.png', count: 1}, {id: 3, name: 'New Balance 373 Modern Classics', price: 800, src: 'src/img/classic.png', count: 1}, {id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: 780, src: 'src/img/chinese-brown.png', count: 1}, {id: 5, name: 'New Balance X-Racer Utility', price: 1000, src: 'src/img/racer.png', count: 1}, {id: 6, name: 'New Balance 5740 Think Colorfully', price: 940, src: 'src/img/colorfully.png', count: 1}];

let basketElements:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage<br>Brights', price: 650, src: 'src/img/vintage.png', count: 1}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: 1200, src: 'src/img/chinese.png', count: 1}];

const addBasketItem = (id:number, name:string, price:number, src:string, count:number) => {

    const isThereDuplicate = basketElements.some(element => {
        return element.id === id

    })

    if (isThereDuplicate) {
        basketElements.forEach(element => {
            element.id === id ? element.count++ : element
            basketRender();
            totalRender();
       })
    }
    else {
        basketElements.push({id, name, price, src, count});
        basketlist.innerHTML = '';
        basketRender();
        totalRender();
    }
    
}

const cardRender = () => { 
    sneakers.forEach(sneaker => {
        main.appendChild(Card(sneaker.name, sneaker.price, sneaker.src, () => addBasketItem(sneaker.id, sneaker.name, sneaker.price, sneaker.src, sneaker.count))
    )})
}

const basketRender = () => {
    basketlist.innerHTML = '';
    basketElements.forEach(sneaker => {
        basketlist.appendChild(BasketElement(sneaker.id, sneaker.name, sneaker.price, sneaker.src, () => deleteBasketItem(sneaker.id), sneaker.count)
     )})

}

// const discount = () => {
//     const total = 0;
//     total 
// }

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

const deleteBasketItem = (id:any) => {
    basketElements = basketElements.filter(element => element.id !== id);
    basketRender();
    totalRender();
}

const render = () => {
    main.innerHTML = '';
    cardRender();
    basketRender();
    promoRender();
    totalRender();
}

render();