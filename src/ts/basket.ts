     const wrapper = document.querySelector('.wrapper');
     const aside:any = document.querySelector('.aside');
     const basket = document.createElement('div');
     const title = document.createElement('div');
     basket.appendChild(title);
     title.classList.add('title');

     const Basket = (name:any, price:any, src:any) => {

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
     basketPrice.innerText = '$ ' + price;
     basketSneakersName.innerHTML = name;
     title.innerText = 'My basket';
     
     basketElementImage.src = src;
     deleteBasketItem.src="src/icons/delete.svg";
     
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

     }

     const basketElements = [{name: 'New Balance 574 Vintage<br>Brights', price: 650, src: 'src/img/vintage.png'}, {name: 'New Balance Made in UK 920<br>Chinese New Year', price: 1200, src: 'src/img/chinese.png'}];

     export const basketRender = () => {
          aside.innerHTML = '';
          basketElements.forEach((element: { name: any; price: any; src: any}) => {
        Basket(element.name, element.price, element.src);
     })
}
