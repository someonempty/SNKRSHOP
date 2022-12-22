import '../style.css';
import { Card } from './card';
import { Total } from './total';
import { BasketElement } from './basket';
import { Promo } from './promo';

type Sneaker = { id: number, name: string, price: number, src: string, count: number };

const main: any = document.querySelector('.catalog');
// const basketIcon:any = document.querySelector('.basket-icon');
let basketList: any = document.querySelector('.basket-list');
let promoWrapper: any = document.querySelector('.promo-wrapper');
let totalWrapper: any = document.querySelector('.total-wrapper');
const promoCodes = ['boberchik', 'bober', 'bobr'];
let discount = 0;


const sneakers: Sneaker[] = [
    { id: 1, name: 'New Balance 574 Vintage Brights', price: 650, src: 'src/img/vintage.png', count: 1 },
    { id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: 1200, src: 'src/img/chinese.png', count: 1 },
    { id: 3, name: 'New Balance 373 Modern Classics', price: 800, src: 'src/img/classic.png', count: 1 },
    { id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: 780, src: 'src/img/chinese-brown.png', count: 1 },
    { id: 5, name: 'New Balance X-Racer Utility', price: 1000, src: 'src/img/racer.png', count: 1 },
    { id: 6, name: 'New Balance 5740 Think Colorfully', price: 940, src: 'src/img/colorfully.png', count: 1 }
];

let basketElements: Sneaker[] = [
    { id: 1, name: 'New Balance 574 Vintage<br>Brights', price: 650, src: 'src/img/vintage.png', count: 1 },
    { id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: 1200, src: 'src/img/chinese.png', count: 1 }
];



// -----------------------------------Функции-----------------------------------

const addBasketItem = (id: number, name: string, price: number, src: string, count: number) => {

    const isThereDuplicate = basketElements.some(element => {
        return element.id === id;
    })

    if (isThereDuplicate) {
        basketElements.forEach(element => {
            element.id === id ? element.count++ : element;
            basketRender();
            totalRender(discount);
        })
    }
    else {
        basketElements.push({ id, name, price, src, count });
        basketList.innerHTML = '';
        basketRender();
        totalRender(discount);
    }

    if (basketElements.length === 1) {
        totalRender(discount);
    }
    else {
        totalRender(discount);
    }
    
}

const increaseCount = (id: number) => {
    basketElements.forEach((element) => {
        if (element.id === id) {
            element.count++;
            promoRender();
            totalRender(discount);
            basketRender();
        }
    })
}

const decreaseCount = (id: number) => {
    basketElements.forEach((element, index) => {
        if (element.id === id) {
            if (element.count <= 1) {
                delete basketElements[index];
                promoRender();
                totalRender(discount);
                basketRender();
            }
            else {
                element.count--;
                promoRender();
                totalRender(discount);
                basketRender();
            }
        }
    })
}

const cardRender = () => {
    sneakers.forEach(sneaker => {
        main.appendChild(Card(sneaker.name, sneaker.price, sneaker.src, () => addBasketItem(sneaker.id, sneaker.name, sneaker.price, sneaker.src, sneaker.count))
        )
    })
}

const basketRender = () => {
    basketList.innerHTML = '';
    basketElements.forEach(sneaker => {
        basketList.appendChild(BasketElement(sneaker.id, sneaker.name, sneaker.price, sneaker.src, () => deleteBasketItem(sneaker.id), sneaker.count, () => increaseCount(sneaker.id), () => decreaseCount(sneaker.id))
        )
    })

}

const promoSubmit = (promoCode: any) => {
    promoCodes.forEach(element => {
        if (element === promoCode) {
            discount = 300;
            totalRender(discount);
            
        } 
        else {
            totalRender(discount);
        }
    })
}

const promoRender = () => {
    promoWrapper.innerHTML = '';
    promoWrapper.appendChild(Promo(promoSubmit))
}

const totalRender = (discount:any) => {

    totalWrapper.innerHTML = '';
    let total: number = 0;
    total -= discount;
    basketElements.forEach(element => {
        total += element.price * element.count;
    })
    totalWrapper.appendChild(Total(total));
}

const deleteBasketItem = (id: any) => {
    basketElements = basketElements.filter(element => element.id !== id);
    basketRender();
    totalRender(discount);
    if (basketElements.length === 0) {
        discount = 0;
        totalRender(discount);
    }
}

const render = () => {
    main.innerHTML = '';
    cardRender();
    basketRender();
    promoRender();
    totalRender(discount);
}

render();