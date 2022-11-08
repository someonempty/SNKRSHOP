 
    export const Card = (name:any, pricer:any, src:any, onAdd:any) => {

    const priceWrapper = document.createElement('div');
    const catalogElement = document.createElement('div');
    const sneakersName = document.createElement('div');
    const sneakersImage = document.createElement('img');
    const BasketElementButton = document.createElement('button');
    const price = document.createElement('span');
    
    sneakersImage.src = src;
    sneakersName.innerText = name;
    price.innerText = pricer;
    BasketElementButton.onclick = onAdd;
    
    catalogElement.classList.add('catalog-element');
    sneakersImage.classList.add('sneakers-image');
    sneakersName.classList.add('sneakers-name');
    priceWrapper.classList.add('price-wrapper');
    BasketElementButton.classList.add('basket-button');
    price.classList.add('price');
    
    catalogElement.appendChild(sneakersImage);
    catalogElement.appendChild(sneakersName);
    catalogElement.appendChild(priceWrapper);
    priceWrapper.appendChild(BasketElementButton);
    priceWrapper.appendChild(price);
    
    return catalogElement;
}


// export const cardRender = (array:any) => {
//     main.innerHTML = '';
//     array.forEach((element: { name: any; price: any; src: any}) => {
//         Card(element.name, element.price, element.src);
//     });
// }

// НЕ ЗАБЫТЬ ДОБАВИТЬ АЛЬТЫ ДЛЯ КАРТИНОК