import '../style.css';
import '../media.css';
import { Card } from './catalogCard';
import { Total } from './total';
import { BasketElement } from './basketElement';
import { Promo } from './promo';

type Sneaker = { id: number, name: string, price: number, src: string, count: number };

const main:HTMLElement = document.querySelector('.catalog')!;
const burger:HTMLElement = document.querySelector('.burger')!;
const aside:HTMLElement = document.querySelector('.aside')!;
let basketList:HTMLElement = document.querySelector('.basket-list')!;
let promoWrapper:HTMLElement = document.querySelector('.promo-wrapper')!;
let totalWrapper:HTMLElement = document.querySelector('.total-wrapper')!;
const promoCodes = ['boberchik', 'bober', 'bobr'];
let discount = 0;
let counter:HTMLElement = document.querySelector('.counter')!;
let tax = 100;
let shipping = 150;


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

// Сократить количество параметров до одного sneaker
const addBasketItem = (sneaker:Sneaker) => {

    const isThereDuplicate = basketElements.some(element => {
        return element.id === sneaker.id;
    })

    if (isThereDuplicate) {
        // Исправить утечку памяти
        basketElements.forEach(element => {
            element.id === sneaker.id ? element.count++ : element;
            render();
        })
    }
    else {
        basketElements.push({id: sneaker.id, name: sneaker.name, price: sneaker.price, src: sneaker.src, count: sneaker.count });
        render();
    }

    if (basketElements.length === 1) {
        render();
    }
    else {
        render();
    }
    
}

const increaseCount = (id: number) => {
    basketElements.forEach((element) => {
        if (element.id === id) {
            element.count++;
            render();
        }
    })
}

const decreaseCount = (id: number) => {
    basketElements.forEach((element, index) => {
        if (element.id === id) {
            if (element.count <= 1) {
                delete basketElements[index];
                render();
            }
            else {
                element.count--;
                promoRender();
                totalRender(discount);
                basketRender();
                counterRender();
            }
        }
    })
}

const cardRender = () => {
    sneakers.forEach(sneaker => {
    
        main.appendChild(Card(sneaker.name, sneaker.price, sneaker.src, 
            () => addBasketItem(sneaker))
        )
    })
}

const basketRender = () => {
    basketList.innerHTML = '';
    basketElements.forEach(sneaker => {
        basketList.appendChild(BasketElement(sneaker.id, sneaker.name, sneaker.price, sneaker.src, sneaker.count, () => increaseCount(sneaker.id), () => decreaseCount(sneaker.id), () => deleteBasketItem(sneaker.id))
        )
    })

}

const promoSubmit = (promoCode:string) => {
    promoCodes.forEach(element => {
        if (element === promoCode) {
            discount = 300;
            render();
        } 
        else {
            render();
        }
    })
}

const promoRender = () => {
    promoWrapper.innerHTML = '';
    promoWrapper.appendChild(Promo(promoSubmit))
}

const counterRender = () => {
    counter.innerHTML = basketElements.reduce((acc, cur) => acc + cur.count, 0).toString();
}

const totalRender = (discount:number) => {

    totalWrapper.innerHTML = '';
    let total: number = 0;
    total -= discount;
    basketElements.forEach(element => {
        total += element.price * element.count;
    })
    totalWrapper.appendChild(Total(total, tax, shipping));
}

const deleteBasketItem = (id:number) => {
    basketElements = basketElements.filter(element => element.id !== id);

    if (basketElements.length === 0) {
        discount = 0;
    }
    render();
}

const render = () => {
    main.innerHTML = '';
    cardRender();
    basketRender();
    promoRender();
    totalRender(discount);
    counterRender();
}




   burger.addEventListener('click', () => {
    aside.classList.toggle('active')
   })

render();
