import '../style.css';
import { Card } from './catalog';
import { Total } from './total';
import { BasketElement } from './basket';
import { Promo } from './promo';


const main:any = document.querySelector('.catalog');
const basketlist:any = document.querySelector('.basket-list');
let promoWrapper:any = document.querySelector('.promo-wrapper');
let totalWrapper:any = document.querySelector('.total-wrapper');



type Sneaker = {id: number, name: string, price: string, src: string};

const sneakers:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage Brights', price: '$ 650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200', src: 'src/img/chinese.png'}, {id: 3, name: 'New Balance 373 Modern Classics', price: '$ 800', src: 'src/img/classic.png'}, {id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780', src: 'src/img/chinese-brown.png'}, {id: 5, name: 'New Balance X-Racer Utility', price: '$ 1 000', src: 'src/img/racer.png'}, {id: 6, name: 'New Balance 5740 Think Colorfully', price: '$ 940', src: 'src/img/colorfully.png'}];

let basketElements:Sneaker[] = [{id: 1, name: 'New Balance 574 Vintage<br>Brights', price: '650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '1 200', src: 'src/img/chinese.png'}];

const catalogRender = () => { 
    sneakers.forEach(sneaker => {
        main.appendChild(Card(sneaker.name, sneaker.price, sneaker.src, () => addBasketItem(sneaker.id, sneaker.name, sneaker.price, sneaker.src))
    )})
}

const basketRender = () => {

    basketElements.forEach(sneaker => {
        basketlist.appendChild(BasketElement(sneaker.id, sneaker.name, sneaker.price, sneaker.src, () => deleteBasketItem(sneaker.id))
     )})
}

const promoRender = () => {
    promoWrapper.appendChild(Promo());
    promoWrapper = '';
}

const totalRender = () => {
    basketElements.forEach(element => {
       totalWrapper.appendChild(Total(element.price))
    })
}

const render = () => {
    // aside.innerHTML = '';
    main.innerHTML = '';
    catalogRender();
    basketRender();
    promoRender();
    totalRender();
}

const addBasketItem = (id:any, name:any, price:any, src:any) => {
    // basketElements = []
    basketElements.push({id, name, price, src})
    render();
    if (basketElements = basketElements.filter(element => element.id !== id)) {
        render();
    }
    
}

const deleteBasketItem = (id:any) => {
    basketElements = basketElements.filter(element => element.id !== id)
    basketlist.innerHTML = '';
    render();
}

render();

// const wrapper:any = document.querySelector('.wrapper');
// const main:any = document.createElement('main');
// const aside:any = document.querySelector('.aside');
// const title:any = document.createElement('div');
// const basket = document.querySelector('.basket');

// title.innerText = 'My basket';

// main.classList.add('catalog');
// title.classList.add('basket-title');

// wrapper?.appendChild(main);
// wrapper?.appendChild(aside);

// main.appendChild(sneakers.forEach(element => {
// return (Card(element.name, element.price, element.src, () => addBasketItem(element.id, element.price, element.price, element.src )))
// }))

// sneakers.forEach(element => {
//     main.appendChild(Card(element.name, element.price, element.src, () => addBasketItem(element.id, element.price, element.price, element.src )))
// })