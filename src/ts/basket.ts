     const wrapper = document.querySelector('.wrapper');
     const aside:any = document.querySelector('.aside');
  
     export const Basket = () => {

            const basket = document.createElement('div');
            const title = document.createElement('div');
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
            const basketPriceWrapper = document.createElement('div');

            minus.innerText = '-';
            quantity.innerText = '1';
            plus.innerText = '+';
            
           
            
            basketElementImage.src="src/img/vintage.png";
            deleteBasketItem.src="src/icons/delete.svg";
            
            
            basketSneakersName.innerHTML = 'New Balance 574 Vintage<br>Brights';
            title.innerText = 'My basket';
            

            aside?.appendChild(basket);
            basket.appendChild(title);
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
            title.classList.add('title');
            basketElement.classList.add('basket-element');
            basketItemInfoWrapper.classList.add('basket-item-info-wrapper');
            basketSneakersName.classList.add('basket-sneakers-name');
            plusWrapper.classList.add('plus-wrapper');
            basketPriceWrapper.classList.add('basket-price-wrapper');

           
            
            }
    