     
     // import { wrapper } from "./main";
     // import { aside } from "./main";
     // import { basket } from "./main";
     // import { title } from "./main";
     // import {titleWrapper} from "./main";

     export const wrapper:any = document.querySelector('.wrapper');
export const main:any = document.createElement('main');
export const aside:any = document.querySelector('.aside');
export const basket:any = document.createElement('div');
export const title:any = document.createElement('div');
export const titleWrapper = document.createElement('div');

     aside.appendChild(titleWrapper);
     basket.appendChild(title);
     titleWrapper.appendChild(title);
     titleWrapper.classList.add('basket-title-wrapper');

     export const Basket = (id:any, name:any, price:any, src:any, onDelete:any) => {

     const basketElement = document.createElement('div');
     const basketItemInfoWrapper = document.createElement('div');
     const basketSneakersName = document.createElement('div');
     const plusWrapper = document.createElement('div');
     const minus = document.createElement('span');
     const quantity = document.createElement('span');
     const plus = document.createElement('span');
     const basketPrice = document.createElement('span');
     const basketElementImage = document.createElement('img');
     const deleteBasketItem = document.createElement('img');

     minus.innerText = '-';
     quantity.innerText = '1';
     plus.innerText = '+';
     title.innerText = 'My basket';
     deleteBasketItem.src="src/icons/delete.svg";
     
     basketElement.id = id;
     basketSneakersName.innerHTML = name;
     basketPrice.innerText = '$ ' + price;
     basketElementImage.src = src;
     deleteBasketItem.onclick = onDelete;
     
     aside?.appendChild(basket);
     basket.appendChild(basketElement);
     basketElement.appendChild(basketElementImage);
     basketElement.appendChild(basketItemInfoWrapper);
     basketItemInfoWrapper.appendChild(basketSneakersName);
     basketItemInfoWrapper.appendChild(plusWrapper);
     plusWrapper.appendChild(minus);
     plusWrapper.appendChild(quantity);
     plusWrapper.appendChild(plus);
     plusWrapper.appendChild(basketPrice);
     wrapper?.appendChild(aside);
     basketElement.appendChild(deleteBasketItem);
            
     minus.classList.add('minus');
     quantity.classList.add('quantity');
     plus.classList.add('plus');
     deleteBasketItem.classList.add('delete-basket-item');
     basketElementImage.classList.add('basket-element-image');
     basket.classList.add('basket');
     basketElement.classList.add('basket-element');
     basketItemInfoWrapper.classList.add('basket-item-info-wrapper');
     basketSneakersName.classList.add('basket-sneakers-name');
     plusWrapper.classList.add('plus-wrapper');
     basketPrice.classList.add('price');
     title.classList.add('basket-title');

     return basket;
     }
