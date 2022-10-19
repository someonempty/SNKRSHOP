import '../style.css';
// import { Catalog } from './catalog';
const wrapper = document.querySelector('.wrapper');
const aside:any = document.querySelector('.aside');

const Element = () => {
    const main = document.createElement('main');
    const catalogElement = document.createElement('div');
    const sneakersName = document.createElement('div');
    const basketPriceWrapper = document.createElement('div');
    const sneakersImage = document.createElement('img');
    const whiteBasket = document.createElement('img');
    const basketElementImage = document.createElement('img');
    const deleteBasketItem = document.createElement('img');
    const price = document.createElement('span');
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

    sneakersImage.alt="vintage brights sneakers";
    sneakersImage.src="src/img/vintage.png";
    whiteBasket.src="src/icons/white-basket.svg";
    basketElementImage.src="src/img/vintage.png";
    deleteBasketItem.src="src/icons/delete.svg";

    basketSneakersName.innerHTML = 'New Balance 574 Vintage<br>Brights';
    price.innerText = '$ 650';
    title.innerText = 'My basket';
    sneakersName.innerText = 'New Balance 574 Vintage Brights';
    minus.innerText = '-';
    quantity.innerText = '1';
    plus.innerText = '+';
    basketPrice.innerText = '$ 650';

    main.classList.add('catalog');
    catalogElement.classList.add('catalog-element');
    sneakersImage.classList.add('sneakers-image');
    sneakersName.classList.add('sneakers-name');
    basketPriceWrapper.classList.add('basket-price-wrapper');
    whiteBasket.classList.add('white-basket');
    price.classList.add('price');
    basket.classList.add('basket');
    title.classList.add('title');
    basketElement.classList.add('basket-element');
    basketItemInfoWrapper.classList.add('basket-item-info-wrapper');
    basketSneakersName.classList.add('basket-sneakers-name');
    plusWrapper.classList.add('plus-wrapper');
    minus.classList.add('minus');
    quantity.classList.add('quantity');
    plus.classList.add('plus');
    basketPrice.classList.add('price');
    deleteBasketItem.classList.add('delete-basket-item');
    basketElementImage.classList.add('basket-element-image');

    wrapper?.appendChild(main);
    main.appendChild(catalogElement);
    catalogElement.appendChild(sneakersImage);
    catalogElement.appendChild(sneakersName);
    catalogElement.appendChild(basketPriceWrapper);
    basketPriceWrapper.appendChild(whiteBasket);
    basketPriceWrapper.appendChild(price);
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

}

Element();