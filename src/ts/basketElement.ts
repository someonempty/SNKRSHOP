
     export const BasketElement = (id:number, name:string, price:number, src:string, count:number, onIncreaseCount:Function, onDecreaseCount:Function, onDelete:Function) => {

     const basketElement = document.createElement('div');
     const basketItemInfoWrapper = document.createElement('div');
     const basketSneakerName = document.createElement('div');
     const plusWrapper = document.createElement('div');
     const minus = document.createElement('span');
     const quantity = document.createElement('span');
     const plus = document.createElement('span');
     const basketPrice = document.createElement('span');
     const basketElementImage = document.createElement('img');
     const deleteBasketItem = document.createElement('img');

     minus.innerText = '-';
     quantity.innerText = count.toString();
     plus.innerText = '+';
     deleteBasketItem.src="src/icons/delete.svg";

     plus.onclick = (e) => {
          e.preventDefault();
          onIncreaseCount();
     }

     minus.onclick = (e) => {
          e.preventDefault();
          onDecreaseCount();
     }

     basketElement.id = id.toString();
     basketSneakerName.innerHTML = name;
     basketPrice.innerText = '$ ' + (price * count).toLocaleString('ru');
     basketElementImage.src = src;
     deleteBasketItem.addEventListener('click', () => {
          onDelete();
     })
     
     basketElement.appendChild(basketElementImage);
     basketElement.appendChild(basketItemInfoWrapper);
     basketItemInfoWrapper.appendChild(basketSneakerName);
     basketItemInfoWrapper.appendChild(plusWrapper);
     plusWrapper.appendChild(minus);
     plusWrapper.appendChild(quantity);
     plusWrapper.appendChild(plus);
     plusWrapper.appendChild(basketPrice);
     basketElement.appendChild(deleteBasketItem);
            
     minus.classList.add('minus');
     quantity.classList.add('quantity');
     plus.classList.add('plus');
     deleteBasketItem.classList.add('delete-basket-item');
     basketElementImage.classList.add('basket-element-image');
     basketElement.classList.add('basket-element');
     basketItemInfoWrapper.classList.add('basket-item-info-wrapper');
     basketSneakerName.classList.add('basket-sneakers-name');
     plusWrapper.classList.add('plus-wrapper');
     basketPrice.classList.add('price');

     return basketElement;
     }
